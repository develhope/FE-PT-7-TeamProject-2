import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          <a href="#rooms" onClick={(e) => { e.preventDefault(); handleScrollToSection("rooms"); }}>Rooms</a>
          <Link to="/spa-booking">Spa</Link>
          <Link to="/casino-details-main">Casino</Link>
          <a href="#about" onClick = {(e) => { e.preventDefault(); handleScrollToSection("about"); }}>About Us</a>
          <Link to="/lotus-reservation">
            <button className="button-submit">Book Now</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
