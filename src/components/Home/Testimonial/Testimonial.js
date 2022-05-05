import React from 'react';
import './Testimonial.css';
import Slider from "react-slick";
import sliderImg1 from '../../../img/logo.png'
import TestimonialSlider from '../TestimonialSlider/TestimonialSlider';



const Testimonial = () => {

    const sliderData = [
        {
            message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.',
            name: 'John Doe',
            designation: 'Web Developer'
        },
        {
            message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.',
            name: 'Jack Morkel',
            designation: 'App Developer'
        },
        {
            message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.',
            name: 'Kane William',
            designation: 'Digital Marketer'
        },
        {
            message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.',
            name: 'Adam Smith',
            designation: 'Graphics Designer'
        },
        {
            message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.',
            name: 'Andy Flower',
            designation: 'Cricketer'
        },
    ]

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
                        sliderData.map((sliderData, index) => <TestimonialSlider sliderData={sliderData}/>)
                    }
                </Slider>
            </div>
        </section>
    );
};

export default Testimonial;