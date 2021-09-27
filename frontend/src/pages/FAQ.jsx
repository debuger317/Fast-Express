import React from 'react';
import { Fragment } from 'react';
import TopBar from '../components/header/sub-component/top-bar/TopBar';
import NavBar from '../components/header/sub-component/nav-bar/Navbar';
import FaqDetails from '../components/faq/FaqDetails';
import Footer from '../components/footer/Footer';
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