import './PremiumExperiences.css'
import ExperienceCard from './ExperienceCard'
import ModalReservation from './ModalReservatio'
import { useState } from 'react'


const experiences = [
  {
    title: 'Desert Lamborghini Adventure',
    description: 'Drive exotic supercars through scenic desert routes with professional guidance',
    price: '$1499',
    images: ['/LotusPic/lambo2.jpeg','/LotusPic/lambo.png']
  },
  {
    title: 'Private Helicopter Sunset Tour',
    description: 'Experience the magic of Las Vegas from above as the city lights begin to sparkle',
    price: '$1299',
    images: ['/LotusPic/elicottero2.jpeg','/LotusPic/elicottero.png']
  },
  {
    title: "Exclusive Chef's Table",
    description: 'An intimate culinary journey with our best master chef in a private dining setting',
    price: '$899',
    images: ['/LotusPic/cena2.jpeg','/LotusPic/cena.png']
  },
  {
    title: 'VIP Nightlife Experience',
    description: 'Access to exclusive clubs and private lounges with personal concierge',
    price: '$799',
    images: ['/LotusPic/vip2.jpeg','/LotusPic/night.png']
  },
  {
    title: 'Luxury Spa Retreat',
    description: 'A full day of personalized treatments in our award-winning wellness sanctuary',
    price: '$599',
    images: ['/LotusPic/spa22.jpeg','/LotusPic/spa.png']
  },
  {
    title: 'Private Wine Tasting',
    description: 'Curated wine experience with rare vintages and artisanal pairings',
    price: '$449',
    images: ['/LotusPic/vino2.jpeg','/LotusPic/vino.png']
  }
]

function PremiumExperiences() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className="main-container-of-Premium-Experiences">
        <div className="header-section-of-P-E">
          <h1 className="header-title-of-P-E">Premium Experiences</h1>
          <div className="header-divider-of-P-E" />
          <p className="header-subtitle-of-P-E">
            Discover our collection of extraordinary moments,<br />
            crafted exclusively for the most discerning guests.
          </p>
          <div className="header-divider-of-P-E" />
        </div>

        <div className="experiences-container-of-P-E">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} onReserveClick={() => setShowModal(true)} />
          ))}
        </div>

        {showModal && <ModalReservation onClose={() => setShowModal(false)} />}
      </div>
    </>
  )
}

export default PremiumExperiences
