import React from 'react';
import './Services.css';

import houseCleaning from '../../../img/house-cleaning (1).png';
import kitchenCleaning from '../../../img/kitchen.png';
import carpetCleaning from '../../../img/carpet.png';
import windowCleaning from '../../../img/window-cleaning.png';
import floorCleaning from '../../../img/mop.png';
import bathroomCleaning from '../../../img/sanitary.png';
import AllServices from '../AllServices/AllServices';


const services = [
    {
        img: houseCleaning,
        serciceName: 'House Cleaning',
        serviceDecription: 'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris amet orci. Aenean dignissim pellentesque.'

    },
    {
        img: kitchenCleaning,
        serciceName: 'Kitchen Cleaning',
        serviceDecription: 'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris amet orci. Aenean dignissim pellentesque.'

    },
    {
        img: carpetCleaning,
        serciceName: 'Carpet Cleaning',
        serviceDecription: 'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris amet orci. Aenean dignissim pellentesque.'

    },
    {
        img: windowCleaning,
        serciceName: 'Window Cleaning',
        serviceDecription: 'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris amet orci. Aenean dignissim pellentesque.'

    },
    {
        img: floorCleaning,
        serciceName: 'Floor Cleaning',
        serviceDecription: 'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris amet orci. Aenean dignissim pellentesque.'

    },
    {
        img: bathroomCleaning,
        serciceName: 'Bathroom Cleaning',
        serviceDecription: 'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris amet orci. Aenean dignissim pellentesque.'

    }
]




const Services = () => {
    return (
        <section className='service' id='service'>
            <div className="container">
                <h4 className='section-title service-title text-center'>OUR SERVICES</h4>
                <h2 className='section-subtitle service-subtitle text-center'>We Are Offering The Best Cleaning Services For You</h2>


                <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4">
                    {
                        services.map((services, index) => <AllServices services={services} id={index}/>)
                    }
                </div>


            </div>
        </section>
    );
};

export default Services;