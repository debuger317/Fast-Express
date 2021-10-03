import React, { Fragment } from 'react';
import Signup from '../components/authication/Signup';
import TopBar from '../components/header/sub-component/top-bar/TopBar';
import Footer from '../components/footer/Footer';
import Navbar from '../components/header/sub-component/nav-bar/Navbar';

const SignUp = () => {
    return (
        <Fragment>
            <TopBar/>
            <Navbar/>
            <Signup/>
            <Footer/>
        </Fragment>
    );
};

export default SignUp;