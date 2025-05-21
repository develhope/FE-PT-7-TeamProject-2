import React from "react";
import "./OffersSection.css";

const offers = [
  "100% Welcome Bonus on First Play",
  "VIP Members Receive Monthly Rewards",
  "Cashback on All Table Games"
];

const OffersSection = () => (
  <section className="casino-details-offers-section">
    <h2 className="casino-details-exclusive-offers">Exclusive Offers</h2>
    <ul className="casino-details-offers-list">
      {offers.map((offer, idx) => (
        <li key={idx}>{offer}</li>
      ))}
    </ul>
  </section>
);

export default OffersSection;