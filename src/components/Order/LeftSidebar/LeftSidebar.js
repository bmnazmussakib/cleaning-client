import React from 'react';
import './LeftSidebar.css';
import logo from '../../../img/logo.png'
import { orderLeftMenu } from '../../../data';
import { Link } from 'react-router-dom';
import { BsPlusLg } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdOutlineRateReview } from 'react-icons/md';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { BiCustomize } from 'react-icons/bi';




const LeftSidebar = () => {
    return (
        <div className='left-side-bar'>
            <div className="left-side-logo">
                <Link to="/"><img src={logo} alt="" className="img-fluid w-75 " /></Link>
            </div>

            <div className="left-side-menu">
                <ul>
                    <li><Link to="/service-booking" className='left-side-menu-item'><BsPlusLg className='me-3 left-side-menu-icon'/> Service Booking</Link></li>
                    <li><Link to="/service-booking-list" className='left-side-menu-item'><AiOutlineShoppingCart className='me-3 left-side-menu-icon'/> Service Booking List</Link></li>
                    <li><Link to="/review" className='left-side-menu-item'><MdOutlineRateReview className='me-3 left-side-menu-icon'/> Review</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default LeftSidebar;