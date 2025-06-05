import { useParams } from "react-router-dom";
import carsData from '../../data/cars_data';
import Arrow from '../../components/CarRental/Arrow';
import './CarDetails.css';

const CarDetails = () => {
  const { id } = useParams();
  const car = carsData.find(c => c.id.toString() === id);

  if (!car) return <h2>Car not found</h2>;

  return (
    <>
    <Arrow />
    <div className="auto-body">
      <div className="scheda-container-auto">
        <h1 className="titolo-auto">{car.brand} {car.model}</h1>

        <div className="immagine-container-auto">
          <img src={car.image} alt={car.model} className="immagine-auto-centrata" />
        </div>

        <div className="dettagli-auto">
          <div className="prezzo-auto-centrato">
            Daily Price: from<strong> ${car.daily_rate}</strong>
          </div>

          <table className="car-specs">
            <tbody>
              <tr><th>Brand</th><td>{car.brand}</td></tr>
              <tr><th>Model</th><td>{car.model}</td></tr>
              <tr><th>Year</th><td>{car.year}</td></tr>
              <tr><th>Type</th><td>{car.type}</td></tr>
              <tr><th>Engine</th><td>{car.engine}</td></tr>
              <tr><th>Horsepower</th><td>{car.horsepower} hp</td></tr>
              <tr><th>Torque</th><td>{car.torque}</td></tr>
              <tr><th>0–100 km/h</th><td>{car.acceleration_0_100}</td></tr>
              <tr><th>Top Speed</th><td>{car.top_speed}</td></tr>
              <tr><th>Transmission</th><td>{car.transmission}</td></tr>
              <tr><th>Color</th><td>{car.color}</td></tr>
              <tr><th>Interior</th><td>{car.interior}</td></tr>
              <tr><th>Seats</th><td>{car.seats}</td></tr>
              <tr><th>Infotainment</th><td>{car.infotainment_system?.join(', ')}</td></tr>
              <tr><th>Sound System</th><td>{car.sound_system}</td></tr>
              <tr><th>Navigation</th><td>{car.navigation ? "Yes" : "No"}</td></tr>
              <tr><th>Driver Assistance</th><td>{car.driver_assistance?.join(', ')}</td></tr>
              <tr><th>Deposit Required</th><td>€{car.deposit_required}</td></tr>
              <tr><th>Chauffeur Service</th><td>{car.chauffeur_service ? "Available" : "Not Available"}</td></tr>
              <tr><th>Delivery Service</th><td>{car.delivery_service ? "Available" : "Not Available"}</td></tr>
              <tr><th>Special Features</th><td>{car.special_features || "N/A"}</td></tr>
            </tbody>
          </table>
        </div>
        
      </div>
    </div>
    </>
  );
};

export default CarDetails;
