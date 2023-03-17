import React from "react";
import "../styles/footer.scss";
import {BsFacebook,BsTwitter,BsLinkedin} from "react-icons/bs";
import {FaInstagramSquare} from "react-icons/fa";

const Footer = ()=>{
    return(
        <div className="footer-container">
            <div className="newSettler">
                <div>
                    <h3>Sign Up to Newsletter</h3>
                    <p style={{color: "grey"}}> Get all the latest information on Events, Sales and Offers </p>
                </div>
                <div className="email">
                    <input type="text" placeholder="Enter Your Email Address"></input><span>SUBMIT</span>
                </div>
            </div>

            <div className="footer">
                <div>
                    <h4>Account</h4>
                    <ul>
                        <li>My Account</li>
                        <li>Payment Method</li>
                        <li>Track Your Order</li>
                        <li>Shipping Guide</li>
                        <li>FAQs</li>
                        <li>Product Support</li>
                        <li>Privasy</li>

                    </ul>
                </div>

                <div>
                    <h4>Account</h4>
                    <ul>
                        <li>My Account</li>
                        <li>Payment Method</li>
                        <li>Track Your Order</li>
                        <li>Shipping Guide</li>
                        <li>FAQs</li>
                        <li>Product Support</li>
                        <li>Privasy</li>

                    </ul>
                </div>

                <div>
                    <h4>About</h4>
                    <ul>
                        <li>About Proto</li>
                        <li>Our Guarantees</li>
                        <li>Tearms And Conditions</li>
                        <li>Privacy Policy</li>
                        <li>REturn Policy</li>
                        <li>Property Clame</li>
                        <li>Ite Map</li>

                    </ul>
                </div>

                <div>
                    <h4>Features</h4>
                    <ul>
                        <li>Powerful Admin Panel</li>
                        <li>MObile & Retian Optimzed</li>
                        <li>Track Your Order</li>
                        <li>superfast React Template</li>
                        <li>First Fully Worked Theme</li>
                        <li>10 Unique Homepages Layout</li>
                        

                    </ul>
                </div>

                <div >
                    <h4>Follow US</h4>
                    <ul className="follow-icons">
                        <li><BsFacebook/></li>
                        <li><BsTwitter/></li>
                        <li><FaInstagramSquare/></li>
                        <li><BsLinkedin/></li>
                    </ul>
                </div>

            </div>
         </div>

    )
}

export default Footer