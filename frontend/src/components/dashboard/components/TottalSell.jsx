import React from 'react';
import TotalViews from './settings/TotalViews';

const TottalSell = () => {
    return (
        <div class="container mx-auto grid grid-cols-2 gap-8 md:grid-cols-4 p-10 text-center">
            <TotalViews />
            <div class="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800">
                <div class="flex items-center">
                    <p class="text-md text-black dark:text-white ml-2">
                        Total Sell
                    </p>
                </div>
                <div class="flex flex-col justify-start">
                    <p class="text-gray-700 dark:text-gray-100 text-4xl text-left font-bold my-4">
                        34,500
                        <span class="text-sm">
                            $
                        </span>
                    </p>
                    <div class="flex items-center text-green-500 text-sm">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z">
                            </path>
                        </svg>
                        <span>
                            5.5%
                        </span>
                        <span class="text-gray-400">
                            vs last month
                        </span>
                    </div>
                </div>
            </div>


            <div class="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800">
                <div class="flex items-center">                    
                    <p class="text-md text-black dark:text-white ml-2">
                        Total Merchant
                    </p>
                </div>
                <div class="flex flex-col justify-start">
                    <p class="text-gray-700 dark:text-gray-100 text-4xl text-left font-bold my-4">
                        34,500
                        <span class="text-sm">
                            +
                        </span>
                    </p>
                    <div class="flex items-center text-green-500 text-sm">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z">
                            </path>
                        </svg>
                        <span>
                            5.5%
                        </span>
                        <span class="text-gray-400">
                            vs last month
                        </span>
                    </div>
                </div>
            </div>
            <div class="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800">
                <div class="flex items-center">
                    <p class="text-md text-black dark:text-white ml-2">
                        Total User
                    </p>
                </div>
                <div class="flex flex-col justify-start">
                    <p class="text-gray-700 dark:text-gray-100 text-4xl text-left font-bold my-4">
                        34,500
                        <span class="text-sm">
                            +
                        </span>
                    </p>
                    <div class="flex items-center text-green-500 text-sm">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z">
                            </path>
                        </svg>
                        <span>
                            5.5%
                        </span>
                        <span class="text-gray-400">
                            vs last month
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TottalSell;