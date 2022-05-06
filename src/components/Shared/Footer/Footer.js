import React from 'react';
import { services } from '../../../data';
import './Footer.css';
import footerLogo from '../../../img/logo-white.png';
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';



const Footer = () => {



    return (
        <footer className='footer' id='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="footer-logo mb-4">
                            <a href="./"><img src={footerLogo} alt="" className='img-fluid'/></a>
                        </div>
                        <p className='footer-text'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit.</p>
                    </div>
                    <div className="col-lg-2">
                        <div className="our-services">
                            <h4 className='footer-menu-title'>Our Services</h4>
                            <ul>
                                <li className='footer-menu-item'><a href="#">House Cleaning</a></li>
                                <li className='footer-menu-item'><a href="#">Kitchen Cleaning</a></li>
                                <li className='footer-menu-item'><a href="#">Carpet Cleaning</a></li>
                                <li className='footer-menu-item'><a href="#">Window Cleaning</a></li>
                                <li className='footer-menu-item'><a href="#">Floor Cleaning</a></li>
                                <li className='footer-menu-item'><a href="#">Bathroom Cleaning</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="quick-links">
                            <h4 className='footer-menu-title'>Quick Links</h4>
                            <ul>
                                <li className='footer-menu-item'><a href="#">Home</a></li>
                                <li className='footer-menu-item'><a href="#">Service</a></li>
                                <li className='footer-menu-item'><a href="#">About</a></li>
                                <li className='footer-menu-item'><a href="#">Team</a></li>
                                <li className='footer-menu-item'><a href="#">Contac Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="contact-us">
                            <h4 className='footer-menu-title'>Contact Us</h4>
                            <ul className='footer-address-list'>
                                <li className='footer-menu-item'>
                                    <p><IoLocationSharp className='address-icon me-2'/> 24/A Mount View, New York, USA</p>
                                </li>
                                <li className='footer-menu-item'>
                                    <p><MdEmail className='address-icon me-2'/> company@example.com</p>
                                </li>
                                <li className='footer-menu-item'>
                                    <p><BsFillTelephoneFill className='address-icon me-2'/> + (88) 12345 6789</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;