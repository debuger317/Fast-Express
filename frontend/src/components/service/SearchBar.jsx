import React from 'react';
import { FaSearchLocation } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';

const SearchBar = () => {
    return (
        <section className="bg-white-100 py-10 mt-10 shadow-md">
            <div className="container mx-auto">
                <div className="flex justify-center">
                    <div className="w-1/6 flex items-center">
                        <div className="icon">
                            <IoLocationOutline />
                        </div>
                        <h2 className="text-center">All Bangladesh</h2>
                    </div>
                    <div class="w-1/2 flex relative">
                        <input type="text" id="email-with-icon" class=" rounded-l-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" name="email" placeholder="what are you looking for..." />
                        <span class="cursor-pointer rounded-r-md inline-flex  items-center px-3 border-t bg-white border-r border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                            <FaSearchLocation />
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SearchBar;
