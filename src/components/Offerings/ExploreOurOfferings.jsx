import "./ExploreOurOfferings.css";
import OfferingsCard from "./OfferingsCard/OfferingsCard";
import { useState } from "react";

function ExploreOurOfferings() {
  const cards = [
    {
      link: "/premium-experiences",
      imgSrc: "/public/Menù & carousel img/pemiumExperience.png",
      title: "Premium Experiences",
      description: "Curated experiences around the city",
    },
    {
      link: "/fine-dining",
      imgSrc: "/public/Menù & carousel img/fineDining.png",
      title: "Fine Dining",
      description: "World-class culinary experiences",
    },
    {
      link: "/NoleggioAuto.jsx",
      imgSrc: "/public/Menù & carousel img/luxuryCar.png",
      title: "Luxury Car",
      description: "Experience Vegas with style",
    },
    {
      link: "/src/pages/Coktails",
      imgSrc: "/public/Menù & carousel img/cocktails.png",
      title: "Cocktails",
      description: "Expertly crafted signature drinks",
    },
    {
      link: "/src/pages/ChildrensArea",
      imgSrc: "/public/Menù & carousel img/bambini.jpeg",
      title: "Children Area",
      description: "Fun activities for our youngest guests",
    },
    {
      link: "/src/pages/ThingsToDo",
      imgSrc: "/public/Menù & carousel img/thingsToDo.png",
      title: "Things To Do",
      description: "Discover the best of Las Vegas",
    },
  ];

  const cardsPerView = 3;
  const [current, setCurrent] = useState(0);

  const getVisibleCards = () => {
    const visible = [];
    for (let i = 0; i < cardsPerView; i++) {
      visible.push(cards[(current + i) % cards.length]);
    }
    return visible;
  };

  const prevCards = () =>
    setCurrent((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  const nextCards = () =>
    setCurrent((prev) => (prev + 1) % cards.length);

  const cardsToShow = getVisibleCards();

  return (
    <>
      <section className="our-offerings">
        <h1 className="offerings-header">Explore Our Offerings</h1>
        <div className="offerings-carousel">
          <button className="carousel-btn" onClick={prevCards}>&lt;</button>
          <div className="carousel-card-wrapper" style={{ display: "flex", gap: "2vw" }}>
            {cardsToShow.map((card, idx) => (
              <OfferingsCard key={idx + card.title} {...card} />
            ))}
          </div>
          <button className="carousel-btn" onClick={nextCards}>&gt;</button>
        </div>
      </section>
    </>
  );
}
export default ExploreOurOfferings;
