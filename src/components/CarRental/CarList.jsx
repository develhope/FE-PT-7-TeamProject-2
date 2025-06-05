import { useState } from 'react';
import { Link } from 'react-router-dom';
import Filter from './Filter';
import carData from '../../data/cars_data';
import './CarList.css';

const CarList = () => {
  const [brand, setBrand] = useState('All');
  const [type, setType] = useState('All');
  const [maxPrice, setMaxPrice] = useState(3700);

  const brands = ['All', ...new Set(carData.map(car => car.brand))];
  const types = ['All', ...new Set(carData.map(car => car.type))];

  const filteredCars = carData.filter(car => {
    return (
      (brand === 'All' || car.brand === brand) &&
      (type === 'All' || car.type === type) &&
      car.daily_rate <= maxPrice
    );
  });

  return (
    <div className="car-section">
      <Filter
        brand={brand}
        setBrand={setBrand}
        type={type}
        setType={setType}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        brands={brands}
        types={types}
      />

      <div className="car-grid">
        <h2>Available Luxury Cars</h2>
        <div className="car-cards">
          {filteredCars.map(car => (
            <div key={car.id} className="car-card">
              <img src={car.image} alt="car" className="car-image"/>
              <div className="car-info">
                <h3>{car.brand} {car.model}</h3>
                <span className="car-type">{car.type}</span>
                <div class="carlist-specs-container">
                  <div class="carlist-spec-item">
                    <i class="fas fa-users"></i>
                    <span>{car.seats}</span>
                  </div>
                  <div class="carlist-spec-item">
                    <i class="fas fa-tachometer-alt"></i>
                    <span>{car.acceleration_0_100}</span>
                  </div>
                  <div class="carlist-spec-item">
                    <i class="fas fa-bolt"></i>
                    <span>{car.horsepower} hp</span>
                  </div>
                </div>
                <div className="car-card-footer">
                  <span>from<strong> ${car.daily_rate}</strong> per day</span>
                    <Link to={`/luxury-car-rental/${car.id}`}>
                            <button className="button-link">View details</button>
                    </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarList;