import React from 'react';
import { FiFacebook } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { IoLogoLinkedin } from 'react-icons/io';



const TopBar = () => {
  return (
    <header className="text-gray-600 body-font bg-gray-700">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-gray">
          <p className="flex title-font font-medium items-center text-gray-4`00 mb-4 md:mb-0"><small>7 Temasek Boulevard, #12-07 Noval Tower 1 Bangladesh 038987</small></p>
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24"> */}
            {/* <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path> */}
          {/* </svg> */}
          {/* <span className="ml-3 text-xl">Tailblocks</span> */}
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center text-white">
          <a className="mr-5 hover:text-gray-900"><FiFacebook/></a>
          <a className="mr-5 hover:text-gray-900"><FiTwitter/></a>
          <a className="mr-5 hover:text-gray-900"><FiMail/></a>
          <a className="mr-5 hover:text-gray-900"><IoLogoLinkedin/></a>
        </nav>
        
      </div>
    </header>
  )
}

export default TopBar;
