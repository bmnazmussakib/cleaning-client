import React, { useState, useEffect, useContext } from 'react';
// import { services } from '../../../data';
import './ServiceBookingBody.css';
import { Spinner } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import StripePayment from '../../Payment/StripePayment/StripePayment';


const ServiceBookingBody = ({service_id}) => {

console.log(service_id);


    const { login } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = login;

    // console.log(loggedInUser);


    const navigate = useNavigate();


    const [services, setServices] = useState();
    // console.log(services);

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

        const service = services.find(service => service._id === service_id);
        setSelectService({ ...selectService, service })

    }


    // ---------input value---------
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setSelectService({ ...selectService, [name]: value })
    }


    const userEmail = localStorage.getItem('email')
    // console.log(userEmail);



    const { name, email, service } = selectService;
    console.log(name);
    console.log(email);
    console.log(service);


    // ----------Submit----------
    const handleSubmit = (event) => {
        event.preventDefault();

        if (!name || !email || !service) {
            toast.warning('Please fill the input', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            })
        }
        else {
            // console.log(selectService);

            axios.post('http://localhost:3030/book-service', {
                selectService
            })
            toast.success('Service has been booked successfully. 😍', {
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

                navigate('/service-booking-list');
                // loadData();

            }, 500);
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
                                <input type="email" value={loggedInUser.email} onChange={handleOnChange} className="form-control" name='email' id="email" placeholder='Your Email' />
                            </div>
                            <div className="mb-3">
                                {/* <form action=""> */}
                                <select className="form-select" name='service' id='select' onChange={() => handleServiceSelect()}>
                                    <option selected value={0}>Select a service</option>
                                    {
                                        services.map((item, index) => <option key={index} value={item._id} >{item.name}</option>)
                                    }

                                </select>
                                {/* </form> */}


                            </div>
                            <div className="mb-3 ">
                                    {
                                        service ? <h4 className='price'>Price: ${service.price}</h4> : <h4 className='price'>Price: $0</h4>
                                    }
                            </div>

                            <StripePayment />

                            <button type="submit" className="blue-btn review-submit-btn">Pay</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default ServiceBookingBody;