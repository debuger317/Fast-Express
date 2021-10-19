import React from 'react';
import { CgRemove } from "react-icons/cg";
import { removeCategoryAction } from '../../../redux/action/categories';
import { useDispatch } from 'react-redux';

const TableRow = (props) => {
    const dispatch = useDispatch();
    const { _id, name, photo } = props.data;
    return (
        <tr>
            <td class="py-5 border-b border-gray-200 bg-white text-sm">
                <img alt="profil" src={photo} class=" ml-5 rounded-full h-10 w-10 " />
            </td>
            <td class="py-5 border-b border-gray-200 bg-white text-sm">
                <div class="flex items-center">
                    <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap">
                            {name}
                        </p>
                    </div>
                </div>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                    12/09/2020
                </p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span aria-hidden="true" class="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                    </span>
                    <span class="relative">
                        active
                    </span>
                </span>
            </td>
            <td class="pl-6 py-5 border-b border-gray-200 bg-white text-sm">
                <button onClick={() => dispatch(removeCategoryAction(_id))} class="text-red-600 hover:text-rted-800 px-3 py-1 text-xl">
                    <CgRemove />
                </button>
            </td>
        </tr>
    );
};

export default TableRow;