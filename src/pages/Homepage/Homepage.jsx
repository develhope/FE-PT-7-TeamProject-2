import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
//import Rooms from '../../components/Rooms/Rooms'
import Spa from '../../components/Spa/Spa'
import ExploreOurOfferings from '../../components/Offerings/ExploreOurOfferings'
// import Casino from '../../components/Casino/Casino'
// import AboutUs from '../../components/AboutUs/AboutUs'
import Footer from '../../components/Footer/Footer'

function Homepage() {
  return (
    <>
      <Navbar />
      <Hero />
    {/*<Rooms />*/}
      <Spa />
      <ExploreOurOfferings />
      {/* <Casino /> */}
      {/* <AboutUs /> */}
      <Footer />
    </>
  )
}

export default Homepage