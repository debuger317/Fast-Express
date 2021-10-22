import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { BiSupport } from "react-icons/bi";
import { ImWhatsapp, ImCancelCircle } from "react-icons/im";

const Contact = () => {
    const [show, setShow] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_j00wuop',
            'template_r2fco2l',
            e.target,
            'user_vGBIhRVN48uioPJ1QxFLa')
            .then((result) => {
                setShow(result)
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <section>
            <div class="container text-white max-w-screen-xl p-4 py-10 bg-white dark:bg-gray-800 mx-auto px-4 sm:px-6 lg:px-8 relative py-26 lg:mt-10">
                {show &&
                    <div class="bg-green-200 border-green-600 text-green-600 border-l-4 p-4" role="alert">
                        <div className="flex items-center justify-between">
                            <div>
                                <p class="font-bold">
                                    Success!
                                </p>
                                <p>
                                    your message was successfully sent.
                                </p>
                            </div>
                            <span onClick={() => setShow(false)} class="text-xl cursor-pointer"><ImCancelCircle /></span>
                        </div>
                    </div>
                }
                <div class="relative">
                    <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div class="lg:col-start-2 lg:max-w-2xl ml-auto">
                            <div class="div-fix w-full max-w-2xl px-5 py-5 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
                                <div class="">
                                    <div class="px-4 py-2 text-center">
                                        <div className='p-4'><BiSupport className='m-auto text-red-400 text-7xl' /></div>
                                        <div class="font-bold text-xl mb-2 text-black">Chat</div>
                                        <p class="text-gray-700 text-base px-14">
                                            Chat with us to book or ask about your delivery order status and other inquiries.
                                        </p>
                                    </div>
                                    <div class="px-4 pt-4 pb-2">
                                        <button type="button" class="m-auto block py-2 px-2  bg-red-400 hover:bg-red-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                            <ImWhatsapp className='inline mx-3 text-3xl' />WhatsApp
                                        </button>
                                        <button type="button" class="m-auto block my-5 py-2 px-2  bg-red-400 hover:bg-red-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                            ONLINE CHAT SUPPORT
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1">
                            <div class="mx-10  relative space-y-4">
                                <form onSubmit={sendEmail} class="mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1">
                                    <div class="div-fix w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
                                        <div class=" font-bold mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
                                            Contact with us !
                                        </div>
                                        <div class="grid max-w-xl grid-cols-2 gap-4 m-auto">
                                            <div class="col-span-2 lg:col-span-1">
                                                <div class=" relative ">
                                                    <input type="text" name="name" id="contact-form-name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your name" required />
                                                </div>
                                            </div>
                                            <div class="col-span-2 lg:col-span-1">
                                                <div class=" relative ">
                                                    <input type="text" name="user_email" id="contact-form-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your email" required />
                                                </div>
                                            </div>
                                            <div class="col-span-2">
                                                <label class="text-gray-700" for="message">
                                                    <textarea class="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="comment" placeholder="Enter your comment" name="message" rows="5" cols="40" required>
                                                    </textarea>
                                                </label>
                                            </div>
                                            <div class="col-span-2 text-right">
                                                <button type="submit" class="py-2 px-4  bg-red-400 hover:bg-red-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
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
        </section >
    );
};

export default Contact;

