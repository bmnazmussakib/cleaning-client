import React from 'react';
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
            </div>
    );
};

export default AddService;