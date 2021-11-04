import React from 'react';
import BannerAbout from '../../assets/images/aboutBanner.gif';

const AboutBanner = () => {
  return (
    <div className="text-center">
      {/* <h2 className="text-4xl py-6 font-medium ">ABOUT OUR <span className="text-red-600">COMPANY</span></h2> */}
      {/* <img src={BannerAbout} alt="Banner" /> */}
      <div className="slider-section-about">
            <div class="feature-content text-white">
                <strong className="text-3xl">Explore Your Moving Gifts</strong>
                <h1 className="text-3xl pt-6">With Fast Express</h1>
            </div>
        </div>
    </div>
  );
};

export default AboutBanner;