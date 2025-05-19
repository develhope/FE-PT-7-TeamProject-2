import React, { useEffect, useState } from "react";
import "./NewsletterPopup.css";

function NewsletterPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("popupShown");

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        localStorage.setItem("popupShown", "true");
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, []);

  // Funzione per chiudere il popup
  const handleSkip = (e) => {
    e.preventDefault();
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="popup-overlay" aria-hidden="false">
          <div className="popup-box">
            <a className="skip-link" href="#" onClick={handleSkip}>
              Skip
            </a>
            <img
              src="/logo-removebg-preview.png"
              alt="Lotus Las Vegas Logo"
              className="logo"
            />
            <h1>Lotus Las Vegas</h1>
            <p>
              <strong>Subscribe to get the Latest News</strong>
            </p>
            <p>
              Don't miss out on our latest news, updates, tips and special
              offers
            </p>

            <form action="#" method="post">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
              <input type="submit" value="Subscribe" />
            </form>

            <div className="privacy-note">
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply.
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NewsletterPopup;
