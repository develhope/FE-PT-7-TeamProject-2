import { Link } from 'react-router-dom'
import './FooterNavLinks.css'

const FooterNavLinks = () => {
  return (
    <div className="footer-nav-links">
      <Link to="/faq-page">FAQ</Link>
      <Link to="/contact-us">Contact Us</Link>
      <Link to="/cancel-reservation">Cancel Reservation</Link>
    </div>
  )
}

export default FooterNavLinks
