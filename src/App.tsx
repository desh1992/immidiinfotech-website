import { ThemeProvider } from './contexts/ThemeContext'
import { Navigation } from './components/Navigation'
import { HeroGeometric } from './components/ui/shape-landing-hero'
import { WhyChooseUs } from './components/WhyChooseUs'
import { Services } from './components/Services'
import { CompanyDetails } from './components/CompanyDetails'
import { TalentShare } from './components/TalentShare'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navigation />
        <main>
          <section id="home">
            <HeroGeometric 
              badge="Technology Solutions Since 2009"
              title1="Welcome To"
              title2="Immidi Infotech LLC" 
            />
          </section>
          <WhyChooseUs />
          <Services />
          <CompanyDetails />
          <TalentShare />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
