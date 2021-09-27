import React, { Fragment } from 'react';
import TopBar from './sub-component/top-bar/TopBar'
import Navbar from './sub-component/nav-bar/Navbar';
import Banner from '../Banner/Banner';

const Header = () => {
    return (
        <Fragment>
            <TopBar />
            <Navbar />
            <Banner />
        </Fragment>
    )
}

export default Header;
