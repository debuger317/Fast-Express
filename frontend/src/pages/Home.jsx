import React, { Fragment } from 'react';
import Header from '../component/common/header/Header';
import Footer from '../component/common/footer/Footer';
import OurMission from '../component/common/our-mission/OurMission';
import Support from '../component/common/support/Support';
import Review from '../component/common/reviews/Review';
import FAQ from '../component/common/faq/FAQ';
import PromoSell from '../component/common/promo-sell/PromoSell';
import FeatureBrand from '../component/common/feature-brand/FeatureBrand';


const Home = () => {
    return (
        <Fragment>
            <Header />
            <OurMission />
            <Support />
            <FAQ />
            <PromoSell />
            <Review />
            <FeatureBrand/>
            <Footer/>
        </Fragment>
    )
}

export default Home;
