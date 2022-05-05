import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import notFoundImg from '../../img/404-not-found.jpg'

const NotFound = () => {
    return (
        <div className='not-found'>
            <Header />
            <div className="not-found-body">
                <img src={notFoundImg} alt="" className='img-fluid'/>
            </div>
            <Footer />
        </div>
    );
};

export default NotFound;