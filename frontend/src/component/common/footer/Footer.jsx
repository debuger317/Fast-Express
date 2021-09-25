import React from 'react';
import { GoMail } from "react-icons/go";
import { MdLocationOn } from "react-icons/md";
import { RiArrowDownSFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/Fast-Express.PNG';



const Footer = () => {
    return (
        <footer className="text-gray-600 body-font bg-red-50">
            <div className="container py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" href=" #">
                    <Link className="flex items-center md:justify-start justify-center" to="/">
                            <img src={Logo} alt="" srcset="" />
                        </Link>
                    </a>
                    <div className="flex text-4xl py-9 text-red-500">
                        <a href="https://facebook.com"><FaFacebookSquare /></a>
                        <a href="https://linkedin.com"><FaLinkedin /></a>
                        <a href="https://twitter.com"><FaTwitterSquare /></a>
                        <a href="https://instagram.com"><FaInstagramSquare /></a>
                    </div>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left">
                    <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-dark tracking-normal flex text-md mb-3">EMAIL ADDRESS <RiArrowDownSFill className="text-red-600" /></h2>
                        <div className="flex">
                            <GoMail className="text-red-600" /> <span className="pl-2 text-sm">Email:</span>
                        </div>
                        <p className="text-sm text-red-400 hover:text-gray-400 cursor-pointer">courier@fastexpress.com</p>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-dark tracking-normal text-md mb-3 flex">MENU <RiArrowDownSFill className="text-red-600" /></h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-400 text-sm hover:text-red-300" href=" #">Home</a>
                            </li>
                            <li>
                                <a className="text-gray-400 text-sm hover:text-red-400" href=" #">Our News and Updates</a>
                            </li>
                            <li>
                                <a className="text-gray-400 text-sm hover:text-red-400" href=" #">Contact</a>
                            </li>
                            <li>
                                <a className="text-gray-400 text-sm hover:text-red-400" href=" #">Sign Up</a>
                            </li>
                            <li>
                                <a className="text-gray-400 text-sm hover:text-red-400" href=" #">Terms And Conditions</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full pl-4 ml-auto">
                        <h2 className="title-font font-medium text-dark tracking-normal text-md mb-3 flex">ADDRESS <RiArrowDownSFill className="text-red-600" /></h2>
                        <div className="flex">
                            <MdLocationOn className="text-red-600" /> <span className="pl-2 text-sm">Location:</span>
                        </div>
                        <p className="text-sm text-gray-400">7 Temasek Boulevard, #12-07 Suntec Tower 1 Singapore 038987</p>
                    </div>
                </div>
            </div>
            <div className="text-gray-600 body-font bg-red-50 text-center py-2">
                <p className="text-gray-400 text-sm hover:text-red-400"> {new Date().getFullYear()} All copyright reserve: Debug Entity</p>
            </div>
        </footer>

    )
}

export default Footer;
