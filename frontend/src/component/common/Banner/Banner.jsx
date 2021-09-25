import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper/core';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import { Link } from 'react-router-dom';
import { bannerData } from '../../../utiltes/LocalDatabase';

const Banner = () => {
    SwiperCore.use([Pagination, Autoplay]);
    return (
        <section >
            <div className="pb-4">
                <Swiper spaceBetween={30} centeredSlides={false} autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }} pagination={{
                    "clickable": true
                }} className="mySwiper">
                    {/* Mapping data from bannerData */}
                    {bannerData.map(item => <>
                        <SwiperSlide>
                            <Link to="/" className="w-full block h-90">
                                <img alt="covid 19" src={item.img} />
                            </Link>
                        </SwiperSlide>
                    </>)}
                </Swiper>
            </div>
        </section>
    )
}

export default Banner;
