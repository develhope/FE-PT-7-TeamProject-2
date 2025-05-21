import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import PremiumExperiences from './pages/PremiunExperiences/PremiumExperiences'
import SpaBooking from './pages/SpaBooking/SpaBooking'
import CasinoDetailsMain from './pages/LotusCasinoDetails/CasinoDetailsMain'
import Footer from './components/Footer/Footer'
// import NoleggioAuto from './pages/NoleggioAuto/NoleggioAuto'
import ContactUs from './pages/FooterLinks/ContactUs/ContactUs'
import CancelReservation from './pages/FooterLinks/CancelReservation/CancelReservation'
import Navbar from './components/Navbar/Navbar'
import LotusReservation from './pages/Reservation/LotusReservation'
import FineDining from './pages/FineDining/FineDining'


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/spa-booking" element={<SpaBooking />} />
      <Route path="/premium-experiences" element={<PremiumExperiences />} />
      <Route path="/casino-details-main" element={<CasinoDetailsMain />} />
      <Route path="/lotus-reservation" element={<LotusReservation />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/faq-page" element={<FaqPage />} />
      <Route path="/cancel-reservation" element={<CancelReservation />} />
      <Route path="/fine-dining" element={<FineDining />} />
      
      {/* <Route path="/noleggio" element={<NoleggioAuto />} /> */}
       <Route path="/faq-footer" element={<FaqPage />} /> 
    </Routes>
    <Footer />
    </>
  )
}

export default App