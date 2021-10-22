import React from 'react';
import { Link } from "react-router-dom";
import { FaRocketchat, FaPrayingHands, FaHandHoldingHeart } from 'react-icons/fa';
import { BiSupport, BiMap, BiPurchaseTag } from 'react-icons/bi';
import { BsChatDots, BsArrowRight } from 'react-icons/bs';

const Support = () => {
    return (
        <section className="container mx-auto lg:px-8 px-4 sm:px-6 ">
            <div className="sm:flex items-center bg-white dark:bg-gray-800">
                <div className="text-start sm:w-6/12 py-12 lg:py-16  z-20">
                    <div className="flex justify-end sm:block">
                    <h2 className="flex items-center font-poppins medium text-2xl text-red-400"><FaRocketchat className="mr-5" />How We Work</h2>
                    <h2 className="text-2xl sm:text-4xl my-5 text-gray-600 font-semibold">We Communicate To Get Your Business to The Next Level
                    </h2>
                    </div>
                    <p>Our friendly, professional customer service agents are available by instant chat support everyday, Monday to Sunday, 24/7. Change your delivery, purchase more services, ask questions about your courier … ask away! We’re here to help.
                    </p>
                    <div className="grid grid-cols-2 gap-4 my-10">
                        <div className="flex items-center"><BsChatDots className="text-red-400 text-2xl mr-5" /> Chat Support</div>
                        <div className="flex items-center"><BiMap className="text-red-400 text-2xl mr-5" />Parcel Tracker</div>
                        <div className="flex items-center"><BiSupport className="text-red-400 text-2xl mr-5" />24/7 Onlne Support</div>
                        <div className="flex items-center"><FaPrayingHands className="text-red-400 text-2xl mr-5" />Individual and Business Services</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 my-10 border-t py-10">
                        <div className="flex items-center">
                            <FaHandHoldingHeart className="text-red-400 text-5xl" />
                            <div className="ml-5">
                                <h1 className="font-bold font-9xl">1+ Years</h1>
                                <p className="text-base text-gray-600">Years of Experience</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <BiPurchaseTag className="text-red-400 text-5xl" />
                            <div className="ml-5">
                                <h1 className="font-bold font-5xl">100+ Day</h1>
                                <p className="text-base text-gray-600">Order Per Day</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-6/12 relative">
                    <img src="https://i.ibb.co/StVpSc0/fast-express-support.jpg" className=" ml-auto pl-14" />
                    <div className="sm:absolute bg-white p-10 sm:left-14 bottom-0 right-0 m-10">
                        <p className="text-xl">If You Need Help, Get A Consultation</p>
                        <Link className="flex items-center" to="/contact">Get Started<BsArrowRight className="ml-1 font-2xl text-red-400"/></Link>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Support;
