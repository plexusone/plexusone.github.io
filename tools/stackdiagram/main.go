// Command stackdiagram generates a marketecture SVG diagram of the PlexusOne
// platform from plexusone-capability-stack.json. The SVG is a portable artifact
// for READMEs, blog posts, and slides; the /platform page renders the same data
// as interactive HTML.
//
// The tool uses github.com/grokify/prism-capability to generate the SVG,
// adapting PlexusOne's nested JSON schema to prism's flat CapabilityStack IR.
//
// Usage (from tools/stackdiagram):
//
//	go run .
//
// Reads:  apps/web/public/data/plexusone-capability-stack.json
// Writes: apps/web/public/img/plexusone-capability-stack.svg
//         apps/web/public/data/plexusone-capability-stack.d2
package main

import (
	"context"
	"encoding/json"
	"encoding/xml"
	"fmt"
	"os"
	"path/filepath"
	"strings"

	"github.com/grokify/brandkit/svg/security"
	"github.com/grokify/brandkit/svg/verify"
	"github.com/grokify/d2vision"
	d2render "github.com/grokify/d2vision/render"
	capstack "github.com/grokify/prism-capability"
	"github.com/grokify/prism-capability/render"
)

// PlexusOne schema: nested capabilities within layers.
// (Subset of full stack.json for parsing; prism-capability schema is flatter.)
type Capability struct {
	ID       string `json:"id"`
	Name     string `json:"name"`
	Tooling  []Tool `json:"tooling,omitempty"`
}

type Tool struct {
	Name string `json:"name"`
}

type Layer struct {
	ID           string         `json:"id"`
	Name         string         `json:"name"`
	Description  string         `json:"description,omitempty"`
	Order        int            `json:"order"`
	Capabilities []Capability   `json:"capabilities,omitempty"`
}

type Stack struct {
	Metadata struct {
		Name  string `json:"name"`
		Title string `json:"title"`
	} `json:"metadata"`
	Layers []Layer `json:"layers"`
}

// PlexusOne design system colors (apps/web/src/index.css).
const (
	colorDark  = "#0a0e1a"
	colorText  = "#f1f5f9"
	colorMuted = "#94a3b8"
)

func esc(s string) string {
	var b strings.Builder
	if err := xml.EscapeText(&b, []byte(s)); err != nil {
		panic(err)
	}
	return b.String()
}

func findRepoRoot() (string, error) {
	dir, err := os.Getwd()
	if err != nil {
		return "", fmt.Errorf("get working directory: %w", err)
	}
	for d := dir; ; d = filepath.Dir(d) {
		if _, err := os.Stat(filepath.Join(d, "apps", "web")); err == nil {
			return d, nil
		}
		if filepath.Dir(d) == d {
			return "", fmt.Errorf("repo root with apps/web not found above %s", dir)
		}
	}
}

// adaptToCapstack converts PlexusOne's nested JSON schema to prism-capability's flat IR.
func adaptToCapstack(stack Stack) *capstack.CapabilityStack {
	doc := &capstack.CapabilityStack{
		Metadata: capstack.Metadata{
			Name:    stack.Metadata.Name,
			Version: "1.0.0",
			Title:   stack.Metadata.Title,
		},
	}

	// Add layers (in order).
	doc.Layers = make([]capstack.Layer, len(stack.Layers))
	for i, l := range stack.Layers {
		doc.Layers[i] = capstack.Layer{
			ID:          l.ID,
			Name:        l.Name,
			Description: l.Description,
			Order:       l.Order,
		}
	}

	// Add capabilities (flat, with layerID reference).
	for _, l := range stack.Layers {
		for _, c := range l.Capabilities {
			tooling := make([]capstack.Tool, len(c.Tooling))
			for j, t := range c.Tooling {
				tooling[j] = capstack.Tool{Name: t.Name}
			}
			cap := capstack.Capability{
				ID:       c.ID,
				Name:     c.Name,
				LayerID:  l.ID,
				Tooling:  tooling,
				Status:   capstack.StatusOperational,
			}
			doc.Capabilities = append(doc.Capabilities, cap)
		}
	}

	return doc
}

func generateSVG(doc *capstack.CapabilityStack) (string, error) {
	opts := render.DefaultSVGOptions()
	opts.Layout = render.SVGLayoutStack
	opts.Title = "PlexusOne Platform Capability Stack"
	opts.Subtitle = "Build AI-Native Software in Go · plexusone.dev/platform"
	opts.TopBandLabel = "Your AI-Native Applications"
	opts.Substrate = "Go · OpenTelemetry · Kubernetes · OpenAI, Anthropic, Google, AWS, Twilio, LiveKit & 10+ more providers"
	opts.Theme = render.DefaultSVGTheme()

	svg, err := render.RenderSVGString(doc, opts)
	if err != nil {
		return "", fmt.Errorf("render SVG: %w", err)
	}
	return svg, nil
}

// generateD2 emits an editable D2 (d2lang.com) source for the same diagram.
func generateD2(stack Stack) string {
	var b strings.Builder
	b.WriteString("# PlexusOne Platform Capability Stack\n")
	b.WriteString("# Generated from plexusone-capability-stack.json by tools/stackdiagram - do not edit by hand.\n\n")
	b.WriteString("direction: down\n")
	b.WriteString("grid-columns: 1\n")
	b.WriteString("grid-gap: 8\n\n")

	colorSlate := "#1e293b"
	colorNavy := "#0f172a"

	fmt.Fprintf(&b, "apps: %q {\n  style.fill: %q\n  style.stroke: %q\n  style.font-color: %q\n}\n\n",
		"Your AI-Native Applications", colorSlate, "#8b5cf6", colorText)

	layerColors := map[string]string{
		"experiences":        "#06b6d4",
		"agent-intelligence": "#8b5cf6",
		"connectivity":       "#ec4899",
		"trust":              "#a855f7",
		"operations":         "#06b6d4",
		"foundations":        "#8b5cf6",
	}

	for _, layer := range stack.Layers {
		accent := layerColors[layer.ID]
		if accent == "" {
			accent = "#8b5cf6"
		}
		fmt.Fprintf(&b, "%s: %q {\n", layer.ID, layer.Name)
		cols := len(layer.Capabilities)
		if cols > 4 {
			cols = 4
		}
		fmt.Fprintf(&b, "  grid-columns: %d\n", cols)
		fmt.Fprintf(&b, "  style.fill: %q\n  style.stroke: %q\n  style.font-color: %q\n", colorNavy, accent, colorText)
		for _, c := range layer.Capabilities {
			fmt.Fprintf(&b, "  %s: %q {\n    style.fill: %q\n    style.stroke: %q\n    style.font-color: %q\n  }\n",
				c.ID, c.Name, colorSlate, accent, colorText)
		}
		b.WriteString("}\n\n")
	}

	fmt.Fprintf(&b, "substrate: %q {\n  style.fill: %q\n  style.font-color: %q\n}\n",
		"Go / OpenTelemetry / Kubernetes / OpenAI, Anthropic, Google, AWS, Twilio, LiveKit & 10+ more providers",
		colorSlate, colorMuted)
	return b.String()
}

// validateD2 round-trips the D2 source through d2vision.
func validateD2(d2Code string, stack Stack) error {
	renderer, err := d2render.New()
	if err != nil {
		return fmt.Errorf("create D2 renderer: %w", err)
	}
	svgBytes, err := renderer.RenderSVG(context.Background(), d2Code, nil)
	if err != nil {
		return fmt.Errorf("D2 source does not compile: %w", err)
	}

	diagram, err := d2vision.ParseBytes(svgBytes)
	if err != nil {
		return fmt.Errorf("parse D2-rendered SVG: %w", err)
	}

	// Expect one container per layer plus the apps and substrate bands as nodes.
	wantCapabilities := 0
	for _, layer := range stack.Layers {
		wantCapabilities += len(layer.Capabilities)
	}
	if got := diagram.ContainerCount(); got < len(stack.Layers) {
		return fmt.Errorf("D2 round-trip: expected at least %d layer containers, found %d", len(stack.Layers), got)
	}
	if got := len(diagram.Nodes); got < wantCapabilities {
		return fmt.Errorf("D2 round-trip: expected at least %d capability nodes, found %d", wantCapabilities, got)
	}
	return nil
}

// verifySVG gates the generated file with brandkit.
func verifySVG(path string) error {
	vres, err := verify.SVG(path)
	if err != nil {
		return fmt.Errorf("brandkit verify: %w", err)
	}
	if !vres.IsSuccess() {
		return fmt.Errorf("generated SVG failed vector verification: %s", strings.Join(vres.Errors, "; "))
	}

	sres, err := security.SVG(path)
	if err != nil {
		return fmt.Errorf("brandkit security scan: %w", err)
	}
	if !sres.IsSuccess() {
		details := make([]string, 0, len(sres.Threats)+len(sres.Errors))
		for _, t := range sres.Threats {
			details = append(details, t.Description)
		}
		details = append(details, sres.Errors...)
		return fmt.Errorf("generated SVG failed security scan: %s", strings.Join(details, "; "))
	}
	return nil
}

func run() error {
	root, err := findRepoRoot()
	if err != nil {
		return err
	}

	inPath := filepath.Join(root, "apps", "web", "public", "data", "plexusone-capability-stack.json")
	data, err := os.ReadFile(inPath)
	if err != nil {
		return fmt.Errorf("read capability stack: %w", err)
	}

	var stack Stack
	if err := json.Unmarshal(data, &stack); err != nil {
		return fmt.Errorf("parse capability stack: %w", err)
	}
	if len(stack.Layers) == 0 {
		return fmt.Errorf("capability stack has no layers: %s", inPath)
	}

	// Adapt to prism-capability schema and generate SVG via the library.
	doc := adaptToCapstack(stack)
	svgStr, err := generateSVG(doc)
	if err != nil {
		return err
	}

	// Write SVG and verify it.
	outDir := filepath.Join(root, "apps", "web", "public", "img")
	if err := os.MkdirAll(outDir, 0o755); err != nil {
		return fmt.Errorf("create output directory: %w", err)
	}
	outPath := filepath.Join(outDir, "plexusone-capability-stack.svg")
	if err := os.WriteFile(outPath, []byte(svgStr), 0o644); err != nil {
		return fmt.Errorf("write SVG: %w", err)
	}

	if err := verifySVG(outPath); err != nil {
		return err
	}
	fmt.Printf("Generated %s (%d layers, rendered by prism-capability, verified pure vector and secure)\n", outPath, len(stack.Layers))

	// Companion D2 source.
	d2Code := generateD2(stack)
	if err := validateD2(d2Code, stack); err != nil {
		return err
	}
	d2Path := filepath.Join(root, "apps", "web", "public", "data", "plexusone-capability-stack.d2")
	if err := os.WriteFile(d2Path, []byte(d2Code), 0o644); err != nil {
		return fmt.Errorf("write D2 source: %w", err)
	}
	fmt.Printf("Generated %s (validated with d2vision round-trip)\n", d2Path)
	return nil
}

func main() {
	if err := run(); err != nil {
		fmt.Fprintln(os.Stderr, "stackdiagram:", err)
		os.Exit(1)
	}
}
