import React from 'react';
import { FiFacebook } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { IoLogoLinkedin } from 'react-icons/io';



const TopBar = () => {
  return (
    <header className="text-gray-600 body-font bg-gray-900">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-gray">
          <p className="flex title-font font-medium items-center text-gray-400 mb-4 md:mb-0"><small>7 Temasek Boulevard, #12-07 Noval Tower 1 Bangladesh 038987</small></p>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center text-white">
          <a className="mr-5 hover:text-gray-300 transform hover:scale-150 transition delay-200"><FiFacebook/></a>
          <a className="mr-5 hover:text-gray-300 transform hover:scale-150 transition delay-200"><FiTwitter/></a>
          <a className="mr-5 hover:text-gray-300 transform hover:scale-150 transition delay-200"><FiMail/></a>
          <a className="mr-5 hover:text-gray-300 transform hover:scale-150 transition delay-200"><IoLogoLinkedin/></a>
        </nav>
        
      </div>
    </header>
  )
}

export default TopBar;
