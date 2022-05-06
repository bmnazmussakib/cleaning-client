import React from 'react';
import './Review.css';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import ReviewBody from '../ReviewBody/ReviewBody';
import Footer from '../../Shared/Footer/Footer';

const Review = () => {
    return (
        <div className="review">
            <div className="row">
                <div className="col-3">
                    <LeftSidebar />
                </div>
                <div className="col-9">
                    <ReviewBody />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Review;