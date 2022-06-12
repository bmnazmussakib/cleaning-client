import React from 'react';
import './TestimonialSlider.css';
import { FaQuoteLeft } from 'react-icons/fa';
import { BsStarFill } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';



const TestimonialSlider = ({ sliderData }) => {
    // console.log(sliderData);

    const { message, name, designation } = sliderData;

    return (
        <div class="testimonial-card card m-2 p-4">
            <div className="testimonial-card-top">
                <div className="quote-icon-container">
                    <FaQuoteLeft className='quote-icon'/>
                </div>
                <div className="star-icon-container">
                    <BsStarFill className='star-icon'/>
                    <BsStarFill className='star-icon'/>
                    <BsStarFill className='star-icon'/>
                    <BsStarFill className='star-icon'/>
                    <BsStarHalf className='star-icon'/>
                </div>
            </div>
            <div class="testimonial-card-body card-body">
                <p class="testimonial-card-text card-text">{message}</p>
                <h5 class="testimonial-card-title card-title">{name}</h5>
                <h6 class="testimonial-card-subtitle card-subtitle mb-2 text-muted">{designation}</h6>
            </div>
        </div>
    );
};

export default TestimonialSlider;