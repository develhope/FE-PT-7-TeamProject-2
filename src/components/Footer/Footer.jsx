import FooterSocial from './FooterSocial/FooterSocial'
import './Footer.css'
import { Link } from 'react-router-dom'


function Footer() {

    return (
        <>
            <div className="footer-lotus-las-vegas">

                <div className="logo-and-title-of-footer">

                    <img src="/logo-removebg-preview.png" alt="Logo of footer" className="logo-of-footer" />

                    <h2 className="title-of-footer">Lotus Las Vegas</h2>

                </div>

                <div className="numbers-of-footer-area">
                    <p>
                        Reservations:
                        <a className="numbers" href="#"> 555.768.234</a>
                    </p>
                    <p>
                        Concierge:
                        <a className="numbers" href="#"> 555.223.556</a>
                    </p>
                </div>


                <FooterSocial />

                <div className="footer-lotus-las-vegas-links">
                    <Link to="/faq-page">FAQ</Link>
                    <Link to="/contact-us">Contact Us</Link>
                    <Link to="/newsletter">Newsletter</Link>
                    <Link to='/cancel-reservation'>Cancel Reservation</Link>
                </div>

                <div className="footer-divider"></div>

                <div className="privacy-legal-of-footer-lotus-las-vegas">
                    <a href="#">Copyright © 2025 Las Vegas Resort. All rights reserved.</a>
                    <span>|</span>
                    <Link to='/cookie-policy'>Privacy Policy & Cookie Policy</Link>
                </div>

            </div>
        </>


    )
}

export default Footer