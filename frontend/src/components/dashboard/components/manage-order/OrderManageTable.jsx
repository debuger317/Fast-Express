import React from 'react';

const OrderManageTable = (props) => {
    const { fname, lname, address, merchantName, orderStatus, p_photo, p_type, pickupFrom, pickupTo, createdAt } = props.list;

    return (
        <tr>
            <td class="px-5  mr-6 py-5 border-b border-gray-200 bg-white text-sm">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <a href="#" class="block relative">
                            <img alt="profil" src={p_photo} class="mx-auto object-cover rounded-full h-10 w-10 " />
                        </a>
                    </div>

                </div>
            </td>
            <td>
                <div class="ml-4">
                    <p class="text-gray-900 whitespace-no-wrap">
                        {fname + "" + lname}
                    </p>
                </div>
            </td>

            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                    {merchantName}
                </p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span class="relative inline-block px-3 py-1 font-semibold leading-tight">
                    <span class="py-4 block text-center">
                        {address}
                    </span>
                </span>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">
                    {p_type}
                </a>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                    {new Date(createdAt).toDateString()}

                </p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                    {pickupFrom}
                </p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                    {orderStatus}
                </p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">

                    {pickupTo}

                </p>
            </td>
        </tr>

    );
};

export default OrderManageTable;