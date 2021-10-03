import React, { Fragment } from 'react';
import Footer from '../components/footer/Footer';
import Navbar from '../components/header/sub-component/nav-bar/Navbar';
import TopBar from '../components/header/sub-component/top-bar/TopBar';
import ServicesDetail from '../components/service/ServicesDetail';

const ServiceDetails = () => {
    return (
        <Fragment>
            <TopBar/>
            <Navbar/>
            <ServicesDetail/>
            <Footer/>
        </Fragment>
    );
};

export default ServiceDetails;
