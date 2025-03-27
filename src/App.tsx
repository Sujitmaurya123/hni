
import './App.css'
import CardAmenity from './components/Home/AmenityCard'
import FloorImage from './components/Home/FlooerPlantImage'
import Footer from './components/Home/Footer-section'

import GodrejWadalaWestHeader from './components/Home/GodrejWadalaWestHeader'
import HeroSection from './components/Home/Hero-section'
import ImageSlider from './components/Home/ImageSlider'
import LocationSection from './components/Home/LocationAdvantageSection'
import GodrejPro from './components/Home/Strip-section'
import VideoCd from './components/Home/VideoCard'
import Navbar from './components/Navbar/Navbar'


function App() {
 

  return (
    <>
      <Navbar/>
       <HeroSection/>
       <GodrejPro/>
       <GodrejWadalaWestHeader/>
      <CardAmenity/>
      <FloorImage/>
      <LocationSection/>
       <ImageSlider/>
       <VideoCd/>
       <Footer/>
    </>
  )
}

export default App
