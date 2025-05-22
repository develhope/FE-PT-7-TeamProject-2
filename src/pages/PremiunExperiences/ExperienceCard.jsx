import { useEffect, useState } from 'react'
import './ExperienceCard.css'

function ExperienceCard({ title, description, price, images, onReserveClick }) {
    const [indiceCorrente, setIndiceCorrente] = useState(0)


    useEffect(() => {
        if (images.length <= 1) return

        const intervallo = setInterval(() => {
            setIndiceCorrente(prev =>
                prev < images.length - 1 ? prev + 1 : 0
            )
        }, 8000)

        return () => clearInterval(intervallo)
    }, [images.length])

    return (
        <div className="experience-card-of-P-E">
            <div className="experience-image-wrapper">
                {images.length > 1 && (
                    <div className="pallini-wrapper">
                        {images.map((_, index) => (
                            <span
                                key={index}
                                className={`pallino ${index === indiceCorrente ? 'attivo' : ''}`}
                                onClick={() => setIndiceCorrente(index)}
                            />
                        ))}
                    </div>
                )}

                <img
                    className="experience-image-of-P-E"
                    src={images[indiceCorrente]}
                    alt={title}
                />
            </div>

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
