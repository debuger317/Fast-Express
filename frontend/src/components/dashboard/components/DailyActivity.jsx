import React from 'react';

const DailyActivity = () => {
    return (
        <div class="flex items-center">
            <div class="w-3/5 mx-10 p-6 bg-white shadow-lg rounded-lg flex justify-between dark:bg-gray-800 md:items-center md:flex-row flex-col gap-5">
                <div>
                    <span class="text-bold text-gray-700 dark:text-gray-400 block">
                        Total Cases
                    </span>
                    <span class="text-yellow-500 text-4xl md:text-5xl mt-2 font-black block">
                        75,858,724
                    </span>
                </div>
                <div>
                    <div class="md:text-right text-left md:block">
                        <p class="text-xl md:mb-2 mb-0 dark:text-gray-100 flex items-center increase">
                            <svg width="20" height="20" fill="currentColor" class="h-6 w-6 text-red-500 mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                </path>
                            </svg>
                            1.2% increase
                        </p>
                    </div>
                    <p class="text-lg text-gray-600 md:text-right text-left dark:text-gray-400 md:block inline-block md:mb-0">
                        from yesterday (+906,503)
                    </p>
                </div>
            </div>

            <div class="w-2/2 shadow-lg rounded-2xl p-4 mr-10 bg-white dark:bg-gray-700">
                <div class="flex flex-wrap overflow-hidden">
                    <div class="w-full rounded shadow-sm">
                        <div class="flex items-center justify-between mb-4">
                            <div class="text-left font-bold text-xl text-black dark:text-white">
                                Dec 2021
                            </div>
                            <div class="flex space-x-4">
                                <button class="p-2 rounded-full bg-blue-500 text-white">
                                    <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z">
                                        </path>
                                    </svg>
                                </button>
                                <button class="p-2 rounded-full bg-blue-500 text-white">
                                    <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M10 19a1 1 0 0 1-.64-.23a1 1 0 0 1-.13-1.41L13.71 12L9.39 6.63a1 1 0 0 1 .15-1.41a1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="-mx-2">
                            <table class="w-full dark:text-white">
                                <tr>
                                    <th class="py-3 px-2 md:px-3 ">
                                        S
                                    </th>
                                    <th class="py-3 px-2 md:px-3 ">
                                        M
                                    </th>
                                    <th class="py-3 px-2 md:px-3 ">
                                        T
                                    </th>
                                    <th class="py-3 px-2 md:px-3 ">
                                        W
                                    </th>
                                    <th class="py-3 px-2 md:px-3 ">
                                        T
                                    </th>
                                    <th class="py-3 px-2 md:px-3 ">
                                        F
                                    </th>
                                    <th class="py-3 px-2 md:px-3 ">
                                        S
                                    </th>
                                </tr>
                                <tr class="text-gray-400 dark:text-gray-500">
                                    <td class="py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500">
                                        25
                                    </td>
                                    <td class="py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500">
                                        26
                                    </td>
                                    <td class="py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500">
                                        27
                                    </td>
                                    <td class="py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500">
                                        28
                                    </td>
                                    <td class="py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500">
                                        29
                                    </td>
                                    <td class="py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500">
                                        30
                                    </td>
                                    <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center text-gray-800 cursor-pointer">
                                        1
                                    </td>
                                </tr>
                                <tr>
                                    <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                        2
                                    </td>
                                    <td class="py-3 relative px-1  hover:text-blue-500 text-center cursor-pointer">
                                        3
                                        <span class="absolute rounded-full h-2 w-2 bg-blue-500 bottom-0 left-1/2 transform -translate-x-1/2">
                                        </span>
                                    </td>
                                    <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                        4
                                    </td>
                                    <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                        5
                                    </td>
                                    <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                        6
                                    </td>
                                    <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                        7
                                    </td>
                                    <td class="py-3 px-2 md:px-3 md:px-2 relative lg:px-3 hover:text-blue-500 text-center cursor-pointer">
                                        8
                                        <span class="absolute rounded-full h-2 w-2 bg-yellow-500 bottom-0 left-1/2 transform -translate-x-1/2">
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                        9
                                    </td>
                                    <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                        10
                                    </td>
                                    <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                        11
                                    </td>
                                    <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                        12
                                    </td>
                                    <td class="py-3 px-2 md:px-3  text-center text-white cursor-pointer">
                                        <span class="p-2 rounded-full bg-blue-500">
                                            13
                                        </span>
                                    </td>
                                    <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                        14
                                    </td>
                                    <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                        15
                                    </td>
                                </tr>
                                <tr>
                                    <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                        16
                                    </td>
                                    <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                        17
                                    </td>
                                    <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                        18
                                    </td>
                                    <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                        19
                                    </td>
                                    <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                        20
                                    </td>
                                    <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                        21
                                    </td>
                                    <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                        22
                                    </td>
                                </tr>
                                <tr>
                                    <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                        23
                                    </td>
                                    <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                        24
                                    </td>
                                    <td class="py-3 px-2 md:px-3  hover:text-blue-500 relative text-center cursor-pointer">
                                        25
                                        <span class="absolute rounded-full h-2 w-2 bg-red-500 bottom-0 left-1/2 transform -translate-x-1/2">
                                        </span>
                                    </td>
                                    <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                        26
                                    </td>
                                    <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                        27
                                    </td>
                                    <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                        28
                                    </td>
                                    <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                        29
                                    </td>
                                </tr>
                                <tr>
                                    <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                        30
                                    </td>
                                    <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                        31
                                    </td>
                                    <td>
                                    </td>
                                    <td>
                                    </td>
                                    <td>
                                    </td>
                                    <td>
                                    </td>
                                    <td>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DailyActivity;