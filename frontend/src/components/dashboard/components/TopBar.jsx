import React, { useState } from 'react';
import { RiUser3Line, RiNotification3Line, RiMessageLine, RiSearch2Line } from 'react-icons/ri';

import { Link } from 'react-router-dom';
const TopBar = () => {

    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const toggleText = () => {
        setShow(!show)
    }
    const toggleText1 = () => {
        setShow1(!show1)
    }
    const toggleText2 = () => {
        setShow2(!show2)
    }
    const onChange = () => {
        setShow2(!show2)
    }
    return (
        <nav class="bg-white dark:bg-gray-800 border-b border-gray-100">
            <div class="max-w-7xl mx-auto px-8">
                <div class="flex items-center justify-between h-16">
                    <div class=" flex items-center">
                        <div class="flex relative ">
                            <input type="text" id="email-with-icon" class=" rounded-l-lg flex-1 appearance-none border border-gray-300 w-80 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:border-gray-400 focus:border-r-0" name="email" placeholder="What are you looking for.." />
                            <span class="rounded-r-md inline-flex  items-center px-3 border-t bg-white border-r border-b border-gray-300 text-gray-500 shadow-sm cursor-pointer">
                                <RiSearch2Line className="text-xl" />
                            </span>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="flex items-center md:ml-6">
                            <div class="relative">
                                <div class="relative inline-block">
                                    <div onChange={()=>onChange()} onClick={() => toggleText()} class="cursor-pointer">
                                        <span><RiNotification3Line className="text-3xl ml-5 border rounded-full p-1 shadow text-gray-500" /></span>
                                    </div>
                                    <div class={`${show ? 'block' : 'hidden'} origin-top-right absolute right-10 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5`}>

                                        <div class="shadow-lg rounded-xl w-full md:w-80 p-4 bg-white dark:bg-gray-800 relative overflow-hidden">
                                            <div class="w-full flex items-center justify-between mb-8">
                                                <p class="text-gray-800 dark:text-white text-xl font-normal">
                                                    Activity
                                                </p>
                                                <a href="#" class="flex items-center text-sm hover:text-gray-600 dark:text-gray-50 dark:hover:text-white text-gray-300 border-0 focus:outline-none">
                                                    VIEW ALL
                                                </a>
                                            </div>
                                            <div class="flex items-start mb-6 rounded justify-between">
                                                <span class="rounded-full text-white dark:text-gray-800 p-2 bg-yellow-300">
                                                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1596 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zm-444-244v376h376q-10-29-22-41l-313-313q-12-12-41-22zm384 1528v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zm-128-448v320h-1024v-192l192-192 128 128 384-384zm-832-192q-80 0-136-56t-56-136 56-136 136-56 136 56 56 136-56 136-136 56z">
                                                        </path>
                                                    </svg>
                                                </span>
                                                <div class="flex items-center w-full justify-between">
                                                    <div class="flex text-sm flex-col w-full ml-2 items-start justify-between">
                                                        <p class="text-gray-700 dark:text-white">
                                                            <span class="font-bold mr-1">
                                                                Andrea
                                                            </span>
                                                            uploaded 3 documents on concept deisgn home page
                                                        </p>
                                                        <p class="text-gray-300">
                                                            Aug 10
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex items-start mb-6 rounded justify-between">
                                                <span class="rounded-full text-white dark:text-gray-800 p-2 bg-green-400">
                                                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z">
                                                        </path>
                                                    </svg>
                                                </span>
                                                <div class="flex items-center w-full justify-between">
                                                    <div class="flex text-sm flex-col w-full ml-2 items-start justify-between">
                                                        <p class="text-gray-700 dark:text-white">
                                                            <span class="font-bold mr-1">
                                                                Karen
                                                            </span>
                                                            leave some comments on concept deisgn support page
                                                        </p>
                                                        <p class="text-gray-300">
                                                            Aug 10
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex items-start mb-6 rounded justify-between">
                                                <span class="rounded-full text-white dark:text-gray-800 p-2 bg-indigo-400">
                                                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z">
                                                        </path>
                                                    </svg>
                                                </span>
                                                <div class="flex items-center w-full justify-between">
                                                    <div class="flex text-sm flex-col w-full ml-2 items-start justify-between">
                                                        <p class="text-gray-700 dark:text-white">
                                                            <span class="font-bold mr-1">
                                                                Karen
                                                            </span>
                                                            change project description to &quot;SubMarine protection project&quot;
                                                        </p>
                                                        <p class="text-gray-300">
                                                            Aug 09
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex items-start rounded justify-between">
                                                <span class="rounded-full text-white dark:text-gray-800 p-2 bg-yellow-300">
                                                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1596 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zm-444-244v376h376q-10-29-22-41l-313-313q-12-12-41-22zm384 1528v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zm-128-448v320h-1024v-192l192-192 128 128 384-384zm-832-192q-80 0-136-56t-56-136 56-136 136-56 136 56 56 136-56 136-136 56z">
                                                        </path>
                                                    </svg>
                                                </span>
                                                <div class="flex items-center w-full justify-between">
                                                    <div class="flex text-sm flex-col w-full ml-2 items-start justify-between">
                                                        <p class="text-gray-700 dark:text-white">
                                                            <span class="font-bold mr-1">
                                                                John
                                                            </span>
                                                            uploaded 17 pictures on concept deisgn galery page
                                                        </p>
                                                        <p class="text-gray-300">
                                                            Aug 1
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ml-4 flex items-center">
                            <div class="relative">
                                <div class="relative inline-block">
                                    <div onClick={() => toggleText1()} class="cursor-pointer">
                                        <span><RiMessageLine className="text-3xl ml-5 border rounded-full p-1 shadow text-gray-500" /></span>
                                    </div>
                                    <div class={`${show1 ? 'block' : 'hidden'} origin-top-right absolute right-10 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5`}>

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
                                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" class="text-indigo-500 h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ml-4 flex items-center">
                            <div class="relative">
                                <div class="relative inline-block">
                                    <div onClick={() => toggleText2()} class="cursor-pointer">
                                        <RiUser3Line class="text-xl bg-dark-500 text-3xl ml-5 border rounded-full p-1 shadow text-gray-500" />
                                    </div>
                                    <div class={`${show2 ? 'block' : 'hidden'} origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5`}>
                                        <div class="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link to="/" class="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                                                <span class="flex flex-col">
                                                    <span>
                                                        Settings
                                                    </span>
                                                </span>
                                            </Link>
                                            <Link to="/" class="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                                                <span class="flex flex-col">
                                                    <span>
                                                        Account
                                                    </span>
                                                </span>
                                            </Link>
                                            <Link to="/" class="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                                                <span class="flex flex-col">
                                                    <span>
                                                        Logout
                                                    </span>
                                                </span>
                                            </Link>
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
        </nav>
    );
};

export default TopBar;