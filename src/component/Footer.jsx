import React from "react";
import './css/Footer.css';

const Footer = () => {
    return (
        <>
            <footer>
                <p>&copy; 2024 TourAhead. All rights reserved.</p>
                <ul>
                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                    <li><a href="/termsofservice">Terms of Service</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
            </footer>
        </>
    );
};

export default Footer;
