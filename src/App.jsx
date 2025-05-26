import { useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom"
import Homepage from "./pages/Homepage/Homepage"
import PremiumExperiences from "./pages/PremiunExperiences/PremiumExperiences"
import SpaBooking from "./pages/SpaBooking/SpaBooking"
import CasinoDetailsMain from "./pages/LotusCasinoDetails/CasinoMainAndHero/CasinoDetailsMain"
import Footer from "./components/Footer/Footer";
// import NoleggioAuto from './pages/NoleggioAuto/NoleggioAuto'
import ContactUs from "./pages/FooterLinks/ContactUs/ContactUs";
import CancelReservation from "./pages/FooterLinks/CancelReservation/CancelReservation";
import Navbar from "./components/Navbar/Navbar";
import LotusReservation from "./pages/Reservation/LotusReservation";
import FineDining from "./pages/FineDining/FineDining";
import FaqPage from "./pages/FooterLinks/Faq/Faq";
import NewsletterPage from "./pages/NewsletterPage/NewsletterPage";
import ThingsToDo from "./pages/ThingsToDo/ThingsToDo";
import PrivacyCookie from "./pages/FooterLinks/CookiePrivacy/CookiePrivacy";

const Wrapper = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return children;
};
function App() {
  return (
    <Wrapper>
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
      <Route path="/newsletter" element={<NewsletterPage />} />
      <Route path="/thingstodo" element={<ThingsToDo />} />
      <Route path="/cookie-policy" element={<PrivacyCookie />} />
    </Routes>
    <Footer />
    </Wrapper>
  );
}

export default App;
