import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { Navigation } from './components/Navigation'
import { HeroGeometric } from './components/ui/shape-landing-hero'
import { WhyChooseUs } from './components/WhyChooseUs'
import { ServicesCards } from './components/ServicesCards'
import { CompanyDetails } from './components/CompanyDetails'
import { TalentShare } from './components/TalentShare'
import { Careers } from './components/Careers'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { AIMLService } from './pages/AIMLService'
import { ProgramManagementService } from './pages/ProgramManagementService'
import { SoftwareDevelopmentService } from './pages/SoftwareDevelopmentService'
import { InfrastructureService } from './pages/InfrastructureService'
import { DataAnalyticsService } from './pages/DataAnalyticsService'
import { CenterExcellenceService } from './pages/CenterExcellenceService'
import { CompanyDetailsPage } from './pages/CompanyDetailsPage'
import { TalentShareDetailsPage } from './pages/TalentShareDetailsPage'
import { CareersPage } from './pages/CareersPage'
import { ScrollToTop } from './components/ScrollToTop'

function HomePage() {
  return (
    <>
      <section id="home">
        <HeroGeometric 
          badge="Technology Solutions Since 2009"
          title1="Welcome To"
          title2="Immidi Infotech LLC" 
        />
      </section>
      <WhyChooseUs />
      <ServicesCards />
      <CompanyDetails />
      <TalentShare />
      <Careers />
      <Contact />
    </>
  )
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services/ai-ml" element={<AIMLService />} />
              <Route path="/services/program-management" element={<ProgramManagementService />} />
              <Route path="/services/software-development" element={<SoftwareDevelopmentService />} />
              <Route path="/services/infrastructure" element={<InfrastructureService />} />
              <Route path="/services/data-analytics" element={<DataAnalyticsService />} />
              <Route path="/services/center-excellence" element={<CenterExcellenceService />} />
              <Route path="/company-details" element={<CompanyDetailsPage />} />
              <Route path="/talent-share-details" element={<TalentShareDetailsPage />} />
              <Route path="/careers" element={<CareersPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
