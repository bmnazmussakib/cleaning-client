import React from 'react';
import './HowWorkData.css';

const HowWorkData = ({ howWorkData, index }) => {

    const { img, title, description } = howWorkData

    return (
        <div class="col">
            <div class="how-work-card card d-flex">
                <div className="card-img how-work-card-img">
                    <img src={img} class="card-img-top" alt="..." />
                </div>
                <div class="card-body">
                    <h5 class="how-work-card-title card-title">{title}</h5>
                    <p class="how-work-card-text card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default HowWorkData;