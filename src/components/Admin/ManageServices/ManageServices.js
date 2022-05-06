import React from 'react';
import ManageServicesBody from '../ManageServicesBody/ManageServicesBody';
import LeftSidebar from '../AdminLeftSidebar/AdminLeftSidebar';
import './ManageServices.css';
import AdminLeftSidebar from '../AdminLeftSidebar/AdminLeftSidebar';
import Footer from '../../Shared/Footer/Footer';
import { services } from '../../../data';
import { Button } from 'bootstrap';


const ManageServices = () => {
    return (
        <div className="manage-services">
            <div className="row">
                <div className="col-3">
                    <AdminLeftSidebar />
                </div>
                <div className="col-9">
                    {/* <ManageServicesBody /> */}
                    <div className="container">
                        <h1 className='add-service-title section-subtitle text-center'>Manage Services</h1>


                        <table className="table table-hover styled-table manage-service-table">
                            <thead className="" >
                                <tr className="" >
                                    <th scope="col" className="text-center" >No.</th>
                                    <th scope="col" className="text-center">Service</th>
                                    <th scope="col" className="text-center">Price</th>
                                    <th scope="col" className="text-center">Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    services.map((item, index) => {

                                        return (
                                            <tr key={index}>
                                                <th scope="row">
                                                    {index + 1}
                                                </th>
                                                <td className="text-center" id='title'>{item.serciceName}</td>
                                                <td className="text-center" id='price'>$ {item.price}</td>

                                                <td className='d-flex justify-content-evenly'>
                                                    <button className="blue-btn edit-btn">UPDATE</button>

                                                    <button className="blue-btn delete-btn">DELETE</button>
                                                    {/* <Link to={`/update/${item.id}`}>
                                                        <Button className="btn btn-edit btn-sm">UPDATE</Button>
                                                    </Link>

                                                    <Button className="btn btn-delete btn-sm" onClick={() => handleDelete(item.id)}>DELETE</Button> */}
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
            <Footer />
        </div>
    );
};

export default ManageServices;