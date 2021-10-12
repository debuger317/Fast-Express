import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TotalViews = () => {
    const [count, setCount] = useState(0)
    const getCategories = async () => {
        try {
            const res = await axios.get('https://api.countapi.xyz/update/f-express/courier/?amount=1');
            setCount(res.data.value)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getCategories()
    }, [])

    return (
        <div class="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800">
            <div class="flex items-center">
                <p class="text-md text-black dark:text-white ml-2">
                    Total Visitor
                </p>
            </div>
            <div class="flex flex-col justify-start">
                <p class="text-gray-700 dark:text-gray-100 text-4xl text-left font-bold my-4">
                    {count}
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
                        increase last month
                    </span>
                </div>
            </div>
        </div>

    );
};

export default TotalViews;