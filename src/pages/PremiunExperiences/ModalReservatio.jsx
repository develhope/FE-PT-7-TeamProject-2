import { useState } from 'react'
import './ModalReservatio.css'

function ModalReservation({ onClose }) {
    const [guestCount, setGuestCount] = useState(1)
    const [showMessage, setShowMessage] = useState(false)
    const [formData, setFormData] = useState({
        date: '',
        firstName: '',
        lastName: '',
        email: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const reservation = {
            data: formData.date,
            ospiti: guestCount,
            nome: formData.firstName,
            cognome: formData.lastName,
            email: formData.email
        }

        const archive = JSON.parse(localStorage.getItem('reservationData')) || []
        archive.push(reservation)
        localStorage.setItem('reservationData', JSON.stringify(archive))

        setShowMessage(true)
        setTimeout(() => {
            setFormData({ date: '', firstName: '', lastName: '', email: '' })
            setGuestCount(1)
            setShowMessage(false)
            onClose()
        }, 4000)
    }

    return (
        <div className="fixed-form-container-of-Premium-Experiences">
            <div className="form-box-of-P-E">
                <button className="close-modal-of-form" onClick={onClose}>
                    &times;
                </button>

                {showMessage ? (
                    <p style={{ color: '#C4A55F', textAlign: 'center', marginTop: '80px', fontWeight: '600' }}>
                        Thank you for contacting us!
                    </p>
                ) : (
                    <form className="the-modal-form-of-P-E" onSubmit={handleSubmit}>
                        <label>Preferred Date</label>
                        <input type="date" name="date" value={formData.date} onChange={handleChange} required />

                        <label>Number of Guests</label>
                        <div className="guest-counter-of-form">
                            <button type="button" className='guest-counter' onClick={() => setGuestCount(prev => Math.max(1, prev - 1))}>-</button>
                            <span>{guestCount}</span>
                            <button type="button" className='guest-counter' onClick={() => setGuestCount(prev => prev + 1)}>+</button>
                        </div>

                        <h3 className="form-section-title-PE">Contact Information</h3>

                        <label>First Name</label>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />

                        <label>Last Name</label>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />

                        <label>Email Address</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

                        <button type="submit" className="button-submit">Request Reservation</button>
                    </form>
                )}
            </div>
        </div>
    )
}

export default ModalReservation