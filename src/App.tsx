import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import TripFacts from './components/TripFacts'
import Editorial from './components/Editorial'
import Experiences from './components/Experiences'
import Itinerary from './components/Itinerary'
import Gallery from './components/Gallery'
import PackageDetails from './components/PackageDetails'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TripFacts />
        <Editorial />
        <Experiences />
        <Itinerary />
        <Gallery />
        <PackageDetails />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
