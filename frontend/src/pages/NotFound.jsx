import React, { Fragment } from 'react';
import Footer from '../components/footer/Footer';
import Navbar from '../components/header/sub-component/nav-bar/Navbar';
import Error from '../components/not-found/NotFound';
const NotFound = () => {
    return (
        <Fragment>
            <Navbar/>
            <Error />
            <Footer/>
        </Fragment>
    )
}

export default NotFound;
