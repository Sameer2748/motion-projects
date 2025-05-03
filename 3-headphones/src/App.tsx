import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import { UpdateFollower } from "react-mouse-follower"
import Services from "./components/services/Services"
import Banner from "./components/banner/Banner"
import BannerBottom from "./components/banner/BannerBottom"
import Blog from "./components/blogs/Blog"
import Footer from "./components/footer/Footer"
// primary #aa6d6b
// brandrdark #151616

function App() {


  return (
    <>
    <UpdateFollower
    mouseOptions={{
      zIndex:9999,
      followSpeed:1.5,
      backgroundColor:"white" 
    }}
     >
     <Navbar/>
     <Hero/>
     </UpdateFollower>
     <UpdateFollower
    mouseOptions={{
      zIndex:9999,
      followSpeed:1.5,
      backgroundColor:"black" 
    }}
     >
     <Services/>
     <Banner/>
     <BannerBottom/>
     <Blog/>
     </UpdateFollower>
     <UpdateFollower mouseOptions={{
      zIndex:9999,
      followSpeed:1.5,
      backgroundColor:"white" 
    }}>
      <Footer/>
     </UpdateFollower>
    </>
  )
}

export default App
