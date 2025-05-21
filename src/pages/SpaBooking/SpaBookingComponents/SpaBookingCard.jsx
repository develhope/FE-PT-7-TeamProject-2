import React, { useState } from 'react'
import './SpaBookingCard.css'

function SpaBookingCard({ imgSrc, title, description, price, onAdd }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="spa-booking-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="spa-booking-card-title">{title}</h2>
      <p className="spa-booking-card-description">{description}</p>
      <div className="spa-booking-card-images">
        <img
          src={imgSrc}
          alt={title}
          className={`spa-booking-card-image ${isHovered ? "hovered" : ""}`}
        />
        <div className={`spa-form ${isHovered ? "visible" : ""}`}>
          <form className="spa-booking-form">
            <div>
              <label htmlFor="date">Date<br/></label>
              <input type="date" id="form-date" required/>
            </div>
            
            <div>
              <label htmlFor="time">Time <br/></label>
              <select id="booking-appointment">
                <option value="10:00">10:00 - 11:00</option>
                <option value="11:00">11:00 - 12:00</option>
                <option value="12:00">12:00 - 13:00</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="person-number">How Many People<br/></label>
              <input type="number" id="person-number" min={1} max={4} defaultValue={1} required />
            </div>
            
            <div>
              <p className="spa-price">Price: ${price}</p>
            </div>
          </form>
          <button
            type="button"
            className="button-submit"
            onClick={() => onAdd({ title, price, imgSrc })}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default SpaBookingCard