import React from 'react';
import './ModernEquipment.css'
import { modernCardData } from '../../../data';
import ModernEquipmentCard from '../ModernEquipmentCard/ModernEquipmentCard';

const ModernEquipment = () => {
    return (
        <section className='modern-equipment'>
            <div className="container">
                <div className="row">
                    {
                        modernCardData.map((modernCardData, index) => <ModernEquipmentCard modernCardData = {modernCardData}/>)
                    }
                </div>
            </div>

        </section >
    );
};

export default ModernEquipment;