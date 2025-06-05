import React from "react";
import {Link} from 'react-router-dom'


const CasinoButton = () => {
  return (
    <div className="wcc-central-button-wrapper">
      <Link to="/casino-details-main" className="button-link">Find out more</Link>
    </div>
  );
};

export default CasinoButton;
