import React from 'react';
import './AddServiceBody.css';

const AddServiceBody = () => {
    return (
        <div className='add-service py-3'>
            <div className="container">
                <h1 className='add-service-title section-subtitle text-center'>Add Service</h1>


                {/* Form */}
                <div className="row display-flex justify-content-center">
                    <div className="col-10">
                        <form>
                            <div className="row mb-3">
                                <div className="col">
                                    <input type="text" className="form-control service-name" placeholder="Service Name" id='service-name' name='service-name' />
                                </div>
                                <div className="col">
                                    <input type="file" className="form-control service-img" id='service-img' name='service-img' />
                                </div>
                            </div>
                            <div className="mb-3">
                                <textarea class="form-control service-description" id="service-description" rows="6" placeholder="Description" name='service-description'></textarea>
                            </div>
                            <button type="submit" className="blue-btn review-submit-btn">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddServiceBody;