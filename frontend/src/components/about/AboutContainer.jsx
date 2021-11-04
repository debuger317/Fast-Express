import React from 'react';
import { Link } from 'react-router-dom';
import exportPicture from '../../assets/images/expressPicture.svg';
import { FaTwitterSquare, FaInstagramSquare, FaLinkedin, FaFacebookSquare } from "react-icons/fa";

const AboutContainer = () => {
  return (
    <div className="container mx-auto text-center">
      <p className="font-semibold pt-3 text-red-600"><Link to="/"><span className="hover:text-gray-600 cursor-pointer">HOME</span></Link> / <span className="hover:text-gray-600 cursor-pointer">ABOUT US</span></p>
      <h2 className="text-4xl pt-16 font-medium ">[ ABOUT OUR <span className="text-red-600">COMPANY</span> ]</h2>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-2 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap pt-8">
            <img alt="Company Logo" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center max-h-80 rounded" src={exportPicture} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest pt-12">FAST-EXPRESS</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Courier Service Provider</h1>
              <p className="leading-relaxed"> Delivering fast for a great price is only half the equation; it must also be easy for you to know what’s happening with your delivery. Our responsive staff keeps you informed every step of the way. You can see what’s happening with your shipment at all times, and can speak to our great staff any time more information is needed. We want the Couryier name to be something you feel really good about</p>
              <div className="flex justify-center text-4xl py-9 text-red-500">
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