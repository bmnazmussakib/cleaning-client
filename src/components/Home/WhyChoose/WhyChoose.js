import React from 'react';
import './WhyChoose.css';
import whyChooseImg from '../../../img/why-choose-us.jpg'

import whyChooseCardImg1 from '../../../img/why-choose-1.png';
import whyChooseCardImg2 from '../../../img/why-choose-2.png';
import whyChooseCardImg3 from '../../../img/why-choose-3.png';
import whyChooseCardImg4 from '../../../img/why-choose-4.png';



const WhyChoose = () => {
    return (
        <section className="why-choose">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-4">
                        <div className="why-choose-img">
                            <img src={whyChooseImg} alt="" className='img-fluid' />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="why-choose-content">
                            <h4 className="section-title">Why choose us</h4>
                            <h2 className="section-subtitle">We Are Highly Experienced Cleaning Service Provider</h2>

                            <div class="why-choose-card-container row row-cols-1 row-cols-md-2 g-4">
                                <div class="col">
                                    <div class="why-choose-card card mb-3">
                                        <div class="row g-0">
                                            <div class="col-md-4">
                                                <div className="why-choose-card-img">
                                                    <img src={whyChooseCardImg1} class="img-fluid rounded-start" alt="..." />
                                                </div>
                                            </div>
                                            <div class="col-md-8">
                                                <div class="why-choose-card-body card-body">
                                                    <h5 class="why-choose-card-title card-title">High Quality Cleaning Services</h5>
                                                    <p class="why-choose-card-text card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="why-choose-card card mb-3">
                                        <div class="row g-0">
                                            <div class="col-md-4">
                                                <div className="why-choose-card-img">
                                                    <img src={whyChooseCardImg2} class="img-fluid rounded-start" alt="..." />
                                                </div>
                                            </div>
                                            <div class="col-md-8">
                                                <div class="why-choose-card-body card-body">
                                                    <h5 class="why-choose-card-title card-title">High Quality Cleaning Services</h5>
                                                    <p class="why-choose-card-text card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="why-choose-card card mb-3">
                                        <div class="row g-0">
                                            <div class="col-md-4">
                                                <div className="why-choose-card-img">
                                                    <img src={whyChooseCardImg3} class="img-fluid rounded-start" alt="..." />
                                                </div>
                                            </div>
                                            <div class="col-md-8">
                                                <div class="why-choose-card-body card-body">
                                                    <h5 class="why-choose-card-title card-title">High Quality Cleaning Services</h5>
                                                    <p class="why-choose-card-text card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="why-choose-card card mb-3">
                                        <div class="row g-0">
                                            <div class="col-md-4">
                                                <div className="why-choose-card-img">
                                                    <img src={whyChooseCardImg4} class="img-fluid rounded-start" alt="..." />
                                                </div>
                                            </div>
                                            <div class="col-md-8">
                                                <div class="why-choose-card-body card-body">
                                                    <h5 class="why-choose-card-title card-title">High Quality Cleaning Services</h5>
                                                    <p class="why-choose-card-text card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;