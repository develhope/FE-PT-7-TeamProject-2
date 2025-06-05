import React from 'react';
import CardsSection from './CardsSection';
import ActivitiesSection from './ActivitiesSection';
import InfoSection from './InfoSection';
import './ChildrenArea.css';

const ChildrenArea = () => {
  return (
    <div className="children-area-body">
      <section className="children-area">
        <h1 className="children-area-title">Children’s Area</h1>
        <p className="children-area-subtitle">
          A world of wonder and play, designed just for our youngest guests
        </p>
        <CardsSection />
        <ActivitiesSection />
        <InfoSection />
      </section>
    </div>
  );
};

export default ChildrenArea;