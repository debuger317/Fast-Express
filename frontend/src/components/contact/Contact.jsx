import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { BiSupport } from "react-icons/bi";
import { ImWhatsapp, ImCancelCircle } from "react-icons/im";

const Contact = () => {

    return (
        <div>
            <div className="bg-cover bg-center  h-auto text-white py-24 px-10 object-fill" style={{ backgroundImage: "url(https://i.ibb.co/FVwFr8j/Untitled-design-1.jpg)" }}>
                <div className="md:w-1/2">
                    <p className="font-bold text-sm uppercase">Fast Express</p>
                    <p className="text-3xl font-bold">Feel Free To Contact Us</p>
                    <p className="text-2xl mb-10 leading-none">Lets Start a Conversation with</p>
                    <a href="# " className="bg-red-600 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Whats app</a>
                </div>
            </div>
            <div>
                <p className="text-3xl font-bold text-center py-10">Contact Us</p>
            </div>
            <div className="container mx-auto p-3">
                <p className="text-2xl font-semibold py-6">Points of Contact</p>
                <p className="text-xl mx-auto py-px text-gray-600">Bangladesh | Fast Express Headquarters</p>
                <small className="text-xl font-thin text-gray-500">Level-2, 34, Akkas Tower, Banani, Dhaka</small>
            </div>
            <div className="container mx-auto p-3">
                <p className="text-xl">For Merchant Information</p>
                <small className="text-lg text-red-500 hover:text-gray-500"><a href="mailto: dedugentity@gmail.com">fastexpress@merchant.com</a></small>
            </div>
            <div className="container mx-auto p-3">
                <p className="text-xl">Support</p>
                <small className="text-lg text-red-500 hover:text-gray-500"><a href="mailto: dedugentity@gmail.com">fastexpress@support.com</a></small>
            </div>
            <div className="container mx-auto p-3">
                <p className="text-2xl font-semibold">Additional Office Locations</p>
                <small className="text-xl font-thin text-gray-500">Level-5, 78, Mirpur, Dhaka</small>
            </div>

            <div className="flex h-screen items-center justify-end mb-32">
                <div className="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2">

                    <div className="flex justify-center py-8">
                        <div className="flex">
                            <h1 className="text-gray-600 font-bold md:text-2xl text-xl">Contact With Email</h1>
                        </div>
                    </div>


                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mx-7">
                        <div class="grid grid-cols-1">
                            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">First Name</label>
                            <input class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="First Name" />
                        </div>
                        <div class="grid grid-cols-1">
                            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Last Name</label>
                            <input class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Last Name" />
                        </div>
                    </div>
                    <div class="grid grid-cols-1 mt-5 mx-7">
                        <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Email</label>
                        <input class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Email" />
                    </div>

                    <div class="grid grid-cols-1 mt-5 mx-7">
                        <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Write here</label>
                        <textarea class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Write Your Comment">

                        </textarea>
                        {/* <input class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="" /> */}
                    </div>

                    <div class='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
                        <button class='w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Send</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;

// const [show, setShow] = useState(false);

//     const sendEmail = (e) => {
//         e.preventDefault();

//         emailjs.sendForm('service_j00wuop',
//             'template_r2fco2l',
//             e.target,
//             'user_vGBIhRVN48uioPJ1QxFLa')
//             .then((result) => {
//                 setShow(result)
//             }, (error) => {
//                 console.log(error.text);
//             });
//         e.target.reset()
//     }


{/* <section>
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
                                            <ImWhatsapp className='inline mx-3 text-3xl' /><a href="https://web.whatsapp.com/" target="_blank">WhatsApp</a>
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
        </section > */}

