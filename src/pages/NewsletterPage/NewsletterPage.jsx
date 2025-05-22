import React from "react";
import "./newsletterPage.css";

function NewsletterPage() {
  return (
    <main>
      <section className="signup-section">
        <div className="container">
          <h1>Subscribe to our newsletter</h1>
          <p className="subtitle">
            Don’t miss out on our latest news, updates, tips and special offers
          </p>

          <form>
            <input type="email" placeholder="Email" id="email" className="ns-em" required />

            <small className="privacy-note">
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply.
            </small>

            <h2 className="consent-heading">Privacy and Marketing Consent</h2>

            <p className="privacy-text">
              I have read the Privacy Policy and confirm I want to receive
              marketing communications from Lotus Las Vegas, as described in the
              notice. If you select “I do not consent”, you will no longer be
              kept up-to-date about our latest news, launches of new vehicle
              models, and event invitations.
            </p>

            <div className="options">
              <label>
                <input type="radio" name="privacy" value="agree" required />I
                agree
              </label>
              <label>
                <input type="radio" name="privacy" value="disagree" />I disagree
              </label>
            </div>

            <p className="marketing-text">
              Marketing purposes: I consent to the processing of my personal
              data in order to receive promotional communications, newsletters,
              information about events, discounts, exclusive invitations,
              greeting messages, and other commercial initiatives related to
              Ferrari products and services, through automated means (such as
              email, SMS, and social media) and non-automated means (such as
              phone calls to landlines or mobile phones).
            </p>

            <div className="options">
              <label>
                <input type="radio" name="marketing" value="agree" required />I
                agree
              </label>
              <label>
                <input type="radio" name="marketing" value="disagree" />I
                disagree
              </label>
            </div>

            <div className="image-container">
              <img src="/LotusPic/ReCaptcha.jpeg" alt="ReCaptcha" />
            </div>

            <button id="subscribeBtn" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default NewsletterPage;
