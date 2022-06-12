import React, { useEffect, useState } from 'react';
import ManageServicesBody from '../ManageServicesBody/ManageServicesBody';
import LeftSidebar from '../AdminLeftSidebar/AdminLeftSidebar';
import './ManageServices.css';
import AdminLeftSidebar from '../AdminLeftSidebar/AdminLeftSidebar';
import Footer from '../../Shared/Footer/Footer';
// import { services } from '../../../data';
import { Button } from 'bootstrap';
import { Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';


const ManageServices = () => {

    const navigate = useNavigate();

    const [services, setServices] = useState();

    const loadData = () => {
        fetch('http://localhost:3030/service-list')
            .then(response => response.json())
            .then(json => setServices(json))
    }

    useEffect(() => {
        loadData();
    }, [])


    if (!services) {
        return (
            <div className='d-flex justify-content-center align-items-center my-auto' style={{ height: '100vh' }}>
                <Spinner animation="border" style={{ width: '10em', height: '10em', color: '#90c73e' }} />
            </div>
        )
    }


    // Delete Function
    const handleDelete = (id) => {
        console.log(id);
        if (window.confirm("Are you sure that you want to delete the service?")) {

            axios.delete(`http://localhost:3030/delete-service/${id}`)
            toast.success('Service Added Successfully', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            })
            setTimeout(() => {
                // navigate('/manage-services')
                loadData();
            }, 500);

            // fetch(`http://localhost:3030/delete-service/${id}`, {
            //     method: 'DELETE'
            // })
            
            //     .then(res => res.json())
            //     .then(data => {
            //         console.log(data);
            //     })
            //     .catch(err =>
            //         toast.error(err, {
            //             position: "top-center",
            //             autoClose: 5000,
            //             hideProgressBar: false,
            //             closeOnClick: true,
            //             pauseOnHover: true,
            //             draggable: true,
            //             progress: undefined,
            //             theme: 'dark',
            //         })
            //     );
                
        }
    }


    // Update Function
    const handleUpdate = (id) => {
        fetch(`http://localhost:3030/service/${id}`)
            .then(response => response.json())
        // .then(data => console.log(data))
    }


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
                                    {/* <th scope="col" className="text-center">Price</th> */}
                                    <th scope="col" className="text-center">Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    services.map((item, index) => {
                                        // console.log(item._id);
                                        return (
                                            <tr key={index}>
                                                <th scope="row">
                                                    {index + 1}
                                                </th>
                                                <td className="text-center" id='title'>{item.name}</td>
                                                {/* <td className="text-center" id='price'>$ {item.price}</td> */}

                                                <td className='d-flex justify-content-evenly'>

                                                    <Link to={`update-service/${item._id}`}>
                                                        <button className="blue-btn edit-btn" onClick={() => handleUpdate(item._id)}>UPDATE</button>
                                                    </Link>

                                                    {/* <button clas    sName="blue-btn edit-btn" onClick={() => handleUpdate(item._id)}>UPDATE</button> */}

                                                    <button className="blue-btn delete-btn" onClick={() => handleDelete(item._id)}>DELETE</button>
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