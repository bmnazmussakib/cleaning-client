import React from 'react';
import AdminLeftSidebar from '../AdminLeftSidebar/AdminLeftSidebar';
import LeftSidebar from '../AdminLeftSidebar/AdminLeftSidebar';
import MakeAdminBody from '../MakeAdminBody/MakeAdminBody';
import './MakeAdmin.css'

const MakeAdmin = () => {
    return (
        <div className="make-admin">
            <div className="row">
                <div className="col-3">
                    <AdminLeftSidebar />
                </div>
                <div className="col-9">
                    <MakeAdminBody />
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;