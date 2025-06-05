import './LuxuryServices.css';

export default function LuxuryServices() {
  return (
    <section className="car-luxury-services">
        <div className="car-services-grid">
          <div className="car-service-card">
            <i className="fas fa-car-side icon"></i>
            <h3>Luxury Fleet</h3>
            <p>Choose from our selection of premium cars including supercars, luxury SUVs, and executive sedans.</p>
          </div>
          <div className="car-service-card">
            <i className="fas fa-shield-alt icon"></i>
            <h3>Full Insurance</h3>
            <p>Comprehensive coverage for a worry-free experience wherever you drive.</p>
          </div>
          <div className="car-service-card">
            <i className="fas fa-clock icon"></i>
            <h3>24/7 Availability</h3>
            <p>Round-the-clock support and car delivery, anytime and anywhere.</p>
          </div>
          <div className="car-service-card">
            <i className="fas fa-map-marker-alt icon"></i>
            <h3>Personalized Delivery</h3>
            <p>We deliver and collect the vehicle at our Resort, airport, or any location of your choice.</p>
          </div>
      </div>
    </section>
  );
}
