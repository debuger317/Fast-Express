import React from 'react';
import { Link } from 'react-router-dom';
import { BlogData } from '../../utiltes/LocalDatabase';

const Blog = () => {

  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="text-center">
          <h1 className="text-5xl pb-5">Latest News & Blog</h1>
        </div>
        <div class="flex flex-wrap  sm:-m-4 -mx-4 -mb-10 -mt-4">
          {
            BlogData.map(blog => (
              <div class="p-4 md:w-1/3 group border-gray-500 hover:bg-white hover:shadow-lg hover:border-transparent sm:mb-0 mb-6">
                <div class="rounded-lg transition ease-in-out duration-700 border-indigo-500  h-64 overflow-hidden">
                  <img alt="content" class="object-cover transition ease-in-out duration-700 object-center h-full w-full" src={blog.img} />
                </div>
                <h2 class="text-xl font-medium title-font text-gray-900 mt-5 text-gray-900 group-hover:text-gray-900 ">{blog.heading}</h2>
                <p class="text-base leading-relaxed mt-2 text-gray-400 group-hover:text-gray-900 ">{blog.dec}</p>
                <Link to="/singleblog" class="text-indigo-500 inline-flex items-center mt-3">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    </section>

  );
};

export default Blog;