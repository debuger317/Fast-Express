import React, { useEffect, useState } from 'react';
import CustomerListDetails from './UserListDetails';

const AllUserList = () => {

    const [userList, setUserList] = useState([]);

    useEffect(() => {
        fetch(`https://fastexpress.herokuapp.com/api/user/alluser`)
            .then(res => res.json())
            .then(data => setUserList(data))
    }, [])
    return (
        <section className="container  mx-auto px-4 sm:px-8">
            <div class="py-8">
                <div class="flex flex-row mb-1 sm:mb-0 justify-between">
                    <h2 class="text-2xl leading-tight">
                        Users Management
                    </h2>
                    <div class="text-end">
                        <form class="flex flex-col md:flex-row   max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                            <div class=" relative ">
                                <input type="text" id="&quot;form-subscribe-Filter" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="name" />
                            </div>
                            <button class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                                Filter
                            </button>
                        </form>
                    </div>
                </div>
                <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table class="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-c text-sm uppercase font-normal">
                                        Photo
                                    </th>
                                    <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                        <div className="flex items-center justify-center">
                                            Name
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                            </svg>
                                        </div>
                                    </th>
                                    <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                        <div className="flex items-center justify-center">
                                            Email
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                            </svg>
                                        </div>
                                    </th>
                                    <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                        <div className="flex items-center justify-center">
                                            Address
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                            </svg>
                                        </div>
                                    </th>
                                    <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-c text-sm uppercase font-normal">
                                        Created at
                                    </th>
                                    <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                        <div className="flex items-center justify-center">
                                            Action
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                            </svg>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    userList.map(list => <CustomerListDetails list={list} key={list._id}></CustomerListDetails>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </section>


    );
};

export default AllUserList;