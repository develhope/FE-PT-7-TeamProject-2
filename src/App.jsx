import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import PremiumExperiences from './pages/PremiunExperiences/PremiumExperiences'
import SpaBooking from './pages/SpaBooking/SpaBooking'
import CarRental from './pages/CarRental/CarRental'
// import FaqPage from './pages/FooterLinks/Faq/Faq'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/spa-booking" element={<SpaBooking />} />
      <Route path="/premium-experiences" element={<PremiumExperiences />} />
      <Route path="/car-rental" element={<CarRental />} />
      {/* <Route path="/faq-footer" element={<FaqPage />} /> */}
    </Routes>
  )
}

export default App