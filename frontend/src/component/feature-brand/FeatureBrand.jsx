import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, {
  Autoplay, Pagination, Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

const FeatureBrand = () => {
  return (

    <section>
      <div className="container mx-auto items-center justify-center py-12">
        <p className="text-center text-4xl pb-12 text-gray-600 dark:text-white font-medium ">FEATURE AND MENTIONED ON</p>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            "clickable": true
          }} navigation={true} className="mySwiper justify-items-center">
          <SwiperSlide>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_BPkPBRCOGxs_ZRnEALwGAE1ODfcCDIp_Eg&usqp=CAU" alt="currier" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDdTaTX5pV2sp-RbRrNk9sgxXfNzaqM1y03g&usqp=CAU" alt="currier" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5GyPZsMgguw24Fs1Qi6ac0GfbM0yNuGkUug&usqp=CAU" alt="currier" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTjRd_Z3iky5HeK9cBnNwHZz8YNFBwzOPXIg&usqp=CAU" alt="currier" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLHa4XwXjj219B7tJ4VburzssJq0ckiE--4w&usqp=CAU" alt="currier" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV8fac58tbH5l18AR1j2JV9-qCGifChwugdQ&usqp=CAU" alt="currier " />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD_Bdja_mp1v_CEhGqn80wzIvYkpNdlUxtlw&usqp=CAU" alt="currier company" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK7CRNTCeAkbrsqZDqHMa_v8hfJJKoZ8MNpw&usqp=CAU" alt="currier Company" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8HshjBatbfrBMLzgB3uPzhpEUDl_mM5gULg&usqp=CAU" alt="currier Company" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default FeatureBrand;
