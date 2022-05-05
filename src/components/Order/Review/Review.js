import React from 'react';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import ReviewBody from '../ReviewBody/ReviewBody';

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
            </div>
    );
};

export default Review;