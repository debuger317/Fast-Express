import React, { Fragment } from 'react';
import Footer from '../components/footer/Footer';
import Navbar from '../components/header/sub-component/nav-bar/Navbar';
import TopBar from '../components/header/sub-component/top-bar/TopBar';
import PricingContainer from '../components/pricing/PricingContainer';

const Pricing = () => {
    return (
        <Fragment>
          <TopBar/>
          <Navbar/>
          <PricingContainer/>
          <Footer/>  
        </Fragment>
    )
}

export default Pricing;
