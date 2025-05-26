import React from "react";
import CasinoDetailsHero from "./CasinoDetailsHero";
import FeaturesList from "../FeaturesCardAndList/FeaturesList"
import EventsSection from "../CasinoEventCardAndSection/EventsSection";
import OffersSection from "../CasinoOfferSectAndReveal/OffersSection";
import ContactSection from "../SezioneContattiCasino/ContactSection";
import useRevealOnScroll from "../CasinoOfferSectAndReveal/RevealOnScroll";
import "./CasinoDetailsMain.css";


const CasinoDetailsMain = () => {
  useRevealOnScroll(
    ".casino-details-feature, .casino-details-event-card, .casino-details-offers-list li"
  );

  return (
    <main className="casino-details-main-section">
      <CasinoDetailsHero />
      <FeaturesList />
      <EventsSection />
      <OffersSection />
      <ContactSection />
    </main>
  );
};

export default CasinoDetailsMain;