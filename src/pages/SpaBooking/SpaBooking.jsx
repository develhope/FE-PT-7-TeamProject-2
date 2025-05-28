import React, { useState } from 'react'
import SpaBookingCard from './SpaBookingComponents/SpaBookingCard'
import OrderSummary from '../Order summary/OrderSummary'
import GuestInfo from '../GuestInfo/GuestInfo'
import './SpaBooking.css'

function SpaBooking() {
  const [orderItems, setOrderItems] = useState([]);

  const handleAddItem = (item) => {
    setOrderItems((prevItems) => [...prevItems, item]);
  };

  const handleRemoveItem = (index) => {
    setOrderItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const handleGuestSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="spa-booking">
        <div className="spa-booking-head">
          <h1>Saphire Spa Booking</h1>
        </div>
        <div className="spa-booking-cards">
          <div className="spa-card-content">
            <SpaBookingCard
              imgSrc="/public/Menù & carousel img/massaggi.jpeg"
              title="Massage Therapy"
              description="Relax and rejuvenate with our signature massage therapy sessions."
              price={50}
              onAdd={handleAddItem}
            />
          </div>
          <div className="spa-card-content">
            <SpaBookingCard
              imgSrc="/public/Menù & carousel img/trattamenti facciali.jpeg"
              title="Facial Treatments"
              description="Customized facial treatments to enhance your natural glow."
              price={70}
              onAdd={handleAddItem}
            />
          </div>
          <div className="spa-card-content">
            <SpaBookingCard
              imgSrc="/public/Menù & carousel img/hydrotherapy.jpeg"
              title="Hydrotherapy"
              description="Experience the therapeutic benefits of our hydrotherapy pools."
              price={40}
              onAdd={handleAddItem}
            />
          </div>
          <div className="spa-card-content">
            <SpaBookingCard
              imgSrc="/public/Menù & carousel img/wellness.jpeg"
              title="Wellness Center"
              description="Join our yoga and meditation sessions for ultimate relaxation."
              price={30}
              onAdd={handleAddItem}
            />
          </div>
        </div>
        <GuestInfo onSubmit={handleGuestSubmit} />
      </div>

      <OrderSummary items={orderItems} onRemove={handleRemoveItem} />
    </>
  );
}

export default SpaBooking