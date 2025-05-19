import './SpaCard.css';

function SpaCard({ imgSrc, title, description }) {
  return (
    <div className="spa-card">
      <img src={imgSrc} alt={title} className="spa-card-image" />
      <h2 className="spa-card-title">{title}</h2>
      <p className="spa-card-description">{description}</p>
    </div>
  );
}

export default SpaCard;