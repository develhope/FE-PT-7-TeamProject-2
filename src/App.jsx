import { Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage/Homepage"
import PremiumExperiences from "./pages/PremiunExperiences/PremiumExperiences"
import SpaBooking from "./pages/SpaBooking/SpaBooking"
import CasinoDetailsMain from "./pages/LotusCasinoDetails/CasinoDetailsMain";
import Footer from "./components/Footer/Footer";

function App() {
  return (
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
        <Route path="/car-rental" element={<CarRental />} />
        <Route path="/newsletter" element={<NewsletterPage />} />
        <Route path="/cookie-policy" element={<PrivacyCookie />} />
    </Routes>
  )
}

export default App;
