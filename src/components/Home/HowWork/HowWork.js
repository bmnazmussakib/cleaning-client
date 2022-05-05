import React from 'react';
import './HowWork.css';
import { howWorkData } from '../../../data';
import HowWorkData from '../HowWorkData/HowWorkData';

const HowWork = () => {
    return (
        <section className="how-work">
            <div className="container">
                <h4 className="section-title how-work-title text-center">How we work</h4>
                <h2 className="section-subtitle how-work-subtitle text-center">We Follow Three Step To Provide Our Services</h2>

                <div className="how-work-container">
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        {
                            howWorkData.map((howWorkData, index) => <HowWorkData howWorkData={howWorkData} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWork;