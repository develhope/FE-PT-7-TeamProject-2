import "./Spa.css";
import { Link } from 'react-router-dom'
import SpaCard from "./SpaCards/SpaCard";

function Spa() {
  return (
    <>
      <div className="spa-section">
        <div className="spa-header">
          <h2 className="spa-title">Saphire Spa & Wellness</h2>
          <p className="spa-description">
            {` `}
            Immerse yourself in tranquility at our world-class spa,<br />
            featuring signature treatments and luxury amenities.
          </p>
        <div>
          <div className="spa-card-section">
            <SpaCard
              imgSrc="/public/Menù & carousel img/wellness.jpeg"
              title="Wellness Center"
              description="Yoga & Meditation"
            ></SpaCard>
            <SpaCard
              imgSrc="/public/Menù & carousel img/hydrotherapy.jpeg"
              title="Hydrotherapy"
              description="Therapeutic water treatments"
            ></SpaCard>
            <SpaCard
              imgSrc="/public/Menù & carousel img/massaggi.jpeg"
              title="Massage Therapy"
              description="60-90 minutes of pure bliss"
            ></SpaCard>
            <SpaCard
              imgSrc="/public/Menù & carousel img/trattamenti facciali.jpeg"
              title="Facial Treatments"
              description="Customized care for your skin"
            ></SpaCard>
          </div>
          <div className="spa-button">
            <Link to ="/spa-booking"><button className="button-submit">Book Your Treatment</button></Link>
          </div>
          </div>

        </div>
         <div className="spa-image">
            <img
              src="/public/Menù & carousel img/spa.jpg"
              alt="Spa"
              className="spa-image"
            />
          </div>
      </div>
    </>
  );
}

export default Spa;
