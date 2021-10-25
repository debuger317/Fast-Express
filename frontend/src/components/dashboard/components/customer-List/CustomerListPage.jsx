import axios from 'axios';
import React from 'react';

const CustomerListPage = ({list}) => {
    const { name, updatedAt, createdAt, photo, city, _id } = list;

    // console.log(list)

    const deleteReview = async () => {
        try {
            await axios.delete(`https://fastexpress.herokuapp.com/api/reviews/${_id}`);
            console.log('Review deleted')
            window.location.replace("/dashboard/manage-reviews");
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <tr>
            <td class="px-5  mr-6 py-5 border-b border-gray-200 bg-white text-sm">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <a href="#" class="block relative">
                            <img alt='photo' src={photo} class="mx-auto object-cover rounded-full h-10 w-10 " />
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
                <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span aria-hidden="true" class="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                    </span>
                    <span class="py-4 block px-6 text-center">
                        {city}
                    </span>
                </span>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                    {new Date(createdAt).toDateString()}
                </p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                    {new Date(updatedAt).toDateString()}
                </p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                    <button onClick={() => deleteReview(_id)}>Delete</button>
                </p>
            </td>
        </tr>

    );
};

export default CustomerListPage;