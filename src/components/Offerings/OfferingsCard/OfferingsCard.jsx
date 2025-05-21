import { Link } from 'react-router-dom'
import './OfferingsCard.css'

function OfferingsCard ({imgSrc, title, description, link}) {
    return(
        <Link to={link} className='offerings-link'>
            <div className='offerings-card'>
                <img className='offerings-image' src={imgSrc} alt={title} />
                <div className='offerings-card-content'>
                    <h2 className='offerings-title'>{title}</h2>
                    <p className='offerings-description'>{description}</p>
                </div>
            </div>
        </Link>
    )
}

export default OfferingsCard