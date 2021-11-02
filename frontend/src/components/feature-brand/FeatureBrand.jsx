import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, {
  Autoplay, Pagination, Navigation
} from 'swiper/core';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

const FeatureBrand = () => {
  const [featureBrand, setFeatureBrand] = useState([])

  const getFeatureBrand = async () => {
    try {
      const res = await
        axios.get("https://fastexpress.herokuapp.com/api/merchant/all")
      setFeatureBrand(res.data)
    }
    catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getFeatureBrand()
  }, [featureBrand])

  return (
    <section>
      <div className="container mx-auto py-12">
        <p className="text-center text-4xl pb-12 text-gray-600 dark:text-white font-medium ">FEATURE AND MENTIONED ON</p>
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
          loop={true}
          autoplay={true}
          loopFillGroupWithBlank={true}
          pagination={{
            "clickable": true
          }} navigation={false} className="mySwiper justify-items-center">

          {
            featureBrand && featureBrand.map(brand =>
              <SwiperSlide>
                <div>
                  <img style={{'width':"200px"}} className="mx-auto" src={brand.logo} alt="currier company" />
                </div>
              </SwiperSlide>
            )
          }
        </Swiper>
      </div>
    </section>
  )
}

export default FeatureBrand;
