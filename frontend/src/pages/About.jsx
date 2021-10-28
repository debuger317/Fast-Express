import React, { Fragment } from 'react';
import AboutBanner from '../components/about/AboutBanner';
import Footer from '../components/footer/Footer';
import Navbar from '../components/header/sub-component/nav-bar/Navbar';
import TopBar from '../components/header/sub-component/top-bar/TopBar';
import AboutContainer from '../components/about/AboutContainer';
import ClientCounter from '../components/about/ClientCounter';
import OurDevelopers from '../components/about/OurDevelopers';

const About = () => {
  document.title = "local courier service | about";
  return (
    <Fragment>
      <TopBar/>
      <Navbar/>
      <AboutBanner/>
      <AboutContainer/>
      <ClientCounter/>
      <OurDevelopers/>
      <Footer/>
    </Fragment>
  );
};

export default About;
