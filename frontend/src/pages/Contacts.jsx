import React, { Fragment } from 'react';
import Footer from '../components/footer/Footer';
import Navbar from '../components/header/sub-component/nav-bar/Navbar';
import TopBar from '../components/header/sub-component/top-bar/TopBar';
import Contact from '../components/contact/Contact';
import PageTitle from '../components/page-title/PageTitle';

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