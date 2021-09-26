import React from 'react';
import { Fragment } from 'react';
import Footer from '../component/common/footer/Footer';
import Navbar from '../component/common/header/sub-component/nav-bar/Navbar';
import TopBar from '../component/common/header/sub-component/top-bar/TopBar';
import PricingPage1 from '../component/pages/pricing/PricingPage1';

const Pricing = () => {
    return (
        <Fragment>
            <TopBar />
            <Navbar />
            <PricingPage1/>
            <Footer/>
        </Fragment>
    )
}

export default Pricing;
