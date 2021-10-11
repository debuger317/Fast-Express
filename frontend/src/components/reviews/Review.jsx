import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

//swiper slider
import SwiperCore, {
    Autoplay, Pagination
} from 'swiper/core';
import { ReviewItem } from '../../utiltes/LocalDatabase';
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const Review = () => {
    SwiperCore.use([Pagination, Autoplay]);
    const [reviews, setReviews] = useState('');

    useEffect(() => {
        fetch ('http://localhost:5500/api/reviews/allreviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section>
            <div className="container mx-auto mt-16">
                <p className="text-center text-3xl font-bold text-gray-800 dark:text-white">
                    CLIENT REVIEWS
                </p>
                <p className="text-center text-xl font-normal text-gray-500 dark:text-gray-200">
                    Meet our Best Client in the World
                </p>
                <Swiper
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },

                        480: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },

                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },

                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        }

                    }}
                    autoplay={true}
                    pagination={{
                        "clickable": true
                    }} className="mySwiper">
                    {
                        ReviewItem.map(review =>
                            <SwiperSlide>
                                <div className="group w-90 mt-10 mb-16 testimonial-card cursor-pointer bg-white dark:bg-gray-800 shadow-lg mx-auto rounded-xl p-4">
                                    <p className="text-gray-600 dark:text-white flex">
                                        <span className="mt-10 font-bold text-indigo-500 text-lg">
                                            <ImQuotesLeft />
                                        </span>
                                        <p className="mt-10 ml-5">{review.description}</p>
                                        <span className="mt-48 font-bold text-indigo-500 text-lg">
                                            <ImQuotesRight />
                                        </span>
                                    </p>
                                    <div className="flex items-center mt-4 xl:w-1/4 md:w-1/2 p-4">
                                        <a href="#" className="block relative">
                                            <div className="flex items-center border border-gray-900 group-hover:border-white group-hover:text-white rounded-full text-4xl p-2">
                                                <img src={review.photo} className="ml-2 h-4 w-4" />
                                            </div>
                                        </a>
                                        <div className="flex flex-col ml-5 justify-between">
                                            <span className="font-semibold text-indigo-500 text-sm">
                                                {review.name}
                                            </span>
                                            <span className="dark:text-gray-400 text-xs flex items-center">
                                            {review.city}
                                                {/* <img src={review.photo} className="ml-2 h-4 w-4" /> */}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>)}
                </Swiper>
            </div >
        </section >
    );
};

export default Review;