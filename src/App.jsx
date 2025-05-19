import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import PremiumExperiences from "./pages/PremiunExperiences/PremiumExperiences";
import SpaBooking from "./pages/SpaBooking/SpaBooking";
// import NoleggioAuto from './pages/NoleggioAuto/NoleggioAuto'
import NewsletterPage from "./pages/NewsletterPage/NewsletterPage";
// import FaqPage from './pages/FooterLinks/Faq/Faq'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/spa-booking" element={<SpaBooking />} />
      <Route path="/premium-experiences" element={<PremiumExperiences />} />
      {/* <Route path="/noleggio" element={<NoleggioAuto />} /> */}
      <Route path="/newsletter" element={<NewsletterPage />} />
      {/* <Route path="/faq-footer" element={<FaqPage />} /> */}
    </Routes>
  );
}

export default App;
