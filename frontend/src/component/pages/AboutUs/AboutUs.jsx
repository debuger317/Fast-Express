import React from 'react';
import { Link } from 'react-router-dom';
import expressPicture from '../../../assets/images/expressPicture.jpg';
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="container mx-auto text-center">
      <p className="font-semibold pt-3 text-red-600"><Link to="/"><span className="hover:text-gray-600 cursor-pointer">HOME</span></Link> / <span className="hover:text-gray-600 cursor-pointer">ABOUT US</span></p>
      <h2 className="text-3xl pt-16">[ ABOUT OUR <span className="text-red-600">COMPANY</span> ]</h2>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-2 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="Company Logo" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={expressPicture} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest pt-12">FAST-EXPRESS</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Courier Service Provider</h1>
              <p className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam accusamus sunt voluptas odio quam eaque laboriosam exercitationem placeat commodi fugiat. Aliquid necessitatibus recusandae accusantium ut sed quos praesentium sint perspiciatis id pariatur eos exercitationem ab adipisci facilis possimus, doloremque nam aperiam quisquam impedit est ipsum!</p>
              <div className="flex justify-center text-4xl py-9 text-red-500">
                <a className="hover:text-gray-400" href="https://facebook.com"><FaFacebookSquare /></a>
                <a className="pl-2 hover:text-gray-400" href="https://linkedin.com"><FaLinkedin /></a>
                <a className="pl-2 hover:text-gray-400" href="https://twitter.com"><FaTwitterSquare /></a>
                <a className="pl-2 hover:text-gray-400" href="https://instagram.com"><FaInstagramSquare /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;