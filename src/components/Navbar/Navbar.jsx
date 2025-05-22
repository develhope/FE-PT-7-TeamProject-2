import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-logo-and-title">
          <Link to="/">
            <h1> Lotus Las Vegas</h1>
          </Link>
          <img
            className="navbar-logo-image"
            src="/logo-removebg-preview.png"
            alt="lotus-logo"
          />
        </div>
        <div className="navbar-links">
          <a href="FE-PT-7-TeamProject-2/src/components/Rooms/Rooms.jsx">
            Rooms
          </a>
          <Link to="/spa-booking">Spa</Link>
          <Link to="/casino-details-main">Casino</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/lotus-reservation">
            <button className="button-submit">Book Now</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
