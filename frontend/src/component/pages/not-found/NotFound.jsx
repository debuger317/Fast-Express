import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (

        <div className="container mt-5 mx-auto bg-white dark:bg-gray-800 overflow-hidden">
            <div className="flex items-center justify-center">
                <div className="w-1/2 mx-10">
                    <img src="https://i.ibb.co/7RxSp91/fast-express-error.png" className="" />
                </div>
                <div className="text-start w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                    <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                        <span className="block pb-4">
                            Oops!
                        </span>
                        <span className="block text-indigo-500">
                            Nothing here
                        </span>
                    </h2>
                    <p className="text-xl mt-4 text-gray-400">
                        Uh oh, we can't seem to find the page you're looking for. try going back to previous page or contact us for more information.</p>
                    <div className="lg:mt-0 lg:flex-shrink-0">
                        <div className="mt-12 inline-flex rounded-xl shadow">
                            <Link to="/" className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Back to home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NotFound;
