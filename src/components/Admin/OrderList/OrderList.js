import React from 'react';
import { orderListData } from '../../../data';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import AdminLeftSidebar from '../AdminLeftSidebar/AdminLeftSidebar';
import OrderListBody from '../OrderListBody/OrderListBody';
import './OrderList.css';

const OrderList = () => {


    return (
        <>
            {/* <Header /> */}
            <div className="order">
                <div className="row">
                    <div className="col-3">
                        <AdminLeftSidebar />
                    </div>
                    <div className="col-9">
                        <div className='order-list-body py-3'>
                            <div className="container">
                                <h1 className='order-list-title section-subtitle text-center'>Order List</h1>

                                <table class="table order-table">
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
                                            orderListData.map((order, index) => {
                                                return (
                                                    <tr>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{order.username}</td>
                                                        <td>{order.email}</td>
                                                        <td>{order.service}</td>
                                                        <td>{order.paywith}</td>
                                                        <td>
                                                            <select class="form-select">
                                                                {order.status.map((status, index) => {
                                                                    return (
                                                                        <option id='status-option' value={status.value} name={status.status}>{status.status}</option>
                                                                    )
                                                                })}

                                                            </select>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }



                                    </tbody>
                                </table>

                            </div>

                        </div>

                    </div>
                </div>
            </div>


            <Footer />
        </>
    );
};

export default OrderList;