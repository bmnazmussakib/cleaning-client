import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './Banner.css';
import bannerImg1 from '../../../img/banner-bg.png';

const Banner = () => {
    return (
        <section className='banner'>
            <div className="banner-overlay"></div>

            <Container>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="banner-content">
                            <p>NEED PROFESSIONAL CLEANING SERVICE?</p>
                            <h1>We Are The Best Cleaning Service Company</h1>
                            <p className='mb-5'>We Are Providing Best Cleaning Services About Twenty Years. Our All Cleaning Staffs Are Expert And High Experienced. </p>
                            <a href="#" className='white-btn me-3'>About us</a> <a href="" className='blue-btn'>Our Services</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        {/* <div className="banner-img"><img src={bannerImg1} alt="" className='img-fluid' /></div> */}
                    </div>
                </div>
            </Container>



        </section>
    );
};

export default Banner;