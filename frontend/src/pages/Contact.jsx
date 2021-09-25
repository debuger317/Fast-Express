import React from 'react';

import { FcOnlineSupport } from "react-icons/fc";
import Footer from '../component/common/footer/Footer';
import Navbar from '../component/common/header/sub-component/nav-bar/Navbar';
import TopBar from '../component/common/header/sub-component/top-bar/TopBar';

const Contact = () => {
    const handleSubmit = () => {

    }

    return (
        <div>
            <TopBar />
            <Navbar />
            <div class="background-color text-white max-w-screen-xl p-4 py-10 bg-white dark:bg-gray-800 mx-auto px-4 sm:px-6 lg:px-8 relative py-26 lg:mt-10">
                <div class="relative">
                    <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div class="lg:col-start-2 lg:max-w-2xl ml-auto">
                            <div class="px-6 py-4 text-center">
                                <div className='p-4'><FcOnlineSupport className='m-auto'/></div>
                                <div class="font-bold text-xl mb-2 text-black">Chat</div>
                                <p class="text-gray-700 text-base px-14">
                                    Chat with us to book or ask about your delivery order status and other inquiries.
                                </p>
                            </div>
                            <div class="px-6 pt-4 pb-2">
                                <button type="button" class="m-auto block py-2 px-2  bg-green-600 hover:bg-red-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    WhatsApp
                                </button>
                                <button type="button" class="m-auto block my-5 py-2 px-2  bg-green-600 hover:bg-red-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    ONLINE CHAT SUPPORT
                                </button>
                            </div>
                        </div>
                        <div class="mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1">
                            <div class="relative space-y-4">
                                <form class="mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1">
                                    <div class="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
                                        <div class="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
                                            Contact us !
                                        </div>
                                        <div class="grid max-w-xl grid-cols-2 gap-4 m-auto">
                                            <div class="col-span-2 lg:col-span-1">
                                                <div class=" relative ">
                                                    <input type="text" id="contact-form-name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Name" />
                                                </div>
                                            </div>
                                            <div class="col-span-2 lg:col-span-1">
                                                <div class=" relative ">
                                                    <input type="text" id="contact-form-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="email" />
                                                </div>
                                            </div>
                                            <div class="col-span-2">
                                                <label class="text-gray-700" for="name">
                                                    <textarea class="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="comment" placeholder="Enter your comment" name="comment" rows="5" cols="40">
                                                    </textarea>
                                                </label>
                                            </div>
                                            <div class="col-span-2 text-right">
                                                <button type="submit" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                    Send
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;

