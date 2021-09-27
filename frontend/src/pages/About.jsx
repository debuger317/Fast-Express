import React, { Fragment } from 'react';
import AboutBanner from '../component/pages/about/AboutBanner';
import Footer from '../component/common/footer/Footer';
import Navbar from '../component/common/header/sub-component/nav-bar/Navbar';
import TopBar from '../component/common/header/sub-component/top-bar/TopBar';
import AboutContainer from '../component/pages/about/AboutContainer';
import ClientCounter from '../component/pages/about/ClientCounter';

const About = () => {
  return (
    <Fragment>
      <TopBar/>
      <Navbar/>
      <AboutBanner/>
      <AboutContainer/>
      <ClientCounter/>
      <Footer/>
    </Fragment>
  );
};

export default About;
