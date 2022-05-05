import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import ServiceBookingListBody from '../ServiceBookingListBody/ServiceBookingListBody';
import './ServiceBookingList.css';

const ServiceBookingList = () => {



    return (
        <>
            {/* <Header /> */}
            <div className="order">
                <div className="row">
                    <div className="col-3">
                        <LeftSidebar />
                    </div>
                    <div className="col-9">
                        <ServiceBookingListBody />
                    </div>
                </div>
            </div>


            <Footer />
        </>
    );
};

export default ServiceBookingList;