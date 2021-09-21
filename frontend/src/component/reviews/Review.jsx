import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import SwiperCore, {
    Autoplay, Pagination
} from 'swiper/core';

const Review = () => {
    SwiperCore.use([Pagination, Autoplay]);1212
    return (
        <section>
            <div class="mt-5">
                <p class="text-center text-3xl font-bold text-gray-800 dark:text-white">
                    Client Review
                </p>
                <p class="text-center mb-12 text-xl font-normal text-gray-500 dark:text-gray-200">
                    Meat the best Client in the World
                </p>
                <Swiper spaceBetween={30} centeredSlides={false} autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }} pagination={{
                    "clickable": true
                }} className="mySwiper">
                    <SwiperSlide>
                        <div class="w-full flex flex-col md:flex-row gap-4 mb-8 md:mb-0 flex-between items-center p-8">
                            <div class="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4">
                                <p class="text-gray-600 dark:text-white">
                                    <span class="font-bold text-indigo-500 text-lg">
                                        “
                                    </span>
                                    To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
                                    <span class="font-bold text-indigo-500 text-lg">
                                        ”
                                    </span>
                                </p>
                                <div class="flex items-center mt-4">
                                    <a href="#" class="block relative">
                                        <img alt="profil" src="/images/person/1.jpg" class="mx-auto object-cover rounded-full h-10 w-10 " />
                                    </a>
                                    <div class="flex flex-col ml-2 justify-between">
                                        <span class="font-semibold text-indigo-500 text-sm">
                                            Jean Miguel
                                        </span>
                                        <span class="dark:text-gray-400 text-xs flex items-center">
                                            User of Tail-Kit
                                            <img src="/icons/rocket.svg" class="ml-2 h-4 w-4" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4">
                                <p class="text-gray-600 dark:text-white">
                                    <span class="font-bold text-indigo-500 text-lg">
                                        “
                                    </span>
                                    To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
                                    <span class="font-bold text-indigo-500 text-lg">
                                        ”
                                    </span>
                                </p>
                                <div class="flex items-center mt-4">
                                    <a href="#" class="block relative">
                                        <img alt="profil" src="/images/person/1.jpg" class="mx-auto object-cover rounded-full h-10 w-10 " />
                                    </a>
                                    <div class="flex flex-col ml-2 justify-between">
                                        <span class="font-semibold text-indigo-500 text-sm">
                                            Jean Miguel
                                        </span>
                                        <span class="dark:text-gray-400 text-xs flex items-center">
                                            User of Tail-Kit
                                            <img src="/icons/rocket.svg" class="ml-2 h-4 w-4" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4">
                                <p class="text-gray-600 dark:text-white">
                                    <span class="font-bold text-indigo-500 text-lg">
                                        “
                                    </span>
                                    To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
                                    <span class="font-bold text-indigo-500 text-lg">
                                        ”
                                    </span>
                                </p>
                                <div class="flex items-center mt-4">
                                    <a href="#" class="block relative">
                                        <img alt="profil" src="/images/person/1.jpg" class="mx-auto object-cover rounded-full h-10 w-10 " />
                                    </a>
                                    <div class="flex flex-col ml-2 justify-between">
                                        <span class="font-semibold text-indigo-500 text-sm">
                                            Jean Miguel
                                        </span>
                                        <span class="dark:text-gray-400 text-xs flex items-center">
                                            User of Tail-Kit
                                            <img src="/icons/rocket.svg" class="ml-2 h-4 w-4" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="w-full flex flex-col md:flex-row gap-4 mb-8 md:mb-0 flex-between items-center p-8">
                            <div class="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4">
                                <p class="text-gray-600 dark:text-white">
                                    <span class="font-bold text-indigo-500 text-lg">
                                        “
                                    </span>
                                    To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
                                    <span class="font-bold text-indigo-500 text-lg">
                                        ”
                                    </span>
                                </p>
                                <div class="flex items-center mt-4">
                                    <a href="#" class="block relative">
                                        <img alt="profil" src="/images/person/1.jpg" class="mx-auto object-cover rounded-full h-10 w-10 " />
                                    </a>
                                    <div class="flex flex-col ml-2 justify-between">
                                        <span class="font-semibold text-indigo-500 text-sm">
                                            Jean Miguel
                                        </span>
                                        <span class="dark:text-gray-400 text-xs flex items-center">
                                            User of Tail-Kit
                                            <img src="/icons/rocket.svg" class="ml-2 h-4 w-4" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4">
                                <p class="text-gray-600 dark:text-white">
                                    <span class="font-bold text-indigo-500 text-lg">
                                        “
                                    </span>
                                    To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
                                    <span class="font-bold text-indigo-500 text-lg">
                                        ”
                                    </span>
                                </p>
                                <div class="flex items-center mt-4">
                                    <a href="#" class="block relative">
                                        <img alt="profil" src="/images/person/1.jpg" class="mx-auto object-cover rounded-full h-10 w-10 " />
                                    </a>
                                    <div class="flex flex-col ml-2 justify-between">
                                        <span class="font-semibold text-indigo-500 text-sm">
                                            Jean Miguel
                                        </span>
                                        <span class="dark:text-gray-400 text-xs flex items-center">
                                            User of Tail-Kit
                                            <img src="/icons/rocket.svg" class="ml-2 h-4 w-4" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4">
                                <p class="text-gray-600 dark:text-white">
                                    <span class="font-bold text-indigo-500 text-lg">
                                        “
                                    </span>
                                    To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
                                    <span class="font-bold text-indigo-500 text-lg">
                                        ”
                                    </span>
                                </p>
                                <div class="flex items-center mt-4">
                                    <a href="#" class="block relative">
                                        <img alt="profil" src="/images/person/1.jpg" class="mx-auto object-cover rounded-full h-10 w-10 " />
                                    </a>
                                    <div class="flex flex-col ml-2 justify-between">
                                        <span class="font-semibold text-indigo-500 text-sm">
                                            Jean Miguel
                                        </span>
                                        <span class="dark:text-gray-400 text-xs flex items-center">
                                            User of Tail-Kit
                                            <img src="/icons/rocket.svg" class="ml-2 h-4 w-4" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div >
        </section >
    );
};

export default Review;