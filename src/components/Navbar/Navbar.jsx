import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-logo-and-title">
          <h1> Lotus Las Vegas</h1>
          <img
            className="logo-image"
            src="/logo-removebg-preview.png"
            alt="lotus-logo"
          />
        </div>
        <div className="navbar-links">
          <a href="FE-PT-7-TeamProject-2/src/components/Rooms/Rooms.jsx">
            Rooms
          </a>

          <Link to="/spa-booking">Spa</Link>

          <a href="FE-PT-7-TeamProject-2\src\components\Casino\Casino.jsx">
            Casino
          </a>

          <a href="FE-PT-7-TeamProject-2\src\components\AboutUs\AboutUs.jsx">
            About Us
          </a>
          <a href="FE-PT-7-TeamProject-2\src\components\Booking\Booking.jsx">
            <button className="button-submit">Book Now</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
