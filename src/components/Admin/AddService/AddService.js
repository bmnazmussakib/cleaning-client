import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AddServiceBody from '../AddServiceBody/AddServiceBody';
import AdminLeftSidebar from '../AdminLeftSidebar/AdminLeftSidebar';
import './AddService.css';


const AddService = () => {
    return (
        <div className="add-service">
            <div className="row">
                <div className="col-3">
                    <AdminLeftSidebar />
                </div>
                <div className="col-9">
                    <AddServiceBody />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AddService;