import React, { useState } from "react";
import "./LotusReservation.css";

const roomOptions = [
  { label: "Comfort Room - $199/night", value: "comfort", price: 199 },
  { label: "Deluxe Suite - $299/night", value: "deluxe", price: 299 },
  { label: "Executive Suite - $499/night", value: "executive", price: 499 },
  { label: "Family comfort Room - $549/night", value: "family-comfort", price: 549 },
  { label: "Family Suite - $799/night", value: "family-suite", price: 799 },
  { label: "Presidential Suite - $999/night", value: "presidential", price: 999 },
];

function LotusReservation() {
  const [guests, setGuests] = useState(1);
  const [room, setRoom] = useState(roomOptions[0].value);
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");

  function getNights() {
    if (!checkin || !checkout) return 0;
    const inDate = new Date(checkin);
    const outDate = new Date(checkout);
    const diff = (outDate - inDate) / (1000 * 60 * 60 * 24);
    return diff > 0 ? diff : 0;
  }
  const selectedRoom = roomOptions.find(r => r.value === room);
  const nights = getNights();
  const total = selectedRoom ? selectedRoom.price * nights : 0;

  return (
    <>
      <div className="reservation">
        <h1 className="reserv-header">Reserve Your Stay</h1>
        <form className="reserv-form">
          <div className="reserv-row">
            <div className="reserv-col">
              <label>First Name</label>
              <input type="text" name="firstName" required />
            </div>
            <div className="reserv-col">
              <label>Last Name</label>
              <input type="text" name="lastName" required />
            </div>
          </div>
          <div className="reserv-row">
            <div className="reserv-col">
              <label>Email Address</label>
              <input type="email" name="email" required />
            </div>
            <div className="reserv-col">
              <label>Number of Guests</label>
              <input
                type="number"
                name="guests"
                min="1"
                max="4"
                required
                value={guests}
                onChange={e => setGuests(Number(e.target.value))}
              />
            </div>
          </div>
          <div className="reserv-row">
            <div className="reserv-col">
              <label>Check-in Date</label>
              <input
                type="date"
                name="checkin"
                required
                value={checkin}
                onChange={e => setCheckin(e.target.value)}
              />
            </div>
            <div className="reserv-col">
              <label>Check-out Date</label>
              <input
                type="date"
                name="checkout"
                required
                value={checkout}
                onChange={e => setCheckout(e.target.value)}
              />
            </div>
          </div>
          <div className="reserv-row">
            <div className="reserv-col-full">
              <label>Room Type</label>
              <select
                className="room-type"
                value={room}
                onChange={e => setRoom(e.target.value)}
              >
                {roomOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="reserv-row">
            <div className="reserv-col-full">
              <label>Special Requests</label>
              <textarea name="specialRequests" rows="4"></textarea>
            </div>
          </div>
          <button type="submit" className="button-submit">
            Complete Reservation
          </button>
          {nights > 0 && (
            <div className="total-price">
              Total price for {nights} night{nights > 1 ? "s" : ""} ({guests} guest{guests > 1 ? "s" : ""}):{" "}
              <span>
                ${total}
              </span>
            </div>
          )}
        </form>
      </div>
    </>
  );
}
export default LotusReservation;
