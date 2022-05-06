import React from 'react';
import './ReviewBody.css';

const ReviewBody = () => {
    return (
        <div className='review-body py-3'>
            <div className="container">
                <h1 className='review-title section-subtitle text-center'>Review</h1>

                {/* Form */}
                <div className="row display-flex justify-content-center">
                    <div className="col-10">
                        <form>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="name" placeholder='Your Name' />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="designation" placeholder='Your Designation' />
                            </div>
                            <div className="mb-3">
                                <textarea type="text" className="form-control" id="exampleInputEmail1" placeholder='Your Message' />
                            </div>
                            <button type="submit" className="blue-btn review-submit-btn">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewBody;