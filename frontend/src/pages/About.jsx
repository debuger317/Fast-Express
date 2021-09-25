import React, { Fragment } from 'react';
import AboutBanner from '../component/AboutBanner/AboutBanner';
import AboutUs from '../component/AboutUs/AboutUs';
import Navbar from '../component/header/sub-component/nav-bar/Navbar';
import TopBar from '../component/header/sub-component/top-bar/TopBar';
import Footer from '../component/footer/Footer';

const About = () => {
  return (
    <Fragment>
      <TopBar/>
      <Navbar/>
      <AboutBanner/>
      <AboutUs/>
      <Footer/>
    </Fragment>
  );
};

export default About;