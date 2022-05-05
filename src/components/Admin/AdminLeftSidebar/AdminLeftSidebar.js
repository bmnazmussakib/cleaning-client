import React from 'react';
import './AdminLeftSidebar.css';
import logo from '../../../img/logo.png'
import { orderLeftMenu } from '../../../data';
import { Link } from 'react-router-dom';
import { BsPlusLg } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdOutlineRateReview } from 'react-icons/md';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { BiCustomize } from 'react-icons/bi';




const AdminLeftSidebar = () => {
    return (
        <div className='left-side-bar'>
            <div className="left-side-logo">
                <img src={logo} alt="" className="img-fluid w-75 " />
            </div>

            <div className="left-side-menu">
                <ul>
                    <li><Link to="/add-service" className='left-side-menu-item'><BsPlusLg className='me-3 left-side-menu-icon'/> Add Service</Link></li>
                    <li><Link to="/order-list" className='left-side-menu-item'><AiOutlineShoppingCart className='me-3 left-side-menu-icon'/> Order List</Link></li>
                    <li><Link to="/make-admin" className='left-side-menu-item'><AiOutlineUserAdd className='me-3 left-side-menu-icon'/> Make Admin</Link></li>
                    <li><Link to="/manage-services" className='left-side-menu-item'><BiCustomize className='me-3 left-side-menu-icon'/> Manage Services</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default AdminLeftSidebar;