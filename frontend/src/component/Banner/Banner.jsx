import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, {
    Autoplay, Pagination
} from 'swiper/core';
const Banner = () => {
    SwiperCore.use([Pagination, Autoplay]);
    return (
        <section >
            <div className="container px-5 py-24 mx-auto">
                <Swiper spaceBetween={30} centeredSlides={false} autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }} pagination={{
                    "clickable": true
                }} className="mySwiper">
                    <SwiperSlide>
                        <a href="#" className="w-full block h-80">
                            <img alt="covid 19" src="https://df17fp68uwcso.cloudfront.net/eyJidWNrZXQiOiJtZWRpYS5ldmFseS5jb20uYmQiLCJrZXkiOiJtZWRpYS9pbWFnZXMvMzg4YjVmNjE3NjM5LWY2YTQzMjA0LWNmOGUtNDEzMC05NTU2LTlmMWVkOGRlZGMyZC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMzUwLCJoZWlnaHQiOiJhdXRvIiwiZml0IjoiY29udGFpbiJ9LCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfSwiZmxhdHRlbiI6dHJ1ZSwianBlZyI6eyJxdWFsaXR5IjoxMDB9fX0=" className="w-full object-cover" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#" className="w-full block h-80">
                            <img alt="covid 19" src="https://df17fp68uwcso.cloudfront.net/eyJidWNrZXQiOiJtZWRpYS5ldmFseS5jb20uYmQiLCJrZXkiOiJtZWRpYS9pbWFnZXMvZTY1OWNkODg2N2FhLThiOTA1Mzg4LWYzMDEtNDM3ZC05YjNlLTI4ZmFiMDAyZWE2My5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMzUwLCJoZWlnaHQiOiJhdXRvIiwiZml0IjoiY29udGFpbiJ9LCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfSwiZmxhdHRlbiI6dHJ1ZSwianBlZyI6eyJxdWFsaXR5IjoxMDB9fX0=" className="w-full object-cover" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#" className="w-full block h-80">
                            <img alt="covid 19" src="https://df17fp68uwcso.cloudfront.net/eyJidWNrZXQiOiJtZWRpYS5ldmFseS5jb20uYmQiLCJrZXkiOiJtZWRpYS9pbWFnZXMvMGI3NmEwY2ViYjBiLWQ5ZDAxNzg0LTMxMGUtNGY2Ny05Mjg0LWE3M2ZlNjlmMzYyZC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMzUwLCJoZWlnaHQiOiJhdXRvIiwiZml0IjoiY29udGFpbiJ9LCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfSwiZmxhdHRlbiI6dHJ1ZSwianBlZyI6eyJxdWFsaXR5IjoxMDB9fX0=" className="w-full object-cover" />
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default Banner;
