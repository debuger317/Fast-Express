import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { NavItem } from '../../../../utiltes/LocalDatabase';
import Logo from '../../../../assets/images/Fast-Express.PNG';
import { RiUser3Line } from 'react-icons/ri';
import {logOutAction} from '../../../../redux/action/action';

const Navbar = () => {
    const [show, setShow] = useState(false);
    const toggleText = () => {
        setShow(!show)
    };
    const dispatch = useDispatch();
    const email = useSelector((state) => state.auth.userdetails.email)
    const subitem = (NavItem.map(a => a.subitem));
    const classItem = (NavItem.map(a => a.subitem));
    return (
       <nav className="bg-white dark:bg-gray-800 shadow py-3">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="w-full justify-between flex items-center">
                        <Link className="flex-shrink-0" to="/">
                            <img className="" src={Logo} alt="" srcset="" />
                        </Link>
                        <div className="hidden lg:block">
                            <div className="ml-10 flex items-center space-x-4">

                                <div className={`display-inline ${classItem.className ? 'group ' : ''}`}>
                                    {NavItem.map(link =>
                                        <Link className={`${link.rm} text-gray-800 uppercase hover:text-gray-500 dark:hover:text-white mx-5 py-2 text-sm font-medium ${link.className ? 'relative ' : ''}`} to={link.path}>
                                            {link.name}
                                        </Link>
                                    )}
                                    <ul
                                        className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32"
                                    >
                                        {subitem[0, 2, 3].map(link => <><Link className="block text-gray-800 uppercase hover:text-gray-500 dark:hover:text-white pl-3 py-2 text-sm font-medium" to={link.path}>
                                            {link.name}
                                        </Link></>)}
                                    </ul>
                                </div>
                                <Link className="flex flex-col items-center ml-5 cursor-pointer">
                                    {
                                        email ? <button onClick={() => dispatch(logOutAction())} type="button" class="py-1 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                            <RiUser3Line className="text-2xl p-1 border rounded-full my-1 mr-1" />
                                            LogOut
                                        </button> : <Link to="/login" class="py-1 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                            <RiUser3Line className="text-2xl p-1 border rounded-full my-1 mr-1" />
                                            Login
                                        </Link>
                                    }

                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className="flex lg:hidden">
                        <button onClick={() => toggleText()} className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex rounded-md focus:outline-none">
                            <svg width="20" height="20" fill="currentColor" className="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`lg:hidden ${show ? '' : 'hidden'}`}>
                <div className="pl-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {NavItem.map(link =>
                        <Link className="block text-gray-800 uppercase hover:text-gray-500 dark:hover:text-white pl-3 py-2 text-sm font-medium" to={link.path}>
                            {link.name}
                        </Link>)}
                    <div className="flex items-center ml-2 cursor-pointer">
                        {
                            email ? <button onClick={() => dispatch(logOutAction())} type="button" class="w-36 py-1 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                <RiUser3Line className="text-2xl p-1 border rounded-full my-1 mr-1" />
                                LogOut
                            </button> : <Link to="/login" class="w-36 py-1 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                <RiUser3Line className="text-2xl p-1 border rounded-full my-1 mr-1" />
                                Login
                            </Link>
                        }

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
