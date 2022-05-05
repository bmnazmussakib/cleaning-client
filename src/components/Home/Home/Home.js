import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Counter from '../Counter/Counter';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import HowWork from '../HowWork/HowWork';
import ModernEquipment from '../ModernEquipment/ModernEquipment';
import OurTeam from '../OurTeam/OurTeam';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import WhyChoose from '../WhyChoose/WhyChoose';

const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <ModernEquipment />
            <Services />
            <About />
            <HowWork />
            <Counter />
            <OurTeam />
            <WhyChoose />
            <Testimonial />
            <Footer />
        </>
    );
};

export default Home;