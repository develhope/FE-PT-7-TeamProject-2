import React from "react";
import FeatureCard from "./FeatureCard";
import "./FeaturesList.css";

const features = [
  {
    imgSrc: "Lotus/Lotus-pics/High Limit Room.jpeg",
    imgAlt: "High Limit Room",
    title: "Top-Tier Slot Machines",
    description: "Enjoy hundreds of state-of-the-art slot games with progressive jackpots and stunning visuals.",
    titleClass: "casino-details-h3-top-tier",
    descClass: "casino-details-p-top-tier-more-info"
  },
  {
    imgSrc: "Lotus/Lotus-pics/Roulette.jpeg",
    imgAlt: "Roulette",
    title: "Classic Table Games",
    description: "From Poker to Blackjack and Roulette, take your seat at our professional-grade tables.",
    titleClass: "casino-details-h3-classic-table",
    descClass: "casino-details-p-classic-table-more-info"
  },
  {
    imgSrc: "Lotus/Lotus-pics/Texas-Hold-Em.jpeg",
    imgAlt: "Texas Hold'Em",
    title: "Exclusive VIP Lounge",
    description: "Indulge in privacy and prestige with personal service and high-limit games.",
    titleClass: "casino-details-h3-exclusive-vip",
    descClass: "casino-details-p-exclusive-more-info"
  }
];

const FeaturesList = () => (
  <section className="casino-details-features-container">
    {features.map((feature, idx) => (
      <FeatureCard key={idx} {...feature} />
    ))}
  </section>
);

export default FeaturesList;