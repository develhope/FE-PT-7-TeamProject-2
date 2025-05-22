import { useState } from "react";
import "./Rooms.css";

function RoomsCard({ images, name, description, price }) {
  const [index, setIndex] = useState(0);

  const nextImage = (e) => {
    e.stopPropagation();
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (i, e) => {
    e.stopPropagation();
    setIndex(i);
  };

  return (
    <div className="card">
      <div className="image-container-room">
        <img className="image-room" src={images[index]} alt={name} />
        {images.length > 1 && (
          <>
            <button className="arrow-btn left" onClick={prevImage}>
              &#10094;
            </button>
            <button className="arrow-btn right" onClick={nextImage}>
              &#10095;
            </button>
          </>
        )}
        <div className="dots">
          {images.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={(e) => goToImage(i, e)}
            ></span>
          ))}
        </div>
      </div>

      <div className="card-details">
        <h3 className="name">{name}</h3>
        <p className="description">{description}</p>
        <div className="price-button">
          <p className="price">{price}</p>
          <a className="button-link">Book Now</a>
        </div>
      </div>
    </div>
  );
}

export default RoomsCard;