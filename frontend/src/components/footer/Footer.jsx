import React from 'react';
import { GoMail } from "react-icons/go";
import { MdLocationOn } from "react-icons/md";
import { RiArrowDownSFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ScrollTop from '../../helper/ScrollTop';

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font bg-red-50">
            <div className="container py-24 mx-auto flex flex-col justify-center lg:flex-row items-center ">
                <div className="flex-shrink-0 md:mx-0 mx-auto text-center">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" href=" #">
                        <Link className="flex items-center md:justify-start justify-center" to="/">
                            <img src="https://i.ibb.co/1Gp1MV3/Fast-Express.png" alt="" srcset="" />
                        </Link>
                    </a>
                    <div className="flex text-4xl py-7 text-red-500">
                        <a href="https://facebook.com"><FaFacebookSquare /></a>
                        <a className="pl-2" href="https://linkedin.com"><FaLinkedin /></a>
                        <a className="pl-2" href="https://twitter.com"><FaTwitterSquare /></a>
                        <a className="pl-2" href="https://instagram.com"><FaInstagramSquare /></a>
                    </div>
                </div>
                <div className="flex flex-wrap md:pl-20 -mb-10 md:mt-0 sm:mt-10 md:text-left">
                    <div className=" mt-12 sm:mt-0 lg:w-1/3 md:w-1/2 sm:px-4 pl-4">
                        <h2 className="title-font font-medium text-dark tracking-normal flex text-md mb-3">EMAIL ADDRESS <RiArrowDownSFill className="text-red-600" /></h2>
                        <div className="flex">
                            <GoMail className="text-red-600" /> <span className="pl-2 text-sm">Email:</span>
                        </div>
                        <a className="text-sm text-red-400 hover:text-gray-400 cursor-pointer" href="mailto: dedugentity@gmail.com">dedugentity@gmail.com</a>
                    </div>
                    <div className="mx-auto  sm:mt-0 lg:w-1/3 md:w-1/2 sm:px-4 w-full pl-4">
                        <h2 className="title-font font-medium text-dark tracking-normal text-md mb-3 flex">MENU <RiArrowDownSFill className="text-red-600" /></h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link to="/" className="text-gray-400 text-sm hover:text-red-300">Home</Link>
                            </li>
                            <li>
                                <Link to="/" className="text-gray-400 text-sm hover:text-red-400">Our News and Updates</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-400 text-sm hover:text-red-400">Contact</Link>
                            </li>
                            <li>
                                <Link to="/signup" className="text-gray-400 text-sm hover:text-red-400">Sign Up</Link>
                            </li>
                            <li>
                                <Link to="/" className="text-gray-400 text-sm hover:text-red-400">Terms And Conditions</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="mx-auto lg:w-1/3 md:w-1/2 w-full pl-4">
                        <h2 className="flex title-font font-medium text-dark tracking-normal text-md mb-3 flex">ADDRESS <RiArrowDownSFill className="text-red-600" /></h2>
                        <div className="flex ">
                            <MdLocationOn className="text-red-600" /> <span className="pl-2 text-sm">Location:</span>
                        </div>
                        <p className="text-sm text-gray-400">7 Temasek Boulevard, #12-07 Suntec Tower 1 Singapore 038987</p>
                    </div>
                </div>
            </div>
            <div className="text-gray-600 body-font bg-red-50 text-center py-2">
                <p className="text-gray-400 text-sm hover:text-red-400"> {new Date().getFullYear()} All copyright reserve: Debug Entity</p>
            </div>
            <ScrollTop/>
        </footer>

    )
}

export default Footer;
