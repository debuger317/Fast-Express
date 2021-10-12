import React from 'react';
import { BsGrid, BsListUl } from "react-icons/bs";
import { useSelector } from 'react-redux';
const TopFilterOption = () => {

    const count = useSelector((state) => state.merchant.filtercount)
    const filteredName = useSelector((state) => state.merchant.filterName)

    return (
        <div className="ml-5">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <select class="block w-52 text-gray-700 py-2 px-3 mr-5 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals">
                        <option value="">
                            Select an option
                        </option>
                        <option value="dog">
                            New
                        </option>
                        <option value="cat">
                            Top rated
                        </option>
                        <option value="hamster">
                            Low rated
                        </option>
                    </select>
                    <div>
                        Showing {count} results for {filteredName}
                    </div>
                </div>
                <div className="flex items-center text-dark-900">
                    <BsGrid className="text-lg mx-4 cursor-pointer" />
                    <BsListUl className="text-lg ml-4 cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default TopFilterOption;