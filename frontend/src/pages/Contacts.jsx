import React, { Fragment } from 'react';
import Footer from '../component/common/footer/Footer';
import Navbar from '../component/common/header/sub-component/nav-bar/Navbar';
import TopBar from '../component/common/header/sub-component/top-bar/TopBar';
import Contact from '../component/pages/contact/Contact';

const Contacts = () => {
    return (
        <Fragment>
            <TopBar />
            <Navbar />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Contacts;