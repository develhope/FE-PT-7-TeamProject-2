import { motion } from 'framer-motion';
import './BrandCarousel.css';

const carBrands = [
  {
    name: 'Audi',
    logo: '/CarPics/Brand/audi-logo.png',
  },
  {
    name: 'Bentley',
    logo: '/CarPics/Brand/bentley-logo.png',
  },
  {
    name: 'BMW',
    logo: '/CarPics/Brand/bmw-logo-2020-gray.png',
  },
  {
    name: 'Ferrari',
    logo: '/CarPics/Brand/ferrari-logo.png',
  },
  {
    name: 'Ford',
    logo: '/CarPics/Brand/ford-mustang-logo.png',
  },
  {
    name: 'Jaguar',
    logo: '/CarPics/Brand/jaguar-logo.png',
  },
  {
    name: 'Lamborghini',
    logo: '/CarPics/Brand/lamborghini-logo.png',
  },
  {
    name: 'Maserati',
    logo: '/CarPics/Brand/maserati-logo.png',
  },
  {
    name: 'Mercedes',
    logo: '/CarPics/Brand/mercedes-benz-logo.png',
  },
  {
    name: 'Porsche',
    logo: '/CarPics/Brand/porsche-logo.png',
  }
];

export default function CarBrandLogosCarousel() {
  return (
    <div className="brand-carousel-container">
      <motion.div
        className="brand-carousel-track"
        animate={{ x: ['0%', '-100%'] }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: 'linear',
        }}
      >
        {[...carBrands, ...carBrands].map((brand, idx) => (
          <div key={idx} className="brand-carousel-item">
            <img src={brand.logo} alt={brand.name} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
