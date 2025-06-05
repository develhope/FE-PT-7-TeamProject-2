import CarHero from '../../components/CarRental/CarHero'
import CarList from '../../components/CarRental/CarList';
import Arrow from '../../components/CarRental/Arrow';
import BrandCarousel from '../../components/CarRental/BrandCarousel'
import '../../index.css';

function CarRental() {
  return (
      <>
        <CarHero />
        <BrandCarousel />
        <CarList />
        <Arrow />
      </>
  );
}

export default CarRental;
