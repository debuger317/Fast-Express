import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Chats from './charts/Chats';

const DailyActivity = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div class="flex items-center">
                        <Chats/>
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
                            <Calendar
                                onChange={onChange}
                                value={value}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DailyActivity;