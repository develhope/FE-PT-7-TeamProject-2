import { useState } from 'react'
import FooterNavLinks from './../FooterLinks'
import './Faq.css'


const faqs = [
    {
        question: 'What VIP services do you offer?',
        answer: 'We offer private check-in, room upgrades, welcome gifts, and personalized concierge'
    },
    {
        question: 'What are the check-in and check-out times?',
        answer: 'Check-in is from 3 PM, and check-out is until 11 AM'
    },
    {
        question: 'Do I need to book the gourmet restaurants in advance?',
        answer: 'Yes, we highly recommend booking in advance to ensure availability.'
    },
    {
        question: 'Is spa access included in my stay?',
        answer: 'Spa access is included for guests who book premium rooms or higher categories.'
    },
    {
        question: 'Is parking available and included?',
        answer: 'Yes, we provide free parking for all registered guests.'
    }
]

function FaqPage() {
    const [openedQuestion, setOpenedQuestion] = useState(null)

    const toggleQuestion = (question) => {
        setOpenedQuestion(prev => (prev === question ? null : question))
    }

    return (
        <>
            <div className="footer-faq-section">
                <FooterNavLinks />
                <div className="faq-question-and-answer-container">
                    {faqs.map((faq) => (
                        <div className="footer-faq-item" key={faq.question}>
                            <button
                                className="footer-faq-question-toggle"
                                onClick={() => toggleQuestion(faq.question)}
                            >
                                {faq.question}
                                <span className="triangolo">{openedQuestion === faq.question ? '▲' : '▼'}</span>
                            </button>
                            {openedQuestion === faq.question && (
                                <p className="footer-faq-answer">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default FaqPage
