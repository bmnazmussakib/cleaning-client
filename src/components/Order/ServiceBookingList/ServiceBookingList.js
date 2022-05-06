import React, { useState, useEffect } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import ServiceBookingListBody from '../ServiceBookingListBody/ServiceBookingListBody';
import './ServiceBookingList.css';

const ServiceBookingList = () => {

    const [serviceBooking, setServiceBooking] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setServiceBooking(json))
    }, [])



    return (
        <>
            {/* <Header /> */}
            <div className="service-booking-list">
                <div className="row">
                    <div className="col-3">
                        <LeftSidebar />
                    </div>
                    <div className="col-9">
                        <div className='service-booking-list-body'>
                            <h1 className='service-booking-list-title section-subtitle text-center '>ServiceBookingListBody</h1>
                        </div>
                        <div className="row row-cols-1 row-cols-md-2 g-4">
                            {
                                serviceBooking.map((serviceBooking, index) => <ServiceBookingListBody serviceBooking={serviceBooking} />)
                            }

                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    );
};

export default ServiceBookingList;