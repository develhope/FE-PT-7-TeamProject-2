import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SpaBookingCard from "./SpaBookingComponents/SpaBookingCard";
import OrderSummary from "../../components/Order summary/OrderSummary";
import "./SpaBooking.css";

function SpaBooking() {
  const [orderItems, setOrderItems] = useState([]);

  const handleAddItem = (item) => {
    setOrderItems((prevItems) => [...prevItems, item]);
  };

  const handleRemoveItem = (index) => {
    setOrderItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <>
      <Navbar />
      <div className="spa-booking">
        <div className="spa-booking-head">
          <h1>Saphire Spa Booking</h1>
          <img
            className="logo-image"
            src="/logo-removebg-preview.png"
            alt="Lotus logo"
          />
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
        <div className="spa-guest-info">
          <h2>Guest Information</h2>
          <form className="spa-guest-form">
            <input type="text" placeholder="Name" required />
            <input type="text" placeholder="Surname" required />
            <input type="number" placeholder="Room Number" required />
            <button className="button-submit" type="submit">Confirm Booking</button>
          </form>
        </div>
      </div>

      <OrderSummary items={orderItems} onRemove={handleRemoveItem} />
      <Footer />
    </>
  );
}

export default SpaBooking;