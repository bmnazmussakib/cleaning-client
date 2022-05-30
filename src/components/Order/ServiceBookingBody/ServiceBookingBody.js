import React, { useState, useEffect } from 'react';
// import { services } from '../../../data';
import './ServiceBookingBody.css';
import { Spinner } from 'react-bootstrap';
import axios from 'axios';


const ServiceBookingBody = () => {

    const [services, setServices] = useState();

    const loadData = () => {
        fetch('http://localhost:3030/service-list')
            .then(response => response.json())
            .then(data => {
                setServices(data);
                // console.log(data);
            })
            .catch(err => console.error(err));
    }

    const initialState = {
        name: "",
        email: "",
        status: '1'
    }

    const [selectService, setSelectService] = useState(initialState);
    console.log(selectService);




    useEffect(() => {
        loadData()
    }, [])


    if (!services) {
        return (
            <div className='d-flex justify-content-center align-items-center my-auto' style={{ height: '100vh' }}>
                <Spinner animation="border" style={{ width: '10em', height: '10em', color: '#90c73e' }} />
            </div>
        )
    }


    // ---------Select Service---------
    const handleServiceSelect = (e) => {
        var service_id = document.getElementById('select').value;

        const service = services.find(service => service._id == service_id);
        setSelectService({ ...selectService, service })

    }


    // ---------input value---------
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setSelectService({ ...selectService, [name]: value })
    }





    const { name, email, service } = selectService;


    // ----------Submit----------
    const handleSubmit = (event) => {
        event.preventDefault();

        if (!name || !email || !service) {
            alert("Please fill the input");
        }
        else {
            console.log(selectService);

            axios.post('http://localhost:3030/book-service', {
                selectService
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });

        }


    }



    return (
        <div className='add-service py-3'>
            <div className="container">
                <h1 className='add-service-title section-subtitle text-center'>Service Booking</h1>

                {/* Form */}
                <div className="row display-flex justify-content-center">
                    <div className="col-10">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input type="text" onChange={handleOnChange} className="form-control" name='name' id="name" placeholder='Your Name' />
                            </div>
                            <div className="mb-3">
                                <input type="email" onChange={handleOnChange} className="form-control" name='email' id="email" placeholder='Your Email' />
                            </div>
                            <div className="mb-3">
                                {/* <form action=""> */}
                                <select className="form-select" name='service' id='select' onChange={() => handleServiceSelect()}>
                                    <option selected>Select a service</option>
                                    {
                                        services.map((item, index) => <option key={index} value={item._id} >{item.name}</option>)
                                    }

                                </select>
                                {/* </form> */}


                            </div>
                            <button type="submit" className="blue-btn review-submit-btn">Pay</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default ServiceBookingBody;