import React from "react";
import "./Casino.css";
import CasinoTitle from "./CasinoTitle";
import CasinoContainer from "./CasinoContainer";
import CasinoButton from "./CasinoButton";

const Casino = () => {
  return (
    <section className="wcc-casino-section">
      <CasinoTitle />
      <CasinoContainer />
      <CasinoButton />
    </section>
  );
};

export default Casino;
