import { useState } from 'react'
import CocktailCard from './cocktailCard'
import './Cocktail.css'

const CocktailList = () => {
  const [showPopup, setShowPopup] = useState(false)

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setShowPopup(true)
    setTimeout(() => setShowPopup(false), 3000)
    e.target.reset()
  }

  const cocktailsData = [
    { id: 1, name: 'Golden Lotus Martini', description: 'Grey Goose Vodka, Lychee Liqueur, Gold Leaf', price: 24, image: './LotusPic/Golden-Lotus.jpg' },
    { id: 2, name: 'Midnight Blossom', description: 'Don Julio 1942, Blood Orange, Champagne Float', price: 23, image: './LotusPic/Midnight.jpg' },
    { id: 3, name: 'Imperial Dragon', description: 'Hennessy XO, Plum Wine, Five Spice Bitters', price: 26, image: './LotusPic/Imperial-Dragon.jpg' },
    { id: 4, name: 'Pearl of the Orient', description: 'Japanese Whisky, Pearl Sake, Honey-Ginger', price: 25, image: './LotusPic/Pearl-of-the-Orient.jpg' },
    { id: 5, name: 'Jade Garden', description: 'Botanist Gin, Fresh Cucumber, Yuzu Tonic', price: 22, image: './LotusPic/Jade-Garden.jpg' },
    { id: 6, name: 'Silk Road', description: 'Premium Vodka, Lychee, Elderflower, Rose', price: 24, image: './LotusPic/SilkRoad.jpg' },
    { id: 7, name: 'Lotus Sunset', description: 'Clase Azul Reposado, Blood Orange, Passion Fruit, Vanilla Mist', price: 28, image: './LotusPic/Lotus-Sunset.jpg' },
    { id: 8, name: 'Emperor\'s Crown', description: 'Louis XIII Cognac, Krug Champagne, Saffron, 24K Gold', price: 32, image: './LotusPic/louis-cocktail.jpg' }
  ]

  return (
    <section className="cocktail-section">
      <h2 className="cocktail-section-title">Specialty Cocktails</h2>
      <div className="cocktail-grid">
        {cocktailsData.map(cocktail => (
          <CocktailCard
            key={cocktail.id}
            name={cocktail.name}
            description={cocktail.description}
            price={cocktail.price}
            image={cocktail.image}
          />
        ))}
      </div>
      <p className="cocktail-note">
        All cocktails are crafted with premium spirits and fresh ingredients. Please allow our mixologists
        adequate time to perfect their creation.
      </p>

      <div className="guest-form-container">
        <h3 className="guest-form-title">Guest Information</h3>
        <form className="guest-form" onSubmit={handleFormSubmit}>
          <label>
            NAME
            <input type="text" name="name" required />
          </label>
          <label>
            SURNAME
            <input type="text" name="surname" required />
          </label>
           <label>
            COCKTAIL
            <input type="text" name="cocktail" required />
          </label>
          <label>
            ROOM NUMBER
            <input type="text" name="room" required />
          </label>
          <button type="submit">PLACE ORDER</button>
          <p className="guest-note">567-432 for personal butler service</p>
        </form>
      </div>

      {showPopup && (
        <div className="thank-you-popup">
          <p>Thank you! Your order has been placed.</p>
        </div>
      )}
    </section>
  )
}

export default CocktailList