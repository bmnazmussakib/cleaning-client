import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../../App';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import ServiceBookingListBody from '../ServiceBookingListBody/ServiceBookingListBody';
import './ServiceBookingList.css';

const ServiceBookingList = () => {

    const userEmail = localStorage.getItem('email')
    // console.log('userEmail :', userEmail );

    const { login } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = login;

    // console.log(loggedInUser);


    const [orderList, setOrderList] = useState([]);
    // console.log(orderList);

    useEffect(() => {

        fetch('https://eco-clean-api.herokuapp.com/order-list')
            .then(response => response.json())
            .then(json => setOrderList(json))

            
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
                            <h1 className='service-booking-list-title section-subtitle text-center '>Service Booking List</h1>
                        </div>

                        <table className="table order-table">
                            <thead>
                                <tr>
                                    <th scope="col">No.</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email ID</th>
                                    <th scope="col">Service</th>
                                    <th scope="col">Pay With</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orderList.map((order, index) => {
                                        return (
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{order.name}</td>
                                                <td>{order.email}</td>
                                                <td>{order.service.name}</td>
                                                <td>Card</td>
                                                <td>{order.status == 1 ? 'Pending' : order.status == 2 ? 'On Going' : order.status == 3 ? 'Done' : "Not Found"}</td>
                                            </tr>
                                        )
                                    })
                                }



                            </tbody>
                        </table>


                    </div>
                </div>
            </div>


            <Footer />
        </>
    );
};

export default ServiceBookingList;