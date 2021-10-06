import React from 'react';

const CompanyListDetiles = (props) => {
    const { name, email, courierLogo, address, updatedAt, createdAt } = props.list;
    return (

        <tr>
            <td class="px-5  mr-6 py-5 border-b border-gray-200 bg-white text-sm">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <a href="#" class="block relative">
                            <img alt="profil" src={courierLogo} class="mx-auto object-cover rounded-full h-10 w-10 " />
                        </a>
                    </div>
                 
                </div>
            </td>
            <td>
            <div class="ml-4">
                        <p class="text-gray-900 whitespace-no-wrap">
                            {name}
                        </p>
                    </div>
            </td>
         
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                    {email}
                </p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span aria-hidden="true" class="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                    </span>
                    <span class="py-4 block px-6 text-center">
                        {address}
                    </span>
                </span>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">
                    Paypal
                </a>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                    {createdAt}
                </p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                    {updatedAt}
                </p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">

                    Online

                </p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">

                    Delete

                </p>
            </td>
        </tr>

    );
};

export default CompanyListDetiles;