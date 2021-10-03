import React, { Fragment } from 'react';
import Footer from '../components/footer/Footer';
import Navbar from '../components/header/sub-component/nav-bar/Navbar';
import TopBar from '../components/header/sub-component/top-bar/TopBar';
import SingleCourierDetail from '../components/service/sub-components/SingleCourierDetail';
const SingleCourier = () => {
    return (
        <Fragment>
            <TopBar/>
            <Navbar/>
            {/* signle courier content details is here */}
            <SingleCourierDetail/>
            <Footer/>
        </Fragment>
    );
};

export default SingleCourier;