import React, { useState } from "react"
import "./ThingsToDoCard.css"

const CardThingsToDo = ({
    id,
    title,
    description,
    details,
    price,
    images,
    reverse,
}) => {
    const [activeImageIndex, setActiveImageIndex] = useState(0)

   

    return (
        <div className={`cardThingsToDo card-${id} ${reverse ? "reverse" : ""}`}>
            <div className="ttdc-image-container">
                <img
                    src={images[activeImageIndex]}
                    alt={title}
                    className="card-img"
                />
            
                <div className="ttdc-dots">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`ttdc-dot ${index === activeImageIndex ? "ttdc-active" : ""}`}
                            onClick={() => setActiveImageIndex(index)}
                        ></span>
                    ))}
                </div>
            </div>
            <div className="ttdc-content">
                <h2>{title}</h2>
                <p>{description}</p>
                <ul>
                    {details.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
                <div
                    className={`price-book ${["grand-canyon", "atv", "mojave"].includes(id)
                            ? "change-color"
                            : ""
                        }`}
                >
                    <p className="ttdc-price">{price}</p>
                    <button className="ttdc-button-submit">Book</button>
                </div>
            </div>
        </div>
    )
}

export default CardThingsToDo