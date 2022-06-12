import React, { useEffect, useState } from 'react';
import './Testimonial.css';
import Slider from "react-slick";
import sliderImg1 from '../../../img/logo.png'
import TestimonialSlider from '../TestimonialSlider/TestimonialSlider';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';



const Testimonial = () => {

  const [testimonial, setTestimonial] = useState()
  // console.log(testimonial);

  useEffect(() => {

    axios.get('http://localhost:3030/review')
      .then(function (response) {
        setTestimonial(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })

  }, [])


  if (!testimonial) {
    return (
      <div className='d-flex justify-content-center align-items-center my-auto' style={{ height: '100vh' }}>
        <Spinner animation="border" style={{ width: '10em', height: '10em', color: '#90c73e' }} />
      </div>
    )
  }


  // Slider Settings
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="testimonial">
      <div className="container">

        <h4 className="testimonial-title section-title text-center">our testimonial</h4>
        <h2 className="testimonial-subtitle section-subtitle text-center">Our Client's Feedback About Us And Our Services</h2>

        <Slider {...settings}>
          {
            testimonial.map((sliderData, index) => <TestimonialSlider sliderData={sliderData} />)
          }
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;