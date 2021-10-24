import React from 'react';
import { BlogData } from '../../utiltes/LocalDatabase';

const Blog = () => {
  
  return (

    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="text-center">
          <p className="text-xl pb-5">NEWS & UPDATE</p>
          <h1 className="text-5xl pb-5">Latest News & Blog</h1>
        </div>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
         {
BlogData.map(blog =>(
  <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
  <div class="rounded-lg h-64 overflow-hidden">
    <img alt="content" class="object-cover object-center h-full w-full" src={blog.img} />
  </div>
  <h2 class="text-xl font-medium title-font text-gray-900 mt-5">{blog.heading}</h2>
  <p class="text-base leading-relaxed mt-2">{blog.dec}</p>
  <a class="text-indigo-500 inline-flex items-center mt-3">Learn More
    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
      <path d="M5 12h14M12 5l7 7-7 7"></path>
    </svg>
  </a>
</div>
))
         }
        </div>
      </div>
    </section>

  );
};

export default Blog;