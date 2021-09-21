import React from 'react';
import { Link } from "react-router-dom";
import { NavItem } from '../../../../utiltes/LocalDatabase';

const Navbar = () => {
    return (
        <nav className="bg-white dark:bg-gray-800 shadow">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="w-full justify-between flex items-center">
                        <Link className="flex-shrink-0" to="/">
                            <h2 className="text-xl font-bold">Fast Express</h2>
                        </Link>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-center space-x-4">
                                {NavItem.map(link =>
                                    <Link className="text-gray-800 uppercase hover:text-gray-500 dark:hover:text-white pl-3 py-2 text-sm font-medium" to={link.path}>
                                        {link.name}
                                    </Link>)}
                            </div>
                        </div>
                    </div>
                    <div className="block">
                        <div className="ml-4 flex items-center md:ml-6">
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                            <svg width="20" height="20" fill="currentColor" className="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="md:hidden">
                <div className="pl-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {NavItem.map(link =>
                        <Link className="text-gray-800 uppercase hover:text-gray-500 dark:hover:text-white pl-3 py-2 text-sm font-medium" to={link.path}>
                            {link.name}
                        </Link>)}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
