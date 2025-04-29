import AppBanner from "./components/appbanner/AppBanner"
import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
import Services from "./components/services/Services"
import WhereToBuy from "./components/wheretobuy/WhereToBuy"


function App() {

  return (
    <div className="overflow-x-hidden">
    <Hero/>
    <Services/>
    <WhereToBuy/>
    <AppBanner />
    <Footer/>
    </div>
  )
}

export default App
