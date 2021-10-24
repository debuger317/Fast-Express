import React, { Fragment } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import OurMission from '../components/our-mission/OurMission';
import Support from '../components/support/Support';
import Review from '../components/reviews/Review';
import PromoSell from '../components/promo-sell/PromoSell';
import FeatureBrand from '../components/feature-brand/FeatureBrand';
import Blog from '../components/blog/Blog';

const Home = () => {
    return (
        <Fragment>
            <Header />
            <OurMission />
            <Support />
            <PromoSell />
            <Review />
            <FeatureBrand/>
            <Blog />
            <Footer/>
        </Fragment>
    )
}

export default Home;
