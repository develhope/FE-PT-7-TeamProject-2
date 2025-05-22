import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Carousel from '../../components/CarRental/Carousel';
import CarList from '../../components/CarRental/CarList';
import './CarRental.css';

function App() {
  return (
    <div>
      <Carousel />
      <CarList />
    </div>
  );
}

export default App;
