import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { VscBell, VscMail, VscSmiley } from 'react-icons/vsc';
import { BiSearch } from 'react-icons/bi';
import { logOutAction } from '../../../redux/action/action';
import Logo from '../../../assets/images/Fast-Express.PNG';

const TopBar = () => {
    const dispatch = useDispatch();
    const [show, setShow] = useState({
        show1: false,
        show2: false,
        show3: false,
    })
    const toggleText = () => {
        if (show.show1 || show.show2 || show.show3) {
            setShow({ ...show, show1: false, show2: false, show3: false })
        }
    }

    return (
        <nav onClick={() => toggleText()} class="bg-white border-b border-gray-200">
            <div class="max-w-7xl mx-auto">
                <div class="flex items-center justify-between h-16">
                    <Link to='/dashboard'>
                        <img class="pr-10" src={Logo} alt="" srcset="" />
                    </Link>
                    <div class=" flex items-center">
                        <div class="flex relative ">
                            {/* <input type="text" id="email-with-icon" class=" rounded-l-lg flex-1 appearance-none border border-gray-300 w-80 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:border-gray-400 focus:border-r-0" name="email" placeholder="What are you looking for.." /> */}
                            <span class="inline-flex  items-center px-3 bg-white text-gray-500  cursor-pointer">
                                <BiSearch className="text-xl" />
                            </span>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="flex items-center md:ml-6">
                            <div class="relative">
                                <div class="relative inline-block">
                                    <div onClick={() => setShow({ ...show, show1: !show.show1 })} class="cursor-pointer">
                                        <span><VscBell className="text-xl ml-5 text-gray-500" /></span>
                                    </div>
                                    <div class={`${show.show1 ? 'block' : 'hidden'} z-10 origin-top-right absolute right-10 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5`}>

                                        <div class="shadow-lg rounded-xl w-full md:w-80 p-4 bg-white dark:bg-gray-800 relative overflow-hidden">
                                            <div class="w-full flex items-center justify-between mb-8">
                                                <p class="text-gray-800 dark:text-white text-xl font-normal">
                                                    Activity
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="ml-4 flex items-center">
                                <div class="relative">
                                    <div class="relative inline-block">
                                        <div onClick={() => setShow({ ...show, show2: !show.show2 })} class="cursor-pointer">
                                            <span><VscMail className="text-xl ml-5 text-gray-500" /></span>
                                        </div>
                                        <div class={`${show.show2 ? 'block' : 'hidden'} z-10    origin-top-right absolute right-10 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5`}>

                                            <div class="shadow-lg rounded-2xl w-64 p-4 bg-white flex justify-between items-center">
                                                <div class="w-2/6">
                                                    <img src="/images/person/2.jpeg" alt="person" class="h-12 w-12 rounded-full" />
                                                </div>
                                                <div class="w-3/6">
                                                    <p class="text-gray-500 text-sm">
                                                        You have
                                                        <span class="text-indigo-500 font-bold">
                                                            2
                                                        </span>
                                                        new messages
                                                    </p>
                                                </div>
                                                <div class="w-1/6 text-right">
                                                    message
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="ml-4 flex items-center">
                                <div class="relative">
                                    <div class="relative inline-block">
                                        <div onClick={() => setShow({ ...show, show3: !show.show3 })} class="cursor-pointer">
                                            <VscSmiley class="text-xl bg-dark-500 ml-5 text-gray-500" />
                                        </div>
                                        <div class={`${show.show3 ? 'block' : 'hidden'} z-10    origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5`}>
                                            <div class="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                                <Link to="/" class="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                                                    <span class="flex flex-col">
                                                        <span>
                                                            Settings
                                                        </span>
                                                    </span>
                                                </Link>
                                                <Link to="/dashboard/my-account" class="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                                                    <span class="flex flex-col">
                                                        <span>
                                                            Account
                                                        </span>
                                                    </span>
                                                </Link>
                                                <div onClick={() => dispatch(logOutAction())} class="block block cursor-pointer px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                                                    <span class="flex flex-col">
                                                        <span>
                                                            Logout
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="-mr-2 flex md:hidden">
                            <button class="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                                <svg width="20" height="20" fill="currentColor" class="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="md:hidden">
                    <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                            Home
                        </a>
                        <a class="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                            Gallery
                        </a>
                        <a class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                            Content
                        </a>
                        <a class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default TopBar;
