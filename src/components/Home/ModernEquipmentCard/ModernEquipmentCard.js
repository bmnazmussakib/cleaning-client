import React from 'react';
import './ModernEquipmentCard.css';



const ModernEquipmentCard = ({modernCardData}) => {
    
    const {img, title, description} = modernCardData;

    return (
        <div className="col-lg-4 ">
            <div className="modern-card d-flex justify-content-between">
                <div className="modern-card-img me-4"><img src={img} alt="" className='img-fluid' /></div>
                <div className="modern-card-body">
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ModernEquipmentCard;