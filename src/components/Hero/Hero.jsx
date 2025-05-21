import './Hero.css'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <div className="lotus-hero-main-section">
            <div className="lotus-hero-overlay"></div>
            <div className="lotus-hero-content">
                <h1 className="lotus-hero-title">Experience Luxury<br />in Las Vegas</h1>
                <p className="lotus-hero-subtitle">Where Elegance Meets Entertainment</p>
                <Link to='/lotus-reservation'><a href="#" className="button-link">Reserve Your Stay</a></Link>
            </div>
        </div>
    )
}

export default Hero
