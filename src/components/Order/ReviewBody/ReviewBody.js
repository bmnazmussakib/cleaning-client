import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './ReviewBody.css';

const ReviewBody = () => {



    const navigate = useNavigate();

    const initialState = {
        name: "",
        designation: "",
        message: ""
    }

    const [review, setReview] = useState(initialState);


    // Input value
    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setReview({...review, [name]: value});
    }


    const {name, designation, message} = review;
    // Submit
    const handleOnSubmit = (e) => {
        e.preventDefault();

        if(!name || !designation || !message){
            alert('Input field is empty');
        }else{
            axios.post('https://eco-clean-api.herokuapp.com/add-review',{
                review
            })
            toast.success('Thank you for your review !', {
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
                navigate('/')
                // loadData();
            }, 500);
            // .then(res => res.json())
            // .catch(error => {
            //     console.log(error);
            // })
        }
    }

    return (
        <div className='review-body py-3'>
            <div className="container">
                <h1 className='review-title section-subtitle text-center'>Review</h1>

                {/* Form */}
                <div className="row display-flex justify-content-center">
                    <div className="col-10">
                        <form onSubmit={handleOnSubmit}>
                            <div className="mb-3">
                                <input type="text" name="name" className="form-control" id="name" placeholder='Your Name' onChange={handleOnChange}/>
                            </div>
                            <div className="mb-3">
                                <input type="text" name="designation" className="form-control" id="designation" placeholder='Your Designation' onChange={handleOnChange}/>
                            </div>
                            <div className="mb-3">
                                <textarea type="text" name="message" className="form-control" id="message" placeholder='Your Message' onChange={handleOnChange}/>
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