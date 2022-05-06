import React from 'react';
import ServiceBookingBody from '../ServiceBookingBody/ServiceBookingBody';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import './ServiceBooking.css';
import Footer from '../../Shared/Footer/Footer';


const ServiceBooking = () => {
    return (
        <div className="add-service">
            <div className="row">
                <div className="col-3">
                    <LeftSidebar />
                </div>
                <div className="col-9">
                    <ServiceBookingBody />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ServiceBooking;