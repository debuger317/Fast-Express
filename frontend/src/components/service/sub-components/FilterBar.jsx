import React from 'react';

const FilterBar = () => {
    return (
        <div>
            <div>
                <h3 className="uppercase text-gray-700 text-md font-bold">Filter by location name</h3>
            </div>
            <div>
                <label class="text-gray-700 text-md font-bold" for="animals">
                    From
                    <select id="animals" class="block w-52 py-2 my-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals">
                        <option value="">
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
                <label class="text-gray-700 text-md font-bold" for="animals">
                    To
                    <select id="animals" class="block w-52 py-2 mt-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals">
                        <option value="">
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

                <button type="button" class="my-5 py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Get Results
                </button>

            </div>
            <div>
            <div className="mb-5">
                <h3 className="uppercase text-gray-700 text-md font-bold">Filter by item name</h3>
            </div>
                <div>
                    <label class="flex items-center space-x-3 mb-3">
                        <input type="checkbox" name="checked-demo" class=" bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none" />
                        <span class="text-gray-700 dark:text-white font-normal">
                            Blue
                        </span>
                    </label>
                    <label class="flex items-center space-x-3 mb-3">
                        <input type="checkbox" name="checked-demo" class=" bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-pink-500 checked:border-transparent focus:outline-none" />
                        <span class="text-gray-700 dark:text-white font-normal">
                            Pink
                        </span>
                    </label>
                    <label class="flex items-center space-x-3 mb-3">
                        <input type="checkbox" name="checked-demo" class=" bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-green-500 checked:border-transparent focus:outline-none" />
                        <span class="text-gray-700 dark:text-white font-normal">
                            Green
                        </span>
                    </label>
                    <label class="flex items-center space-x-3 mb-3">
                        <input type="checkbox" name="checked-demo" class=" bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-yellow-500 checked:border-transparent focus:outline-none" />
                        <span class="text-gray-700 dark:text-white font-normal">
                            Orange
                        </span>
                    </label>
                    <label class="flex items-center space-x-3 mb-3">
                        <input type="checkbox" name="checked-demo" class=" bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-500 checked:border-transparent focus:outline-none" />
                        <span class="text-gray-700 dark:text-white font-normal">
                            Purple
                        </span>
                    </label>
                    <label class="flex items-center space-x-3 mb-3">
                        <input type="checkbox" name="checked-demo" class=" bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-black checked:border-transparent focus:outline-none" />
                        <span class="text-gray-700 dark:text-white font-normal">
                            Black
                        </span>
                    </label>
                    <label class="flex items-center space-x-3 mb-3">
                        <input type="checkbox" name="checked-demo" class=" bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-indigo-500 checked:border-transparent focus:outline-none" />
                        <span class="text-gray-700 dark:text-white font-normal">
                            Indigo
                        </span>
                    </label>
                    <label class="flex items-center space-x-3 mb-3">
                        <input type="checkbox" name="checked-demo" class=" bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-red-500 checked:border-transparent focus:outline-none" />
                        <span class="text-gray-700 dark:text-white font-normal">
                            Red
                        </span>
                    </label>
                    <label class="flex items-center space-x-3 mb-3">
                        <input type="checkbox" name="checked-demo" class=" bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-gray-500 checked:border-transparent focus:outline-none" />
                        <span class="text-gray-700 dark:text-white font-normal">
                            Gray
                        </span>
                    </label>
                </div>

            </div>
        </div>
    );
};

export default FilterBar;