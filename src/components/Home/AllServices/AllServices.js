import React from 'react';
import './AllServices.css';
import { BiChevronRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';



const AllServices = ({ services, id }) => {

    const { img, serciceName, serviceDecription } = services;

    return (
        <div className="col">
            <div className="service-card card ps-4 py-4 pe-2">
                <div className="card-head d-flex align-items-center">
                    <div className="service-card-img me-3 mb-4">
                        <img src={img} className=" img-fluid" alt="..." />
                    </div>
                    <h5 className="service-card-title card-title">{serciceName}</h5>
                </div>
                <div className="card-body p-0">
                    <p className="service-card-text card-text">{serviceDecription}</p>
                    <Link to="/add-service"><a href="#">Read more <BiChevronRight /></a></Link>
                </div>
            </div>
        </div>
    );
};

export default AllServices;