// Inserisci in: src/components/LotusCasinoDetails/EventCard.jsx
import React from "react";
import "./EventCard.css";

const EventCard = ({ title, description, titleClass, descClass }) => (
  <div className="casino-details-event-card">
    <h3 className={titleClass}>{title}</h3>
    <p className={descClass}>{description}</p>
  </div>
);

export default EventCard;