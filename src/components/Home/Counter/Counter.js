import React from 'react';
import './Counter.css';
// import { CountUp } from 'use-count-up';

import CountUp from 'react-countup';


const Counter = () => {


    return (
        <section className="counter">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3 ">
                        <div className="counter-card">
                            <div className="counter-card-body text-center">
                                <p className='counter-card-value'>
                                    <CountUp end={12} enableScrollSpy={true} scrollSpyDelay={1000} />K
                                </p>
                                <h4 className='counter-card-title'>Completed Project</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 ">
                        <div className="counter-card">
                            <div className="counter-card-body text-center">
                                <p className='counter-card-value'>
                                    <CountUp end={99} enableScrollSpy={true} scrollSpyDelay={1000} />%
                                </p>
                                <h4 className='counter-card-title'>Satisfaction Rate</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 ">
                        <div className="counter-card">
                            <div className="counter-card-body text-center">
                                <p className='counter-card-value'>
                                    <CountUp end={20} enableScrollSpy={true} scrollSpyDelay={1000} />+
                                </p>
                                <h4 className='counter-card-title'>Won Award</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 ">
                        <div className="counter-card">
                            <div className="counter-card-body text-center">
                                <p className='counter-card-value'>
                                    <CountUp end={500} enableScrollSpy={true} scrollSpyDelay={1000} />+
                                </p>
                                <h4 className='counter-card-title'>Cleaning Staff</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Counter;