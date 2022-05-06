import React from 'react';
import './About.css';
import aboutImg1 from '../../../img/about-1.jpg'
import aboutImg2 from '../../../img/about-2.jpg'


const About = () => {
    return (
        <section className="about" id='about'>
            <div className="row">
                <div className="col-lg-6  order-md-2 order-lg-1">
                    <div className="about-img-container ">
                        <div className="about-img-1">
                            <img src={aboutImg1} alt="" className="img-fluid  about-img-1" />
                        </div>

                        <div className="about-img-2">
                            <img src={aboutImg2} alt="" className="img-fluid  about-img-2" />
                        </div>
                        
                    </div>
                </div>
                <div className="col-lg-6  order-md-1 order-lg-2">
                    <div className="about-content">
                        <h4 className='section-title'>About us</h4>
                        <h2 className='section-subtitle'>We Are A Highly Experienced Cleaning Service Company</h2>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
                        <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
                        <ul>
                            <li>100% Satisfaction Guaranteed</li>
                            <li>Expert &amp; Experienced cleaning staff</li>
                            <li>Free lifetime support</li>
                        </ul>
                        <a href="#" className='blue-btn about-btn'>Read More</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;