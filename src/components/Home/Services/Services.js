import React, { useEffect, useState } from 'react';
import './Services.css';

import houseCleaning from '../../../img/house-cleaning (1).png';
import kitchenCleaning from '../../../img/kitchen.png';
import carpetCleaning from '../../../img/carpet.png';
import windowCleaning from '../../../img/window-cleaning.png';
import floorCleaning from '../../../img/mop.png';
import bathroomCleaning from '../../../img/sanitary.png';
import AllServices from '../AllServices/AllServices';
import { Spinner } from 'react-bootstrap';
// import { services } from '../../../services';





const Services = () => {


    const [services, setServices] = useState();
    // console.log(services);

    // useEffect(() => {
    //     fetch('https://eco-clean-api.herokuapp.com/service-list')
    //         .then(response => response.json())
    //         .then(json => setServices(json))
    // }, [])

    useEffect(() => {
        fetch('https://eco-clean-api.herokuapp.com/service-list')
            .then(response => response.json())
            .then(json => setServices(json))
    }, [])


    if (!services) {
        return(
            <div className='d-flex justify-content-center align-items-center my-auto' style={{height: '100vh' }}>
                <Spinner animation="border" style={{width: '10em', height: '10em', color: '#90c73e'}} />
            </div>
        )
    }


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