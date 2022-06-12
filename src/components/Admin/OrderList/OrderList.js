import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { orderListData } from '../../../data';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import AdminLeftSidebar from '../AdminLeftSidebar/AdminLeftSidebar';
import OrderListBody from '../OrderListBody/OrderListBody';
import './OrderList.css';

const OrderList = () => {

    const [orderList, setOrderList] = useState();
    // console.log(orderList);

    // orderList.map(order => {console.log(order)})

    // const [loading, setLoading] = useState();

    useEffect(() => {
        fetch('https://eco-clean-api.herokuapp.com/order-list')
            .then(response => response.json())
            .then(json => {
                setOrderList(json)
            })
    }, [])

    if (!orderList) {
        return(
            <div className='d-flex justify-content-center align-items-center my-auto' style={{height: '100vh' }}>
                <Spinner animation="border" style={{width: '10em', height: '10em', color: '#90c73e'}} />
            </div>
        )
    }


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
                                <h1 className='order-list-title section-subtitle text-center'>
                                    Order List
                                    
                                </h1>



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
                                            orderListData.map((order, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{order.name}</td>
                                                        <td>{order.email}</td>
                                                        <td>{order.service.name}</td>
                                                        <td>Card</td>
                                                        <td>
                                                            <select className="form-select">
                                                                {/* {order.status.map((status, index) => {
                                                                    return (
                                                                        <option id='status-option' key={index} value={status.value} name={status.status}>{status.status}</option>
                                                                    )
                                                                })} */}
                                                                    <option id='status-option'>{order.status == 1 ? 'Pending' : order.status == 2 ? 'On Going' : 'Done' }</option>
                                                                    <option id='status-option'>On Going</option>
                                                                    <option id='status-option'>Done</option>
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