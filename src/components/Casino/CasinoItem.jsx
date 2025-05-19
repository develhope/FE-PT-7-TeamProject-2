import React from "react";
import "./CasinoItem.css";
import CasinoImage from "./CasinoImage";
import CasinoOverlay from "./CasinoOverlay";

const CasinoItem = ({ img, alt, title, overlayText, delay }) => {
  return (
    <div className="wcc-casino-item" style={{ animationDelay: `${delay}s` }}>
      <CasinoImage img={img} alt={alt} />
      <CasinoOverlay text={overlayText} />
      <h2 className="wcc-h2">{title}</h2>
    </div>
  );
};

export default CasinoItem;
