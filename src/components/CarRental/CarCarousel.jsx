import { useEffect, useState, useRef } from 'react';
import './CarCarousel.css';
import carImages from '../../data/cars_data';

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 5000;

  const images = carImages
    .map(car => car.image)
    .sort(() => Math.random() - 0.5);


  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, delay);

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="car-carousel-wrapper">
      <div className="car-carousel-container">
        <div
          className="car-carousel-slider"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Slide ${idx}`}
              className="car-carousel-image"
            />
          ))}
        </div>

        <button className="car-carousel-button left" onClick={prevSlide}>
          &#x2039;
        </button>
        <button className="car-carousel-button right" onClick={nextSlide}>
          &#x203A;
        </button>
      
      <div className="car-carousel-dots">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`car-carousel-dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
      
      
      </div>
    </div>
  );
}
