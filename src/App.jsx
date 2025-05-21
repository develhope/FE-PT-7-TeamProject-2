import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import PremiumExperiences from './pages/PremiunExperiences/PremiumExperiences'
import SpaBooking from './pages/SpaBooking/SpaBooking'
import FineDining from './pages/FineDining/FineDining'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
//import CasinoDetails from './pages/LotusCasinoDetails/CasinoDetailsMain'

// import NoleggioAuto from './pages/NoleggioAuto/NoleggioAuto'
// import FaqPage from './pages/FooterLinks/Faq/Faq'

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/spa-booking" element={<SpaBooking />} />
      <Route path="/premium-experiences" element={<PremiumExperiences />} />
     <Route path="/fine-dining" element={<FineDining />} />
    {/* <Route path='/casino-details' element={<CasinoDetails />} />

        <Route path="/noleggio" element={<NoleggioAuto />} /> */}
      {/* <Route path="/faq-footer" element={<FaqPage />} /> */}
    </Routes>
    <Footer />
    </>
  )
}

export default App