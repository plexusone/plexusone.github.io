import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop'
import { Hero } from './components/Hero'
import { Pillars } from './components/Pillars'
import { PlatformCapabilities } from './components/PlatformCapabilities'
import { GettingStarted } from './components/GettingStarted'
import { InAction } from './components/InAction'
import { Philosophy } from './components/Philosophy'
import { EcosystemMetrics } from './components/EcosystemMetrics'
import { Footer } from './components/Footer'
import { IntegrationsPage } from './pages/IntegrationsPage'
import { ProductPage } from './pages/ProductPage'
import { ProjectPage } from './pages/ProjectPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { BlogPage } from './pages/BlogPage'
import { BlogPostPage } from './pages/BlogPostPage'
import { MCPPage } from './pages/MCPPage'
import { ReleasesPage } from './pages/ReleasesPage'
import { AcademyPage } from './pages/AcademyPage'
import { AcademyCoursePage } from './pages/AcademyCoursePage'
import { SpecificationsPage } from './pages/SpecificationsPage'
import { ApplicationsPage } from './pages/ApplicationsPage'
import { LibrariesPage } from './pages/LibrariesPage'
import { PillarPage } from './pages/PillarPage'
import { WhyPage } from './pages/WhyPage'
import { PlatformPage } from './pages/PlatformPage'

// Handle redirects from 404.html for GitHub Pages SPA support
function RedirectHandler() {
  const navigate = useNavigate()

  useEffect(() => {
    const redirect = sessionStorage.getItem('redirect')
    if (redirect) {
      sessionStorage.removeItem('redirect')
      navigate(redirect, { replace: true })
    }
  }, [navigate])

  return null
}

function HomePage() {
  return (
    <>
      <Hero />
      <Pillars />
      <GettingStarted />
      <InAction />
      <Philosophy />
      <EcosystemMetrics />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <RedirectHandler />
      <ScrollToTop />
      <div className="min-h-screen bg-plexus-dark">
        <plexus-nav></plexus-nav>
        <main id="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/why" element={<WhyPage />} />
            <Route path="/platform" element={<PlatformPage />} />
            <Route path="/integrations" element={<IntegrationsPage />} />
            {/* Category list pages */}
            <Route path="/libraries" element={<LibrariesPage />} />
            {/* Platform pillars */}
            <Route path="/agents" element={<PillarPage id="agents"><PlatformCapabilities /></PillarPage>} />
            <Route path="/systems" element={<PillarPage id="systems" />} />
            <Route path="/operations" element={<PillarPage id="operations" />} />
            <Route path="/specs" element={<PillarPage id="specs" />} />
            <Route path="/app" element={<PillarPage id="app" />} />
            <Route path="/specifications" element={<SpecificationsPage />} />
            <Route path="/applications" element={<ApplicationsPage />} />
            {/* Individual product pages by category */}
            <Route path="/libraries/:slug" element={<ProductPage />} />
            <Route path="/agents/:slug" element={<ProductPage />} />
            <Route path="/specifications/:slug" element={<ProductPage />} />
            <Route path="/applications/:slug" element={<ProductPage />} />
            {/* Legacy route - redirect to proper category */}
            <Route path="/products/:slug" element={<ProductPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/mcp" element={<MCPPage />} />
            <Route path="/releases" element={<ReleasesPage />} />
            <Route path="/academy" element={<AcademyPage />} />
            <Route path="/academy/:slug" element={<AcademyCoursePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
