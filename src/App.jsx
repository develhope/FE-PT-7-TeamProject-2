import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import PremiumExperiences from './pages/PremiunExperiences/PremiumExperiences'
import FaqPage from './pages/FooterLinks/Faq/Faq'
// import NoleggioAuto from './pages/NoleggioAuto/NoleggioAuto'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/premium-experiences" element={<PremiumExperiences />} />
      {/* <Route path="/noleggio" element={<NoleggioAuto />} /> */}
      <Route path="/faq-footer" element={<FaqPage />} />
    </Routes>
  )
}

export default App
