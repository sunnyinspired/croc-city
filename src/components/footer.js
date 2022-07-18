import React from "react";
import { Col, Row} from "react-bootstrap";
import { Link } from "react-router-dom";
var year = new Date().getFullYear();
const Footer = () =>{
return(
    <>
            <div className="footer">
            <Row>
                <Col md={4} className="contact">
                    <h3>Contact</h3>
                    <p>
                        <i className="bi-geo-alt-fill"></i>&nbsp;
                        Head Office: No. 2, Sabon-Tasha, Mando, Kaduna, Kaduna State.
                    </p>

                    <p>
                    <i className="bi-telephone-fill"></i>&nbsp;
                        (+234) 08027643043, 08051300974
                    </p>

                    <p>
                    <i className="bi-envelope-fill"></i>&nbsp;
                        info@croccity.com
                    </p>
                </Col>
                <Col md={4} className="quick-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/booking">Booking</Link></li>
                        <li><Link to="/cargo">Cargo</Link></li>
                        <li><Link to="/terminals">Terminals</Link></li>
                        <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                    </ul>

                </Col>
                <Col md={4} className="follow-us">
                    <h3>
                        Connect with Us
                    </h3>
                    <p>
                    <i className="bi-facebook"></i>
                    <i className="bi-instagram"></i>
                    <i className="bi-whatsapp"></i>
                    <i className="bi-twitter"></i>
                        
                    </p>
                </Col>
            </Row>
            <div className="author text-center">
                <p>
                    Copyright &copy; {year} | Croc-City Shuttle Limited | All Rights Reserved.
                </p>
                
                    Developed by <a href="https://gowise.com.ng" target="_blank" rel="noopener noreferrer">Nenisoft</a>
                
            </div>
    </div>
    </>
)
}

export default Footer;