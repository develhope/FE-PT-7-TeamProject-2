import React from "react";
import "./CasinoImage.css";

const CasinoImage = ({ img, alt }) => {
  return (
    <div className="wcc-casino-image">
      <img src={img} alt={alt} />
    </div>
  );
};

export default CasinoImage;
