import React, { useContext, useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';
import { BsPhoneVibrateFill } from 'react-icons/bs';
import logo from "../../../img/logo.png";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaClock } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../App';
import { getAuth, signOut } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';




const Header = () => {

    const { admin, login } = useContext(UserContext);
    const [loggedInAdmin, setLoggedInAdmin] = admin;
    const [loggedInUser, setLoggedInUser] = login;

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);

    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const handleLogout = () => {
        console.log(admin);
        console.log(login);
        setAnchorEl(null);
    }



    const navigate = useNavigate();
    // const { login } = useContext(UserContext);
    // console.log(login);

    // User Token
    const userToken = localStorage.getItem('token');


    // Sign out
    const handleGoogleSignOut = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
            })
            .catch((error) => {
            });
        localStorage.removeItem("token");
        localStorage.removeItem('body');
        localStorage.removeItem('email');
        localStorage.removeItem('displayName');
        localStorage.removeItem('photoURL');

        console.log("Log out");
    }


    // const adminNav = document.getElementById('admin-nav');
    if (userToken) {
        document.getElementById('admin-nav').style.display = "none";
    }



    return (
        <header>
            <div className="header-contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <ul className='header-address-list d-flex justify-content-between align-items-center'>
                                <li>
                                    <p><MdEmail className='header-address-icon me-1 fs-5' /> company@example.com</p>
                                </li>
                                <li>
                                    <p><BsFillTelephoneFill className='header-address-icon me-1 fs-5' /> + (88) 12345 6789</p>
                                </li>
                                <li>
                                    <p><FaClock className='header-address-icon me-1 fs-5' />  Mon - Fri: 9:00 AM - 5:00 PM | Closed on Sunday</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <ul class="header-social-icon d-flex justify-content-end align-items-center">
                                <li className=''><a href="#"><FaFacebookF /></a></li>
                                <li className='ms-3'><a href="#"><FaLinkedinIn /></a></li>
                                <li className='ms-3'><a href="#"><FaTwitter /></a></li>
                                <li className='ms-3'>
                                    {/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                        Open Menu
                                    </Button> */}

                                    {/* <Avatar aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>H</Avatar> */}
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}/>

                                    <Menu
                                        id="simple-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                                        <MenuItem onClick={handleClose}>My account</MenuItem>
                                        <MenuItem id='logout' onClick={handleLogout}>Logout</MenuItem>

                                    </Menu>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Navbar bg="" expand="lg" className='navbar'>
                <Container>
                    <Navbar.Brand href="./" className='nav-logo'>
                        <img src={logo} alt="" className="img-fluid" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link className='nav-menu' href="./">Home</Nav.Link>
                            <Nav.Link className='nav-menu' href="#service">Service</Nav.Link>
                            <Nav.Link className='nav-menu' href="#about">About</Nav.Link>
                            <Nav.Link className='nav-menu' href="#team">Team</Nav.Link>
                            <Nav.Link className='nav-menu' href="#footer">Contact Us</Nav.Link>
                            <Nav.Link className='nav-menu' id='admin-nav' ><Link className='admin-link' to="/add-service">Admin</Link></Nav.Link>

                            {
                                userToken ? <Nav.Link className='nav-menu' ><a className='admin-link' href="/" onClick={handleGoogleSignOut}>Logout</a></Nav.Link>
                                    : <Nav.Link className='nav-menu' ><Link className='admin-link' to="/login">Login</Link></Nav.Link>
                            }

                        </Nav>
                        <Nav className="ms-auto">
                            <Nav.Link>
                                <div className="call-now d-flex align-items-center justify-content-between">
                                    <BsPhoneVibrateFill className='fs-1 me-3 call-now-icon' />
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