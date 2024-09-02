import React from "react";
import './css/PrivacyPolicy.css'; 
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

const PrivacyPolicy = () => {
    return (
        <>
            <div className="privacy-policy">
                <div className="contentzzz">
                    <div style={{borderBottom:'0.1px solid #EEE', paddingBottom:'10px'}}>
                        <span><NavLink to={'/'} className={'privacy-policy-navsz'}>Home</NavLink> <span>/</span> <span>Privacy Policy</span></span>
                    </div>
                    <p style={{textAlign:"justify"}}>
                        
                    </p>

                    <h1>Privacy Policy</h1>
                    <p>Welcome to TourAhead! This Privacy Policy outlines how we handle your personal information collected through our website located at www.tourahead.com.</p>

                    <h2>1. Information We Collect</h2>
                    <p>We collect personal information such as your name, email address, phone number, and payment details when you use our services. This information is necessary to provide the services you request and to enhance your experience on our site.</p>

                    <h2>2. How We Use Your Information</h2>
                    <p>We use your personal information to process your bookings, provide customer support, and send you updates about our services. We may also use this information to improve our website and services.</p>

                    <h2>3. Sharing Your Information</h2>
                    <p>We do not sell, trade, or rent your personal information to others. We may share your information with third-party service providers to facilitate our services, such as payment processing and email delivery.</p>

                    <h2>4. Cookies</h2>
                    <p>Our website uses cookies to enhance your experience. Cookies are small files that are stored on your computer and help us analyze web traffic and track your preferences.</p>

                    <h2>5. Security</h2>
                    <p>We take the security of your personal information seriously and implement appropriate measures to protect it from unauthorized access, alteration, or disclosure.</p>

                    <h2>6. Your Rights</h2>
                    <p>You have the right to access, correct, or delete your personal information at any time. Please contact us if you wish to exercise these rights.</p>

                    <h2>7. Changes to This Privacy Policy</h2>
                    <p>We may update this Privacy Policy from time to time. We encourage you to review this page periodically for any changes. Your continued use of the site following the posting of changes will constitute your acceptance of those changes.</p>

                    <h2>8. Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy, please contact us at support@tourahead.com.</p>
                </div>
            </div>

            <div style={{marginTop:'220px'}}>
                <Footer />
            </div>
        </>
    );
}

export default PrivacyPolicy;

