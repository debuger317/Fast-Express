import React, { Fragment } from 'react';
import Footer from '../component/common/footer/Footer';
import Navbar from '../component/common/header/sub-component/nav-bar/Navbar';
import TopBar from '../component/common/header/sub-component/top-bar/TopBar';
import PricingContainer from '../component/pages/pricing/PricingContainer';

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
