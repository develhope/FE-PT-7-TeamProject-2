import "./ExploreOurOfferings.css";
import OfferingsCard from "./OfferingsCard/OfferingsCard";
import { useState, useEffect } from "react";

function ExploreOurOfferings() {
  const cards = [
    {
      link: "/premium-experiences",
      imgSrc: "/Menù & carousel img/pemiumExperience.png",
      title: "Premium Experiences",
      description: "Curated experiences around the city",
    },
    {
      link: "/fine-dining",
      imgSrc: "/Menù & carousel img/fineDining.png",
      title: "Fine Dining",
      description: "World-class culinary experiences",
    },
    {
      link: "/NoleggioAuto.jsx",
      imgSrc: "/Menù & carousel img/luxuryCar.png",
      title: "Luxury Car",
      description: "Experience Vegas with style",
    },
    {
      link: "/src/pages/Coktails",
      imgSrc: "/Menù & carousel img/cocktails.png",
      title: "Cocktails",
      description: "Expertly crafted signature drinks",
    },
    {
      link: "/src/pages/ChildrensArea",
      imgSrc: "/Menù & carousel img/bambini.jpeg",
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
  const slideWidth = 320;
  const gap = 20;

  const extendedCards = [
    ...cards.slice(-cardsPerView),
    ...cards,
    ...cards.slice(0, cardsPerView),
  ];

  const [current, setCurrent] = useState(cardsPerView);
  const [transition, setTransition] = useState(true);
  const [needReset, setNeedReset] = useState(false);

  const handleNext = () => {
    if (current === extendedCards.length - cardsPerView - 1) {
      setNeedReset("start");
    }
    setCurrent((prev) => prev + 1);
    setTransition(true);
  };

  const handlePrev = () => {
    if (current === 1) {
      setNeedReset("end");
    }
    setCurrent((prev) => prev - 1);
    setTransition(true);
  };

  const handleTransitionEnd = () => {
    if (needReset === "start") {
      setTransition(false);
      setCurrent(cardsPerView);
      setNeedReset(false);
    }
    if (needReset === "end") {
      setTransition(false);
      setCurrent(extendedCards.length - 2 * cardsPerView);
      setNeedReset(false);
    }
  };

  useEffect(() => {
    if (!transition && needReset === false) {
      setTimeout(() => setTransition(true), 20);
    }
  }, [transition, needReset]);

  const totalWidth =
    extendedCards.length * slideWidth + (extendedCards.length - 1) * gap;

  return (
    <section className="our-offerings">
      <h1 className="offerings-header">Explore Our Offerings</h1>
      <div className="carousel">
        <div className="offerings-carousel" style={{ position: "relative" }}>
          <div className="carousel-fade carousel-fade-left"></div>
          <div className="carousel-fade carousel-fade-right"></div>
          <button className="carousel-btn" onClick={handlePrev}>
            &lt;
          </button>
          <div className="carousel-outer">
            <div
              className="carousel-card-wrapper"
              style={{
                transform: `translateX(-${current * (slideWidth + gap)}px)`,
                transition: transition
                  ? "transform 0.7s cubic-bezier(0.77,0,0.175,1)"
                  : "none",
                width: `${totalWidth}px`,
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedCards.map((card, idx) => (
                <OfferingsCard key={idx + card.title} {...card} />
              ))}
            </div>
          </div>
          <button className="carousel-btn" onClick={handleNext}>
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}

export default ExploreOurOfferings;
