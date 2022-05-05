import React from 'react';
import ManageServicesBody from '../ManageServicesBody/ManageServicesBody';
import LeftSidebar from '../AdminLeftSidebar/AdminLeftSidebar';
import './ManageServices.css';
import AdminLeftSidebar from '../AdminLeftSidebar/AdminLeftSidebar';


const ManageServices = () => {
    return (
        <div className="manage-services">
                <div className="row">
                    <div className="col-3">
                        <AdminLeftSidebar />
                    </div>
                    <div className="col-9">
                        <ManageServicesBody />
                    </div>
                </div>
            </div>
    );
};

export default ManageServices;