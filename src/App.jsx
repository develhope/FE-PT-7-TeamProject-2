import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import PremiumExperiences from './pages/PremiunExperiences/PremiumExperiences'
import FaqPage from './pages/FooterLinks/Faq/Faq'
import SpaBooking from './pages/SpaBooking/SpaBooking'
// import NoleggioAuto from './pages/NoleggioAuto/NoleggioAuto'
import ContactUs from './pages/FooterLinks/ContactUs/ContactUs'
import CancelReservation from './pages/FooterLinks/CancelReservation/CancelReservation'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/premium-experiences" element={<PremiumExperiences />} />
        {/* <Route path="/noleggio" element={<NoleggioAuto />} /> */}
        <Route path="/faq-footer" element={<FaqPage />} />
        <Route path="/spa-booking" element={<SpaBooking />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/cancel-reservation' element={<CancelReservation />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
