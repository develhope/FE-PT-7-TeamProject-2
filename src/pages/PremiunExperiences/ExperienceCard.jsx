import './ExperienceCard.css'

function ExperienceCard({ title, description, price, image, onReserveClick }) {
    return (
        <div className="experience-card-of-P-E">
            <img className="experience-image-of-P-E" src={image} alt={title} />
            <div className="experience-info-of-P-E">
                <h2 className="experience-title-of-P-E">{title}</h2>
                <p className="experience-description-of-P-E">{description}</p>
                <p className="price-title-of-P-E">Experience Price</p>
                <div className="price-container-of-P-E">
                    <span className="price-middle-line"></span>
                    <span className="the-price-of-the-experience">{price}</span>
                    <span className="price-middle-line"></span>
                </div>
                <button className="button-submit" onClick={onReserveClick}>
                    Reserve Experience
                </button>
            </div>
        </div>
    )
}

export default ExperienceCard