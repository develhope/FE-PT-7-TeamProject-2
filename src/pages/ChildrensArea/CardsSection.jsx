import React from 'react';
import './CardsSection.css';

const cardsData = [
  {
    title: 'Kids Pool Paradise',
    description: "Splash and play in our specially designed children's pool",
    img: 'ChildrenAreaPics/bimba-piscina.jpg'
  },
  {
    title: 'Gaming Zone',
    description: 'Step into a world of digital adventure',
    img: 'ChildrenAreaPics/bimbi-piscina-palline.avif'
  },
  {
    title: 'Creative Arts Center',
    description: "Unleash your child's creativity in our dedicated arts space",
    img: 'ChildrenAreaPics/ragazza-mani-colori.jpg'
  }
];

const CardsSection = () => (
    <div className="cards-section cards-section--spaced">
    {cardsData.map((card, index) => (
      <div className="card-tilt" key={index}>
        <div className="card-inner">
          <div className="card-front" style={{ backgroundImage: `url(${card.img})` }}>
            <div className="card-content">
              <p className="card-title">{card.title}</p>
              <span className="card-description">{card.description}</span>
            </div>
          </div>
          <div className="card-back">
            <div className="card-content">
              <p className="card-back-text">Contact the concierge for reservations</p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default CardsSection;