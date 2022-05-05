import React from 'react';
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
                        <OrderListBody />
                    </div>
                </div>
            </div>


            <Footer />
        </>
    );
};

export default OrderList;