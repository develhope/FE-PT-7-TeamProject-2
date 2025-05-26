import { useState } from 'react'
import './ContactUs.css'
import FooterNavLinks from '../FooterLinks'

function ContactFooter() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        const { id, value } = e.target
        setFormData(prev => ({ ...prev, [id]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Submitted:', formData)
    }

    return (
        <div className="footer-contact-form-layout-container">
            <FooterNavLinks />

            <form
                className="footer-form-with-name-email-message"
                onSubmit={handleSubmit}
            >
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    className="footer-email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />

                <button type="submit" className="button-submit">Send Message</button>
            </form>
        </div>
    )
}

export default ContactFooter
