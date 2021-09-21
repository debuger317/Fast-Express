import React, { Fragment } from 'react';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';
import OurMission from '../component/our-mission/OurMission';
import Support from '../component/support/Support';
import Review from '../component/reviews/Review';
import FAQ from '../component/faq/FAQ';
import PromoSell from '../component/promo-sell/PromoSell';
import FeatureBrand from '../component/feature-brand/FeatureBrand';

const Home = () => {
    return (
        <Fragment>
            <Header />
            <OurMission />
            <Support />
            <FAQ/>
            <PromoSell/>
            <Review />
            <FeatureBrand/>
            <Footer/>
        </Fragment>
    )
}

export default Home;
