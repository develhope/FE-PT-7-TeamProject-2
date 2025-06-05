import CarCarousel from './CarCarousel';
import LuxuryServices from './LuxuryServices';
import './CarHero.css';

const CarHero = () => {
  return (
    <section className="car-hero-main-section">
      <div className="car-hero-heading">
          <h1>Drive your dream. Today.</h1>
          <p>Experience luxury, redefined.</p>
        </div>
      <div className="car-hero-carousel-section">
        <CarCarousel />
      </div>
      <div className="car-hero-services-section">
        <LuxuryServices />
      </div>
    </section>
  );
};

export default CarHero;
