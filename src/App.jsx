import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import PremiumExperiences from './pages/PremiunExperiences/PremiumExperiences'
// import NoleggioAuto from './pages/NoleggioAuto/NoleggioAuto'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/premium-experiences" element={<PremiumExperiences />} />
      {/* <Route path="/noleggio" element={<NoleggioAuto />} /> */}
    </Routes>
  )
}

export default App
