import './CookiePrivacy.css'

function PrivacyCookie() {
    return (
        <div className="privacy-and-cookie-footer-container">

            <div className="privacy-and-cookie-footer-buttons">
                <a href="#ciao" className="privacy-and-cookie-button">Privacy Policy</a>
                <a href="#hello" className="privacy-and-cookie-button"  >Cookie Policy</a>
            </div>

            <div className="privacy-and-cookie-section" id="ciao">
                <h2 className="privacy-and-cookie-title">Privacy Policy</h2>

                <p className="privacy-and-cookie-text">
                    At Lotus Las Vegas, we are committed to protecting your privacy and ensuring the security of your personal
                    information. This Privacy Policy outlines how we collect, use, and safeguard your data when you interact with
                    our services.
                </p>

                <p className="privacy-and-cookie-text">
                    We collect personal information such as your name, contact details, and preferences when you engage with our
                    services. This information is used to provide you with the best possible experience, process your requests, and
                    communicate important updates.
                </p>

                <p className="privacy-and-cookie-text">
                    Your personal information is handled with the utmost care and is never sold to third parties. We may share your
                    data with trusted service providers who assist in operating our services, always under strict confidentiality
                    agreements.
                </p>

                <p className="privacy-and-cookie-text">
                    We implement advanced security measures to protect your information from unauthorized access, including
                    encryption, secure servers, and regular security assessments. Your data is stored in secure facilities and
                    accessed only by authorized personnel.
                </p>

                <p className="privacy-and-cookie-text">
                    You maintain control over your personal information and have the right to access, correct, or delete your data
                    at any time. We respect your privacy choices and will respond promptly to any requests regarding your personal
                    information.
                </p>
            </div>

            <div className="privacy-and-cookie-section" id="hello">
                <h2 className="privacy-and-cookie-title">Cookie Policy</h2>

                <p className="privacy-and-cookie-text">
                    Cookies are small text files placed on your device that help us provide and improve our services. They are
                    essential for certain website functions and help us understand how you interact with our platform.
                </p>

                <p className="privacy-and-cookie-text">
                    We use various types of cookies to enhance your experience: Essential cookies enable basic functionality,
                    performance cookies help us improve our content, and analytics cookies provide insights into usage patterns.
                </p>

                <p className="privacy-and-cookie-text">
                    Third-party services we use may also place cookies for analytics, advertising, and social media integration.
                    These partners adhere to strict privacy standards and handle data according to their respective privacy
                    policies.
                </p>

                <p className="privacy-and-cookie-text">
                    You can manage cookie preferences through your browser settings. While you may block or delete cookies, please
                    note that this might affect certain website features. Essential cookies cannot be disabled as they are necessary
                    for basic site operations.
                </p>
            </div>

            <div className="privacy-and-cookie-last-info">
                <p>Last updated: January 2024</p>
                <p>
                    For any privacy-related inquiries, please contact our privacy team at
                    <span className="privacy-lotus-email"> privacy@lotuslasvegas.com</span>
                </p>
            </div>

        </div>
    )
}

export default PrivacyCookie
