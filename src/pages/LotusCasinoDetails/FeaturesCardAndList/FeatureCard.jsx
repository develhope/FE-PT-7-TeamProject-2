import React from "react";
import "./FeatureCard.css";

const FeatureCard = ({ imgSrc, imgAlt, title, description, titleClass, descClass }) => (
  <div className="casino-details-feature">
    <div className="casino-details-image-container">
      <img src={imgSrc} alt={imgAlt} />
    </div>
    <h3 className={titleClass}>{title}</h3>
    <p className={descClass}>{description}</p>
  </div>
);

export default FeatureCard;