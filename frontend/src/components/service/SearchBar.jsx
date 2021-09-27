import React from 'react';

const SearchBar = () => {
    return (
        <section className="bg-red-500 py-10">
            <div className="container mx-auto">
                <form className="flex md:flex-row justify-center">
                    <div className="relative">
                        <input type="text" className="w-96 rounded-r-none rounded-full border-transparent appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Email" />
                    </div>
                    <button className="rounded-l-none flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-green-500 rounded-full shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                        Go
                    </button>
                </form>
            </div>
        </section>
    )
}

export default SearchBar;
