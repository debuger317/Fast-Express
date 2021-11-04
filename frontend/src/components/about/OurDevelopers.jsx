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

const OurDevelopers = () => {
  return (
    <section>
      <div className="container mx-auto py-12">
        <p className="text-center text-4xl dark:text-white font-medium ">OUR DEVELOPERS</p>
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
          autoplay={{
            "delay": 2500
          }}
          loopFillGroupWithBlank={true}
          pagination={{
            "clickable": true
          }} navigation={false} className="mySwiper justify-items-center">

          <SwiperSlide>
            <div class="flex items-center developer-fix justify-center">
              <div class="w-52">
                <div class="bg-white shadow-xl rounded-lg py-3">
                  <div class="photo-wrapper p-2">
                  <img class="w-32 h-32 rounded-full mx-auto" src="https://i.ibb.co/f2c9vGH/Abdul-Hannan.png" alt="Abdul Hannan" />
                  </div>
                  <div class="p-2">
                    <h3 class="text-center text-xl text-gray-900 font-medium leading-8">Abdul Hannan</h3>
                    <div class="text-center text-gray-400 text-xs font-semibold">
                      <p>Web Developer</p>
                    </div>
                    <table class="text-xs my-3">
                      <tbody><tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">Address</td>
                        <td class="px-2 py-2">Dhaka, Bangladesh</td>
                      </tr>
                        <tr>
                          <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                          <td class="px-2 py-2">+880 1681505522</td>
                        </tr>
                        <tr>
                          <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                          <td class="px-2 py-2">shohas563@gmail.com</td>
                        </tr>
                      </tbody></table>
                    <div class="text-center my-3">
                      <a class="text-xs text-red-500 italic hover:underline hover:text-red-600 font-medium" href="https://www.linkedin.com/in/abdul-hannan-web/" target="_blank" rel="noreferrer">View Profile</a>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div class="flex items-center developer-fix justify-center">
              <div class="">
                <div class="bg-white shadow-xl rounded-lg py-3">
                  <div class="photo-wrapper p-2">
                    <img class="w-32 h-32 rounded-full mx-auto" src="https://i.ibb.co/HgvymHJ/Naimur-Rahman.jpg" alt="Naimur Rahman" />
                  </div>
                  <div class="p-2">
                    <h3 class="text-center text-xl text-gray-900 font-medium leading-8">Naimur Rahman</h3>
                    <div class="text-center text-gray-400 text-xs font-semibold">
                      <p>Web Developer</p>
                    </div>
                    <table class="text-xs my-3">
                      <tbody><tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">Address</td>
                        <td class="px-2 py-2">Dhaka, Bangladesh</td>
                      </tr>
                        <tr>
                          <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                          <td class="px-2 py-2">+880 1977772188</td>
                        </tr>
                        <tr>
                          <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                          <td class="px-2 py-2">bdnaimur@gmail.com</td>
                        </tr>
                      </tbody></table>

                    <div class="text-center my-3">
                      <a class="text-xs text-red-500 italic hover:underline hover:text-red-600 font-medium" href="https://www.linkedin.com/in/rahman-88/" target="_blank" rel="noreferrer">View Profile</a>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div class="flex items-center developer-fix justify-center">
              <div class="">
                <div class="bg-white shadow-xl rounded-lg py-3">
                  <div class="photo-wrapper p-2">
                    <img class="w-32 h-32 rounded-full mx-auto" src="https://i.ibb.co/fnqyG4F/Abdul-Mozid-Fahim.jpg" alt="Abdul Mozid Fahim" />
                  </div>
                  <div class="p-2">
                    <h3 class="text-center text-xl text-gray-900 font-medium leading-8">Abdul Mozid Fahim</h3>
                    <div class="text-center text-gray-400 text-xs font-semibold">
                      <p>Web Developer</p>
                    </div>
                    <table class="text-xs my-3">
                      <tbody><tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">Address</td>
                        <td class="px-2 py-2">Chandpur, Bangladesh</td>
                      </tr>
                        <tr>
                          <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                          <td class="px-2 py-2">+880 1758892524</td>
                        </tr>
                        <tr>
                          <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                          <td class="px-2 py-2">abdulmozidfahim1@gmail.com</td>
                        </tr>
                      </tbody></table>

                    <div class="text-center my-3">
                      <a class="text-xs text-red-500 italic hover:underline hover:text-red-600 font-medium" href="https://linkedin.com/in/abdulmozidfahim" target="_blank" rel="noreferrer">View Profile</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div class="flex items-center developer-fix justify-center">
              <div class="">
                <div class="bg-white shadow-xl rounded-lg py-3">
                  <div class="photo-wrapper p-2">
                    <img class="w-32 h-32 rounded-full mx-auto" src="https://i.ibb.co/dLs7tfj/Kazi-Rayhan.jpg" alt="Kazi Rayhan" />
                  </div>
                  <div class="p-2">
                    <h3 class="text-center text-xl text-gray-900 font-medium leading-8">Kazi Rayhan</h3>
                    <div class="text-center text-gray-400 text-xs font-semibold">
                      <p>Web Developer</p>
                    </div>
                    <table class="text-xs my-3">
                      <tbody><tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">Address</td>
                        <td class="px-2 py-2">Jhenaidah, Bangladesh</td>
                      </tr>
                        <tr>
                          <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                          <td class="px-2 py-2">+880 1992874495</td>
                        </tr>
                        <tr>
                          <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                          <td class="px-2 py-2">rayhanbd4400@gmail.com</td>
                        </tr>
                      </tbody></table>
                    <div class="text-center my-3">
                      <a class="text-xs text-red-500 italic hover:underline hover:text-red-600 font-medium"  href="https://www.linkedin.com/in/rayhanwd/" target="_blank" rel="noreferrer">View Profile</a>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div class="flex items-center developer-fix justify-center">
              <div class="">
                <div class="bg-white shadow-xl rounded-lg py-3">
                  <div class="photo-wrapper p-2">
                    <img class="w-32 h-32 rounded-full mx-auto" src="https://i.ibb.co/bd7jqn6/Zihadul-Islam.jpg" alt="Zihadul Islam" />
                  </div>
                  <div class="p-2">
                    <h3 class="text-center text-xl text-gray-900 font-medium leading-8">Zihadul Islam</h3>
                    <div class="text-center text-gray-400 text-xs font-semibold">
                      <p>Web Developer</p>
                    </div>
                    <table class="text-xs my-3">
                      <tbody><tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">Address</td>
                        <td class="px-2 py-2">Cox's Bazar, Bangladesh</td>
                      </tr>
                        <tr>
                          <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                          <td class="px-2 py-2">+880 1850649283</td>
                        </tr>
                        <tr>
                          <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                          <td class="px-2 py-2">zihadul10101@gmail.com</td>
                        </tr>
                      </tbody></table>
                    <div class="text-center my-3">
                      <a class="text-xs text-red-500 italic hover:underline hover:text-red-600 font-medium" href="https://www.linkedin.com/in/zihadul-islam-bd/" target="_blank" rel="noreferrer">View Profile</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default OurDevelopers;