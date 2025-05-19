import { useState } from 'react'
import './ContactUs.css'
import FooterNavLinks from '../FooterLinks'
import Navbar from './../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'

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
        <>
            <Navbar />
            <div className="footer-contact-form-layout-container">
                <FooterNavLinks />

                <form
                    className="footer-form-with-name-email-message"
                    onSubmit={handleSubmit}
                >
                    <label labelFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
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

                    <label labelFor="message">Message</label>
                    <textarea
                        id="message"
                        rows="6"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>

                    <button type="submit" className='button-submit'>Send Message</button>
                </form>

            </div>
            <Footer />
        </>
    )
}

export default ContactFooter
