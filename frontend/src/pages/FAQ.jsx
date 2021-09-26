import React from 'react';
import { Fragment } from 'react';
import TopBar from '../component/common/header/sub-component/top-bar/TopBar';
import NavBar from '../component/common/header/sub-component/nav-bar/Navbar';
import FaqDetails from '../component/pages/faq/FaqDetails';
import Footer from '../component/common/footer/Footer';
const FAQ = () => {
    return (
        <Fragment>
            <TopBar/>
            <NavBar/>
            <FaqDetails />
            <Footer/>
        </Fragment>
    );
};

export default FAQ;