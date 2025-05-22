import React, { useState } from 'react';
import './CarList.css';

const carData = [
  {
    id: 1,
    brand: 'Audi',
    name: 'Audi R8',
    type: 'Sports',
    engine: '5.2 V10',
    hp: 620,
    price: 790,
    image: './LotusPic/AudiR8.png'
  },
  {
    id: 2,
    brand: 'BMW',
    name: 'BMW M8 Cabrio',
    type: 'Sports',
    engine: '4.4 V8 TwinPower',
    hp: 625,
    price: 600,
    image: './LotusPic/BMWM8.png'
  },
  {
    id: 3,
    brand: 'Mercedes-Benz',
    name: 'Mercedes-Benz S Class W223',
    type: 'Sedan',
    engine: '3.0 I6 Turbo',
    hp: 435,
    price: 650,
    image: './LotusPic/MercedesS.png'
  },
  {
    id: 4,
    brand: 'Maserati',
    name: 'Maserati MC20',
    type: 'Sports',
    engine: '3.0 V6 Nettuno',
    hp: 630,
    price: 800,
    image: './LotusPic/MaseratiMC20.png'
  },
  {
    id: 5,
    brand: 'Ferrari',
    name: 'Ferrari Purosangue',
    type: 'SUV',
    engine: '6.5 V12',
    hp: 725,
    price: 3700,
    image: './LotusPic/FerrariPurosangue.png'
  }
];

const CarList = () => {
  const [brand, setBrand] = useState('All');
  const [type, setType] = useState('All');
  const [maxPrice, setMaxPrice] = useState(3700);

  const filteredCars = carData.filter(car => {
    return (
      (brand === 'All' || car.brand === brand) &&
      (type === 'All' || car.type === type) &&
      car.price <= maxPrice
    );
  });

  const brands = ['All', ...new Set(carData.map(car => car.brand))];
  const types = ['All', ...new Set(carData.map(car => car.type))];

  return (
    <div className="car-section">
      <aside className="filter-panel">
        <h3><i className="fa-solid fa-filter"></i> Filter Cars</h3>

        <label>
          Brand
          <select value={brand} onChange={e => setBrand(e.target.value)}>
            {brands.map((b, i) => <option key={i} value={b}>{b}</option>)}
          </select>
        </label>

        <label>
          Type
          <select value={type} onChange={e => setType(e.target.value)}>
            {types.map((t, i) => <option key={i} value={t}>{t}</option>)}
          </select>
        </label>

        <label>
          <p>Max Price: ${maxPrice}/day</p>
          <input
            type="range"
            min="100"
            max="3700"
            step="100"
            value={maxPrice}
            onChange={e => setMaxPrice(Number(e.target.value))}
          />
        </label>
      </aside>

      <div className="car-grid">
        <h2>Available Luxury Cars</h2>
        <div className="cards">
          {filteredCars.map(car => (
            <div key={car.id} className="car-card">
              <img src={car.image} alt={car.name} />
              <div className="car-info">
                <h3>{car.name}</h3>
                <span className="car-type">{car.type}</span>
                <p><i className="fa-solid fa-bolt"></i> Engine: {car.engine}</p>
                <p><i className="fa-solid fa-gauge-high"></i> HP: {car.hp}</p>
                <div className="card-footer">
                  <strong>${car.price}</strong>/day
                  <button className="button-submit">Select Car</button>
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
