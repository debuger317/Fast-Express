import React, { Fragment } from 'react'
import Footer from '../component/common/footer/Footer'
import Navbar from '../component/common/header/sub-component/nav-bar/Navbar'
import TopBar from '../component/common/header/sub-component/top-bar/TopBar'
import AboutBanner from '../component/pages/AboutBanner/AboutBanner'
import AboutUs from '../component/pages/AboutUs/AboutUs'

const About = () => {
    return (
        <Fragment>
          <TopBar/>
          <Navbar/>
          <AboutBanner/>
          <AboutUs/>
          <Footer/>
        </Fragment>
    )
}

export default About
