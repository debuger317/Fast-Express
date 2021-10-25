import React from 'react';
import { FaUserPlus } from 'react-icons/fa';
import { MdCloudDone } from 'react-icons/md';
import Countimg from '../../assets/images/about/titleimg.jpg';


const ClientCounter = () => {
  return (
    <section style={{ "backgroundImage": `url(${Countimg})` }} class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4 text-center">
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class=" px-4 py-6 rounded-lg">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-yellow-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                <MdCloudDone className="text-2xl" />
              </svg>
              <h2 class="title-font font-medium text-4xl text-gray-900">2.7K</h2>
              <p class="leading-relaxed">Works Done</p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class=" px-4 py-6 rounded-lg">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-yellow-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                <FaUserPlus className="text-2xl" />
              </svg>
              <h2 class="title-font font-medium text-4xl text-gray-900">1.3K</h2>
              <p class="leading-relaxed">Happy Customer</p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class=" px-4 py-6 rounded-lg">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-yellow-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
              </svg>
              <h2 class="title-font font-medium text-4xl text-gray-900">74</h2>
              <p class="leading-relaxed">Feature Brand</p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class=" px-4 py-6 rounded-lg">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-yellow-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <h2 class="title-font font-medium text-4xl text-gray-900">46</h2>
              <p class="leading-relaxed ">Places</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientCounter;