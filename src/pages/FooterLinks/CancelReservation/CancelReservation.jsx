import { useState } from 'react'
import './../ContactUs/ContactUs.css'
import FooterNavLinks from '../FooterLinks'
import Footer from '../../../components/Footer/Footer'
import Navbar from './../../../components/Navbar/Navbar'

function CancelReservation() {
    const [formData, setFormData] = useState({
        reservationNumber: '',
        email: ''
    })

    const handleChange = (e) => {
        const { id, value } = e.target
        setFormData(prev => ({ ...prev, [id]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Cancel request submitted:', formData)
    }

    return (
        <>
        <Navbar/>
            <div className="footer-contact-form-layout-container">
                <FooterNavLinks />
                <form
                    className="footer-form-with-name-email-message"
                    onSubmit={handleSubmit}
                >
                    <label labelFor="reservationNumber">Reservation Number</label>
                    <input
                        type="text"
                        id="reservationNumber"
                        placeholder="#111-111-11"
                        value={formData.reservationNumber}
                        onChange={handleChange}
                        required
                    />

                    <label labelFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit" className="button-submit">
                        Cancel Reservation
                    </button>
                </form>
            </div>

            <Footer />
        </>
    )
}

export default CancelReservation

