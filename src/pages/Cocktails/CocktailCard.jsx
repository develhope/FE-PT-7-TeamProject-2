import './Cocktail.css';

const CocktailCard = ({ name, description, price, image}) => {
  return (
    <div className="cocktail-card"> 
      <div className="cocktail-image">
        <img src={image} alt={name}></img> 
      </div>
      <div className="cocktail-details">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="cocktail-price">
        <span>${price}</span>
      </div>
    </div>
  );
};

export default CocktailCard;