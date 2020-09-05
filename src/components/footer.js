import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/facebook.png';
import logo1 from '../images/twitter.png';
import logo2 from '../images/youtube.png';
import logo3 from '../images/instagram.png';

const Footer = () => (
    <footer>
        <div className="first-footer-row">
            <div className="for-contact-us">
                <h1>Contact Us</h1>
            </div>
        </div>
        <div className="second-footer-row">
            <div className="first-column">
                <h3>Get Started</h3>
                <ul>
                    <li><a href="index.html" className="footer_link">Home</a></li>
                    <li><a href="destinations.html" className="footer_link">Enrolment</a></li>
                    <li><a href="hotels.html" className="footer_link">Online Learning</a></li>
                    <li><a href="hotels.html" className="footer_link">Community</a></li>
                    <li><a href="hotels.html" className="footer_link">Work With Us</a></li>
                    <li><a href="contactus.html" className="footer_link">CIA First Library Catalog</a></li>
                    <li><a href="aboutus.html" className="footer_link">School Base Login</a></li>
                    <li><a href="aboutus.html" className="footer_link">CIA First English Center</a></li>
                </ul>
            </div>
            <div className="second-column">
                <h4>Follow Us</h4>
                <div className="for-image">
                    <ul>
                        <li><a href="https://web.facebook.com/?_rdc=1&_rdr" target="_blank"><img src={'/dist/' + logo}/></a></li>
                        <li><a href="https://twitter.com/explore" target="_blank"><img src={'/dist/' + logo1}/></a></li>
                        <li><a href="https://www.youtube.com/" target="_blank"><img src={'/dist/' + logo2}/></a></li>
                        <li><a href="https://instagram.com/" target="_blank"><img src={'/dist/' + logo3}/></a></li>
                    </ul>
                </div>
            </div>
            <div className="third-column">
                <h4>About Us</h4>
                <p>
                    What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry"s standard 
                    dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?
                </p>
            </div>
        </div>
    </footer>
);

export default Footer;