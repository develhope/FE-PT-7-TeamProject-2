import React from "react";
import "./CasinoContainer.css";
import CasinoItem from "./CasinoItem";

const casinoData = [
  {
    img: "CasinoPics/Virtual-Lottery.jpeg",
    alt: "Virtual Lottery",
    title: "Virtual Lottery",
    overlayText: "2000+ Games available"
  },
  {
    img: "CasinoPics/Roulette.jpeg",
    alt: "Roulette",
    title: "Roulette",
    overlayText: "50+ Roulette tables"
  },
  {
    img: "CasinoPics/Texas-Hold-Em.jpeg",
    alt: "Texas Hold'Em",
    title: "Texas Hold'Em",
    overlayText: "24/7 Poker Challenge"
  },
  {
    img: "CasinoPics/High-Limit-Room.jpeg",
    alt: "High Limit Room",
    title: "High Limit Room",
    overlayText: "Exclusive VIP room"
  }
];

const CasinoContainer = () => {
  return (
    <div className="wcc-casino-container">
      {casinoData.map((item, index) => (
        <CasinoItem 
          key={index} 
          img={item.img} 
          alt={item.alt} 
          title={item.title} 
          overlayText={item.overlayText} 
          delay={index * 0.3}
        />
      ))}
    </div>
  );
};

export default CasinoContainer;
