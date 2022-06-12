import React from 'react';
import ServiceBookingBody from '../ServiceBookingBody/ServiceBookingBody';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import './ServiceBooking.css';
import Footer from '../../Shared/Footer/Footer';
import { useParams } from 'react-router-dom';


const ServiceBooking = () => {

    let {service_id} = useParams;
    // console.log(service_id);

    

    return (
        <div className="add-service">
            <div className="row">
                <div className="col-3">
                    <LeftSidebar />
                </div>
                <div className="col-9">
                    <ServiceBookingBody service_id={service_id} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ServiceBooking;