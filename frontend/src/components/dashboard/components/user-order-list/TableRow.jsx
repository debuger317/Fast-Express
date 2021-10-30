import React from 'react';
import { CgRemove } from "react-icons/cg";
// import { removeCategoryAction } from '../../../../redux/action/categories';
import axios from 'axios';
//
const TableRow = ({ data, index }) => {

    const { _id, p_name, p_photo, createdAt,merchantName, pickupTo, orderStatus } = data;

    //delte a category

    const handleDelete = async () => {

        try {
            const res = await axios.delete(`https://fastexpress.herokuapp.com/api/categories/${_id}`);

            if (res) {
                console.log('data deleted successfully');
            }

        } catch (err) {
            console.log('Not deleted!');

        }
    };

    return (
        <tr class="hover:opacity-70">
            <td class="py-5 border-b border-gray-200 bg-white text-sm">
                <div class="flex items-center">
                    <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap">
                            {1 + index}
                        </p>
                    </div>
                </div>
            </td>
            <td class="py-5 border-b border-gray-200 bg-white text-sm">
                <img alt="profil" src={p_photo} class=" ml-5 rounded-full h-10 w-10 " />
            </td>
            <td class="py-5 border-b border-gray-200 bg-white text-sm">
                <div class="flex items-center">
                    <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap">
                            {p_name}
                        </p>
                    </div>
                </div>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                    {new Date(createdAt).toDateString()}
                </p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                    {merchantName}
                </p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                    {pickupTo}
                </p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span aria-hidden="true" class="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                    </span>
                    <span class="relative">
                        {orderStatus}
                    </span>
                </span>
            </td>
            <td class="pl-6 py-5 border-b border-gray-200 bg-white text-sm">
                <button  class="text-red-600 hover:text-rted-800 px-3 py-1 text-xl">
                    <CgRemove />
                </button>
            </td>
        </tr>
    );
};

export default TableRow;

//onClick={() => { dispatch(removeCategoryAction(_id)); handleDelete() }}