import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SpaBookingCard from "./SpaBookingComponents/SpaBookingCard";
import "./SpaBooking.css";

function SpaBooking() {
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
          />
          </div >
          <div className="spa-card-content">
          <SpaBookingCard
            imgSrc="/public/Menù & carousel img/trattamenti facciali.jpeg"
            title="Facial Treatments"
            description="Customized facial treatments to enhance your natural glow."
            price={70}
          />
          </div>
          <div className="spa-card-content">
          <SpaBookingCard
            imgSrc="/public/Menù & carousel img/hydrotherapy.jpeg"
            title="Hydrotherapy"
            description="Experience the therapeutic benefits of our hydrotherapy pools."
            price={40}
          />
          </div>
          <div className="spa-card-content">
          <SpaBookingCard
            imgSrc="/public/Menù & carousel img/wellness.jpeg"
            title="Wellness Center"
            description="Join our yoga and meditation sessions for ultimate relaxation."
            price={30}
          />
          </div>
        </div>
      </div>
      <div className="spa-guest-info">

      </div>
      <Footer />
    </>
  );
}

export default SpaBooking;