import React from 'react';
import BannerAbout from '../../assets/images/aboutBanner.svg'

const AboutBanner = () => {
  return (
    <div className="pt-5">
      <img className="mx-auto" src={BannerAbout} alt="Banner" />
    </div>
  );
};

export default AboutBanner;