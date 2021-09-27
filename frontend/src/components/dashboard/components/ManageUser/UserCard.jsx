import React from 'react';

const UserCard = () => {
  return (
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mb-12">
        <article>
          <section class="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
            <article class="relative w-full h-48 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out">
              <div class="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
              <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                <h3 class="text-center">
                  <a class="text-white text-2xl font-bold text-center" href=" #">
                    <span class="absolute inset-0"></span>
                    1200 User
                  </a>
                </h3>
              </div>
            </article>
            <article class="relative w-full h-48 bg-red-400 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out">
              <div class="absolute inset-0 bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
              <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                <h3 class="text-center">
                  <a class="text-white text-2xl font-bold text-center" href="#">
                    <span class="absolute inset-0"></span>
                    1800+ work done
                  </a>
                </h3>
              </div>
            </article>
            <article class="relative w-full h-48 bg-indigo-500 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out">
              <div class="absolute inset-0 bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
              <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                <h3 class="text-center">
                  <a class="text-white text-2xl font-bold text-center" href=" #">
                    <span class="absolute inset-0"></span>
                    76 Company
                  </a>
                </h3>
              </div>
            </article>
          </section>
        </article>
      </section>
  );
};

export default UserCard;