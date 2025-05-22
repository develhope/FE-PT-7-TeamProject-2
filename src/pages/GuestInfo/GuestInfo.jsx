import React from 'react';
import './GuestInfo.css';

function GuestInfo({ onSubmit, title = "Guest Information", buttonLabel = "Confirm Booking" }) {
  return (
    <div className="spa-guest-info">
      <h2>{title}</h2>
      <form className="spa-guest-form" onSubmit={onSubmit}>
        <input type="text" placeholder="Name" required />
        <input type="text" placeholder="Surname" required />
        <input type="number" placeholder="Room Number" required />
        <button className="button-submit" type="submit">{buttonLabel}</button>
      </form>
    </div>
  );
}

export default GuestInfo;
