import React from 'react';
import './AllServices.css';
import { BiChevronRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';



const AllServices = ({ services, id }) => {

    // console.log('id: ', id);
    console.log('services : ', services);


    const handleBookService = (id) => {
        // console.log("ID GET");
        // console.log(id);
    }

    const { imgURL, name, decription, _id } = services;


    return (
        <div className="col">
            <div className="service-card card ps-4 py-4 pe-2">
                <div className="card-head d-flex align-items-center">
                    <div className="service-card-img me-3 mb-4">
                        <img src={imgURL} className=" img-fluid" alt="..." />
                    </div>
                    <h5 className="service-card-title card-title">{name}</h5>
                </div>
                <div className="card-body p-0">
                    <p className="service-card-text card-text">{decription}</p>
                    <Link to="/service-booking" >Read more <BiChevronRight /></Link>
                    {/* <Link to={`/service-booking/${_id}`} onClick={() => handleBookService(_id)}>Read more id <BiChevronRight /></Link> */}
                </div>
            </div>
            
        </div>
    );
};

export default AllServices;