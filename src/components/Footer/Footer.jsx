import FooterSocial from './FooterSocial/FooterSocial'
// import css quando lo farò... :( #AIUTO VOGLIO CREPARE :((((



const Footer = () => {
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


                <FooterSocial></FooterSocial>

                <div className="footer-lotus-las-vegas-links">
                    <a href="#">FAQ</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Newsletter</a>
                    <a href="#">Cancel Reservation</a>
                </div>

                <div className="footer-divider"></div>

                <div className="privacy-legal-of-footer-lotus-las-vegas">
                    <a href="#">Copyright © 2025 Las Vegas Resort. All rights reserved.</a>
                    <span>|</span>
                    <a href="#">Privacy Policy</a>
                    <span>|</span>
                    <a href="#">Cookie Policy</a>
                </div>

            </div>
        </>
    )
}

export default Footer