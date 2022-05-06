import React from 'react';
import { services } from '../../../data';
import './ServiceBookingBody.css';

const ServiceBookingBody = () => {
    return (
        <div className='add-service py-3'>
            <div className="container">
                <h1 className='add-service-title section-subtitle text-center'>Service Booking</h1>

                {/* Form */}
                <div className="row display-flex justify-content-center">
                    <div className="col-10">
                        <form>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="name" placeholder='Your Name' />
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" id="email" placeholder='Your Email' />
                            </div>
                            <div className="mb-3">
                                <select class="form-select" aria-label="Default select example">
                                <option selected>Select Service</option>

                                    {
                                        services.map((item, index) => <option value={item.id}>{item.serciceName}</option>)
                                    }
                                    
                                </select>
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