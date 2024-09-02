import React from "react";
import './css/TermsOfService.css';
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

const TermsOfService = () => {
    return (
        <>
            <div className="termsofservice">
                <div className="contentkj">
                    <div style={{borderBottom:'0.1px solid #EEE', paddingBottom:'10px'}}>
                        <span><NavLink to={'/'} className={'termsofservice-navs'}>Home</NavLink> <span>/</span> <span>Terms Of Service</span></span>
                    </div>
                    <p style={{textAlign:"justify"}}>
                        
                    </p>

                    <h1>Terms of Service</h1>
                    <p>Welcome to TourAhead! These terms and conditions outline the rules and regulations for the use of TourAhead's website, located at www.tourahead.com.</p>

                    <h2>1. Acceptance of Terms</h2>
                    <p>By accessing this website, we assume you accept these terms and conditions. Do not continue to use TourAhead if you do not agree to take all of the terms and conditions stated on this page.</p>

                    <h2>2. Modifications</h2>
                    <p>TourAhead reserves the right to revise these terms and conditions at any time. By using this website, you are expected to review these terms on a regular basis to ensure you understand all terms and conditions governing the use of this website.</p>

                    <h2>3. Intellectual Property Rights</h2>
                    <p>Unless otherwise stated, TourAhead and/or its licensors own the intellectual property rights for all material on TourAhead. All intellectual property rights are reserved. You may access this from TourAhead for your own personal use subjected to restrictions set in these terms and conditions.</p>

                    <h2>4. User Accounts</h2>
                    <p>When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>

                    <h2>5. Prohibited Uses</h2>
                    <p>You are prohibited from using the site or its content:</p>
                    <ul>
                        <li>For any unlawful purpose.</li>
                        <li>To solicit others to perform or participate in any unlawful acts.</li>
                        <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances.</li>
                        <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others.</li>
                        <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability.</li>
                    </ul>

                    <h2>6. Limitation of Liability</h2>
                    <p>In no event shall TourAhead, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website, whether such liability is under contract. TourAhead, including its officers, directors, and employees shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this website.</p>

                    <h2>7. Indemnification</h2>
                    <p>You hereby indemnify to the fullest extent TourAhead from and against any and all liabilities, costs, demands, causes of action, damages, and expenses arising in any way related to your breach of any of the provisions of these terms.</p>

                    <h2>8. Termination</h2>
                    <p>We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.</p>

                    <h2>9. Governing Law</h2>
                    <p>These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>

                    <h2>10. Contact Information</h2>
                    <p>If you have any questions about these Terms, please contact us at support@tourahead.com.</p>
                </div>
            </div>

            <div style={{marginTop:'220px'}}>
                <Footer />
            </div>
        </>
    );
}

export default TermsOfService;

