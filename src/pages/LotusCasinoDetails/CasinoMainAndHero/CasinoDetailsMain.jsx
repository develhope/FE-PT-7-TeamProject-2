import React from "react";
import CasinoDetailsHero from "./CasinoDetailsHero";
import FeaturesList from "./FeaturesList";
import EventsSection from "./EventsSection";
import OffersSection from "./OffersSection";
import ContactSection from "./ContactSection";
import useRevealOnScroll from "./RevealOnScroll";
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