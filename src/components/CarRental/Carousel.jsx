import React, { useEffect, useState, useRef } from 'react';
import './Carousel.css';

const images = [
  './LotusPic/AudiR8.png',
  './LotusPic/BMWM8.png',
  './LotusPic/LamborghiniAventador.png',
  './LotusPic/FerrariF8.png',
  './LotusPic/FerrariPurosangue.png',
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 5000;

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
    <div className="carousel-wrapper">
      <h1 className="carousel-title">Drive your dream. Today.</h1>
      <p className="carousel-subtitle">Experience luxury, redefined.</p>

      <div className="carousel-container">
        <div
          className="carousel-slider"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Slide ${idx}`}
              className="carousel-image"
            />
          ))}
        </div>

        <button className="carousel-button left" onClick={prevSlide}>
          &#x2039;
        </button>
        <button className="carousel-button right" onClick={nextSlide}>
          &#x203A;
        </button>
      </div>

      <div className="carousel-dots">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`carousel-dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
}
