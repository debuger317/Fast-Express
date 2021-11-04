import React from 'react';
import { Link } from 'react-router-dom';
import exportPicture from '../../assets/images/expressPicture.svg';
import { FaTwitterSquare, FaInstagramSquare, FaLinkedin, FaFacebookSquare } from "react-icons/fa";

const AboutContainer = () => {
  return (
    <div className="container mx-auto text-center">
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 pb-10 mx-auto">
          <div className="lg:w-4/5 mx-auto flex justify-center items-center flex-wrap pt-4">
            <div>
              <img alt="Company Logo" className="lg:w-1/2 about-img-fix lg:h-auto h-64 object-cover pr-10 max-h-80 rounded" src={exportPicture} />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-left text-gray-900 text-3xl font-medium ">FAST-EXPRESS</h1>
              <h2 className="text-md  text-left text-gray-500 tracking-widest pt-2 mb-4">Courier Service Provider</h2>
              <p className="text-justify"> Delivering fast for a great price is only half the equation; it must also be easy for you to know what’s happening with your delivery. Our responsive staff keeps you informed every step of the way. You can see what’s happening with your shipment at all times, and can speak to our great staff any time more information is needed. We want the Couryier name to be something you feel really good about</p>
              <div className="flex items-center text-4xl py-9 text-red-500">
                <a className="hover:text-gray-400" href="https://facebook.com"><FaFacebookSquare /></a>
                <a className="pl-2 hover:text-gray-400" href="https://linkedin.com"><FaLinkedin /></a>
                <a className="pl-2 hover:text-gray-400" href="https://twitter.com"><FaTwitterSquare /></a>
                <a className="pl-2 hover:text-gray-400" href="https://instagram.com"><FaInstagramSquare /></a>
              </div>
              <div class=" rounded-lg w-90  block ">
                <h3 className="text-3xl title-font font-medium">Residential Movers</h3>
                <div class="w-full h-4 bg-gray-400 rounded-full mt-3">
                  <div class="w-3/4 h-full text-center text-xs text-white bg-yellow-500 rounded-full">
                    80%
                  </div>
                </div>
              </div>
              <div class=" rounded-lg w-90  block  ">
                <h3 className="text-3xl title-font font-medium">Quick Transportation</h3>
                <div class="w-full h-4 bg-gray-400 rounded-full mt-3">
                  <div class="w-3/4 h-full text-center text-xs text-white bg-yellow-500 rounded-full">
                    75%
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutContainer;