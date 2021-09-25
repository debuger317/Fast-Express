import React, { Fragment } from 'react';
import Footer from '../component/common/footer/Footer';
import Navbar from '../component/common/header/sub-component/nav-bar/Navbar';
import Error from '../component/pages/not-found/NotFound';
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
