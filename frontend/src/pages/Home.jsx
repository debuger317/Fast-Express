import React, { Fragment } from 'react';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';
import OurMission from '../component/our-mission/OurMission';
import Support from '../component/support/Support';
import Review from '../component/reviews/Review';

const Home = () => {
    return (
        <Fragment>
            <Header />
            <OurMission />
            <Support />
            <Review />
            <Footer/>
        </Fragment>
    )
}

export default Home;
