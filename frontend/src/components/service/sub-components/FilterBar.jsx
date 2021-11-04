import React, { useState } from 'react';

const FilterBar = () => {
    const [form, setForm] = useState('');
    const [to, setTo] = useState('');

    return (
        <div>
            <div>
                <h3 className="uppercase text-gray-700 text-md font-bold">Filter by location name</h3>
            </div>
            <div>
                <label className="text-gray-700 text-md font-bold">
                    From
                    <select onChange={(e) => setForm(e.target.value)} className="block w-52 py-2 my-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500">
                        <option value="" disabled >
                            Select an location
                        </option>
                        <option value="Dhaka">
                            Dhaka
                        </option>
                        <option value="Khulna">
                            Khulna
                        </option>
                        <option value="Jessore">
                            Jessore
                        </option>
                        <option value="Madaripur">
                            Madaripur
                        </option>
                    </select>
                </label>
                <label className="text-gray-700 text-md font-bold">
                    To
                    <select onChange={(e) => setTo(e.target.value)} className="block w-52 py-2 mt-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500">
                        <option value="" disabled >
                            Select an location
                        </option>
                        <option value="Dhaka">
                            Dhaka
                        </option>
                        <option value="Khulna">
                            Khulna
                        </option>
                        <option value="Jessore">
                            Jessore
                        </option>
                        <option value="Madaripur">
                            Madaripur
                        </option>
                    </select>
                </label>

                <button type="button" className="my-5 py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Get Results
                </button>

            </div>
            <div>
                <div className="mb-5">
                    <h3 className="uppercase text-gray-700 text-md font-bold">Filter by</h3>
                </div>
                <div>
                    <label className="flex items-center space-x-3 mb-3">
                        <input type="checkbox" name="checked-demo" className=" bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none" />
                        <span className="text-gray-700 dark:text-white font-normal">
                            Only by location
                        </span>
                    </label>
                    <label className="flex items-center space-x-3 mb-3">
                        <input type="checkbox" name="checked-demo" className=" bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-pink-500 checked:border-transparent focus:outline-none" />
                        <span className="text-gray-700 dark:text-white font-normal">
                            Home delivery
                        </span>
                    </label>
                    <label className="flex items-center space-x-3 mb-3">
                        <input type="checkbox" name="checked-demo" className=" bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-pink-500 checked:border-transparent focus:outline-none" />
                        <span className="text-gray-700 dark:text-white font-normal">
                            Free delivery
                        </span>
                    </label>
                </div>

            </div>
        </div>
    );
};

export default FilterBar;