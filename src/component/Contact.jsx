import React, { useState } from 'react';
import './css/Contact.css';
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import p from './p.jpg';

const Contact = () => {
    

    // const [formData, setFormData] = useState({
    //     name: '',
    //     phone: '',
    //     message: ''
    // });
    // const [formVisible, setFormVisible] = useState(false);
    // const [formSubmitted, setFormSubmitted] = useState(false);
    // const [docketNumber, setDocketNumber] = useState('');

    
    // const generateDocketNumber = () => {
    //     const length = 10; 
    //     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    //     let result = '';
    //     for (let i = 0; i < length; i++) {
    //         const randomIndex = Math.floor(Math.random() * characters.length);
    //         result += characters[randomIndex];
    //     }
    //     return result;
    // };

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
        
    //     const generatedDocketNumber = generateDocketNumber(); // Generate a new docket number
    //     setDocketNumber(generatedDocketNumber);
    //     setFormSubmitted(true);
    //     alert(`Your issue is submitted successfully! Docket number: ${generatedDocketNumber}`);
        
    //     setFormData({
    //         name: '',
    //         phone: '',
    //         message: ''
    //     });
    //     setTimeout(() => {
    //         setFormVisible(false);
    //     }, 3000); 
    // };
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });
    const [formVisible, setFormVisible] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [docketNumber, setDocketNumber] = useState('');

    
    const generateDocketNumber = () => {
        const length = 10; 
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters[randomIndex];
        }
        return result;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const generatedDocketNumber = generateDocketNumber(); 
        setDocketNumber(generatedDocketNumber);
        setFormSubmitted(true);
        alert(`Your issue is submitted successfully! Docket number: ${generatedDocketNumber}`);
        
        
        setFormData({
            name: '',
            phone: '',
            message: ''
        });

        
        setTimeout(() => {
            setFormSubmitted(false); 
        }, 3000); 
    };


    return (
        <>
            <div className="Contact">
                <div className="contentq">
                    <div style={{ borderBottom: '0.1px solid #EEE', paddingBottom: '10px' }}>
                        <span>
                            <NavLink to={'/'} className={'Contact-nav'}>Home</NavLink> <span>/</span> <span>Help & Support</span>
                        </span>
                    </div>
                    <img src={p} alt="Contact Us" className="contact-image" />
                    <h1 style={{ textAlign: "justify" }}>Help & Support</h1>
                    <h3>We are happy to help!</h3>

                    <section id="contact">
                        <h2>1. Contact Information</h2>
                        <p>Need direct assistance? Our customer support team is here to help you with any inquiries or issues you may have.</p>
                        <h3>Contact Us:</h3>
                        <ul>
                            <li><strong>Phone:</strong> +91 7044485965</li>
                            <li><strong>Email:</strong> <a href="mailto:support@travelahead.com">support@travelahead.com</a></li>
                            <li><strong>Live Chat through WhatsApp:</strong> Available - <a href="https://wa.me/917044485965" target="_blank" rel="noopener noreferrer">+91 7044485965</a></li>
                            <li><strong>Social Media:</strong>
                                <ul>
                                    <li><a href="https://www.facebook.com/tripahead/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                                    <li><a href="https://x.com/tripahead" target="_blank" rel="noopener noreferrer">X (formerly Twitter)</a></li>
                                    <li><a href="https://www.instagram.com/tripahead/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                                    <li><a href="https://wa.me/917044485965" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
                                </ul>
                            </li>
                        </ul>
                        <h2>Contact our Makers at LinkedIn.com:</h2>
                        <ol>
                            <li><a href="https://www.linkedin.com/in/soumyodip-thanadar-853931258/" target="_blank" rel="noopener noreferrer">Soumyodip Thanadar</a></li>
                            <li><a href="https://www.linkedin.com/in/arpan-maity-25ab18254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">Arpan Maity</a></li>
                            <li><a href="https://www.linkedin.com/in/md-asif-022739261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">Md. Asif</a></li>
                            <li><a href="https://www.linkedin.com/in/maharshi-adhikary-110570249/" target="_blank" rel="noopener noreferrer">Maharshi Adhikary</a></li>
                            <li><a href="https://www.linkedin.com/in/puspaksha-ghosh-093651291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">Pushpaksha Ghosh</a></li>
                            <li><a href="https://www.linkedin.com/in/abriti-hazra-4b0702261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">Abriti Hazra</a></li>
                        </ol>
                    </section>

                    <section id="faqs">
                        <h2>2. Frequently Asked Questions (FAQs)</h2>
                        <p>Get quick answers to the most common queries. Whether you have questions about booking, cancellations, payments, or tour details, our FAQs cover everything you need to know.</p>
                        <h3>Popular Questions:</h3>
                        <ul>
                            <li>How do I make a booking?</li>
                            <li>What is the cancellation policy?</li>
                            <li>How do I modify my reservation?</li>
                            <li>What payment methods are accepted?</li>
                        </ul>
                        <p>Explore All Frequently Asked Questions:</p>
                        <ul>
                            <li><strong>Booking Process:</strong> Step-by-step guidance on making a reservation. This includes how to search for tours, select packages, and complete your booking.</li>
                            <li><strong>Cancellation and Modifications:</strong> Detailed explanations of our policies and procedures for cancelling or modifying your reservation. Learn about deadlines and eligibility for refunds.</li>
                            <li><strong>Payment Issues:</strong> Solutions to common payment-related queries, including troubleshooting steps for payment failures and understanding accepted payment methods.</li>
                            <li><strong>Tour Details:</strong> Information on what to expect during your trip, including itineraries, accommodation options, transportation details, and other essential travel information.</li>
                        </ul>
                    </section>

                    <section id="troubleshooting">
                        <h2>3. Troubleshooting Guide</h2>
                        <p>Having technical difficulties or facing issues with the website? Check our troubleshooting guide for step-by-step solutions to common problems.</p>
                        <h3>Common Issues:</h3>
                        <ul>
                            <li>Unable to complete a booking</li>
                            <li>Problems with payment processing</li>
                            <li>Issues accessing your account</li>
                        </ul>
                        <p>If you encounter issues while using our website, follow these troubleshooting steps:</p>
                        <ul>
                            <li><strong>Unable to complete a booking:</strong> Ensure you have a stable internet connection, verify your payment details, and check for any website maintenance notifications. Try clearing your browser cache or using a different browser.</li>
                            <li><strong>Problems with payment processing:</strong> Check if your payment method is valid and has sufficient funds. Contact your bank or payment provider for issues related to transactions. Ensure that your billing information is accurate.</li>
                            <li><strong>Issues accessing your account:</strong> Confirm that you are entering the correct username and password. Use the 'Forgot Password' feature to reset your credentials if necessary. Contact our support team if problems persist.</li>
                        </ul>
                    </section>

                    <section id="booking-process">
                        <h2>4. Booking Process Guide</h2>
                        <p>New to our platform? Learn how to book your dream vacation step by step. This guide walks you through the entire process from searching for a tour to completing your payment.</p>
                        <h3>Topics Covered:</h3>
                        <ul>
                            <li>Searching for tours</li>
                            <li>Selecting the right package</li>
                            <li>Entering traveler details</li>
                            <li>Finalizing payment</li>
                        </ul>
                        <p>Our booking process is designed to be straightforward and user-friendly. Follow these steps to book your tour:</p>
                        <ul>
                            <li><strong>Searching for tours:</strong> Use our search functionality to find tours based on your preferences, such as destination, dates, and type of tour.</li>
                            <li><strong>Selecting the right package:</strong> Browse through the available packages, compare options, and choose the one that best fits your needs and budget.</li>
                            <li><strong>Entering traveler details:</strong> Provide necessary information such as names, ages, and special requests for each traveler.</li>
                            <li><strong>Finalizing payment:</strong> Review your booking details, choose a payment method, and complete the payment process to confirm your reservation.</li>
                        </ul>
                    </section>

                    <section id="cancellation-policy">
                        <h2>5. Cancellation & Refund Policies</h2>
                        <p>Understand our policies on cancellations and refunds before you book. We strive to make our policies clear and fair for all travelers.</p>
                        <h3>Key Points:</h3>
                        <ul>
                            <li>Cancellation deadlines</li>
                            <li>Refund eligibility</li>
                            <li>Process for requesting refunds</li>
                        </ul>
                        <p>Our cancellation and refund policies are designed to accommodate various situations. Here’s what you need to know:</p>
                        <ul>
                            <li><strong>Cancellation deadlines:</strong> Cancellations made within a specified period before the tour start date may be eligible for a refund. Check our policy for exact deadlines.</li>
                            <li><strong>Refund eligibility:</strong> Refunds are provided based on the timing of your cancellation and the terms of your booking. Some packages may have non-refundable components.</li>
                            <li><strong>Process for requesting refunds:</strong> To request a refund, contact our support team with your booking details. We will process your request as quickly as possible and notify you of the outcome.</li>
                        </ul>
                    </section>

                    <section id="additional-resources">
                        <h2>6. Additional Resources</h2>
                        <p>Access extra materials and resources to help you make the most of your trip. This includes travel guides, packing lists, and other helpful information.</p>
                        <h3>Resources Available:</h3>
                        <ul>
                            <li>Travel guides</li>
                            <li>Packing lists</li>
                            <li>Destination tips</li>
                        </ul>
                        <p>Explore our additional resources to enhance your travel experience:</p>
                        <ul>
                            <li><strong>Travel guides:</strong> Detailed guides for each destination, including must-see attractions, local customs, and dining recommendations.</li>
                            <li><strong>Packing lists:</strong> Comprehensive lists to ensure you pack everything you need for your trip, tailored to different types of tours.</li>
                            <li><strong>Destination tips:</strong> Practical advice for navigating your destination, including transportation options and safety tips.</li>
                        </ul>
                    </section>

                    <section id="testimonials">
                        <h2>7. Customer Testimonials</h2>
                        <p>Read about the experiences of other travelers who have used our services. Their feedback helps us continually improve and provide better services.</p>
                        <h3>What Our Customers Say:</h3>
                        <ul>
                            <li>"Amazing experience! The tour was well-organized and the guides were fantastic." - Ajay Chatterjee</li>
                            <li>"Great customer service and seamless booking process. Highly recommend!" - Rajesh Mukherjee</li>
                            <li>"A memorable trip with excellent support throughout. Thank you!" - Avijit Sharma</li>
                        </ul>
                    </section>

                    <section id="accessibility">
                        <h2>8. Accessibility Features</h2>
                        <p>We are committed to providing accessible services to all our travelers. Learn about the features we offer to ensure a comfortable experience for everyone.</p>
                        <h3>Accessible Services:</h3>
                        <ul>
                            <li>Wheelchair access</li>
                            <li>Assistive devices</li>
                            <li>Special accommodations</li>
                        </ul>
                        <p>Our accessibility features are designed to make your travel experience smooth and enjoyable:</p>
                        <ul>
                            <li><strong>Wheelchair access:</strong> Many of our tour options include wheelchair-accessible facilities. Check with us for specific details.</li>
                            <li><strong>Assistive devices:</strong> We offer various assistive devices to support travelers with specific needs. Contact us for more information.</li>
                            <li><strong>Special accommodations:</strong> Let us know about any special requirements you may have, and we will do our best to accommodate them.</li>
                        </ul>
                    </section>

                   





                    <div className="chatbot-container">
                <button className="chatbot-button" onClick={() => setFormVisible(!formVisible)}>
                💬
                </button>
                {formVisible && (
                    <div className="chatbot-form">
                        {!formSubmitted ? (
                            <form onSubmit={handleSubmit}>
                                <label>
                                    Name:
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </label>
                                <label>
                                    Phone:
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </label>
                                <label>
                                    Message:
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </label>
                                <button type="submit">Submit</button>
                            </form>
                        ) : (
                             <div>
                                <p>Thank you for your message! We will get back to you soon.</p>
                                <p>Your docket number is: {docketNumber}</p>
                            </div> 
                        )}
                    


                    </div> 
              


                )}
            </div>
            </div>
            </div>
        

            <Footer />
        </>
    );
};

export default Contact;