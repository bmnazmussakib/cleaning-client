import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';
import { BsPhoneVibrateFill } from 'react-icons/bs';
import logo from "../../../img/logo.png";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="header-contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                        <ul className='header-address-list d-flex justify-content-between align-items-center'>
                                <li>
                                    <p><MdEmail className='header-address-icon me-1 fs-5'/> company@example.com</p>
                                </li>
                                <li>
                                    <p><BsFillTelephoneFill className='header-address-icon me-1 fs-5'/> + (88) 12345 6789</p>
                                </li>
                                <li>
                                    <p><FaClock className='header-address-icon me-1 fs-5'/>  Mon - Fri: 9:00 AM - 5:00 PM | Closed on Sunday</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <ul class="header-social-icon d-flex justify-content-end align-items-center">
                                <li className=''><a href="#"><FaFacebookF /></a></li>
                                <li className='ms-3'><a href="#"><FaLinkedinIn /></a></li>
                                <li className='ms-3'><a href="#"><FaTwitter /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Navbar bg="" expand="lg" className='navbar'>
                <Container>
                    <Navbar.Brand href="./" className='nav-logo'>
                        <img src={logo} alt="" className="img-fluid"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link className='nav-menu' href="./">Home</Nav.Link>
                            <Nav.Link className='nav-menu' href="#service">Service</Nav.Link>
                            <Nav.Link className='nav-menu' href="#about">About</Nav.Link>
                            <Nav.Link className='nav-menu' href="#team">Team</Nav.Link>
                            <Nav.Link className='nav-menu' href="#contact">Contact Us</Nav.Link>
                            <Nav.Link className='nav-menu' href="#contact"><Link className='admin-link' to="/add-service">Admin</Link></Nav.Link>
                        </Nav>
                        <Nav className="ms-auto">
                            <Nav.Link>
                                <div className="call-now d-flex align-items-center justify-content-between">
                                    <BsPhoneVibrateFill className='fs-1 me-3 call-now-icon'/>
                                    <div className="call-now-text">Call For Appointment <br />
                                        <span>(+980) 12345 67890</span></div>
                                </div>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;