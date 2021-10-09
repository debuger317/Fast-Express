import React, { useEffect, useState } from 'react';
import CompanyListDetiles from './CompanyListDetiles';

const CompanyList = () => {
    const [clist, setClist] = useState([]);
    console.log(clist);
    useEffect(() => {
        fetch(`https://fastexpress.herokuapp.com/api/couriers/all`)
            .then(res => res.json())
            .then(data => setClist(data))
    }, [])
    return (
        <section className="container w-5/6 mx-auto px-4 sm:px-8 max-w-6xl">

            <div class="py-8">
                <div class="flex flex-row mb-1 sm:mb-0 justify-between">
                    <h2 class="text-2xl leading-tight">
                        Company Managment
                    </h2>
                    <div class="text-end">
                        <form class="flex flex-col md:flex-row   max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                            <div class=" relative ">
                                <input type="text" id="&quot;form-subscribe-Filter" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="name" />
                            </div>
                            <button class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
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
                                        Logo
                                    </th>
                                    <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-c text-sm uppercase font-normal">
                                        Name
                                    </th>
                                    <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-c text-sm uppercase font-normal">
                                        Email
                                    </th>
                                    <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-c text-sm uppercase font-normal">
                                        Address
                                    </th>
                                    <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-c text-sm uppercase font-normal">
                                        Merchant
                                    </th>
                                    <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-c text-sm uppercase font-normal">
                                        Created at
                                    </th>
                                    <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-c text-sm uppercase font-normal">
                                        Updated at
                                    </th>
                                    <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-c text-sm uppercase font-normal">
                                        status
                                    </th>
                                    <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-c text-sm uppercase font-normal">
                                        Remove
                                    </th>
                                </tr>
                            </thead>
                            <tbody>

                                {

                                    clist.map(list => <CompanyListDetiles list={list} key={list._id}></CompanyListDetiles>)

                                }
                            </tbody>
                        </table>
                        <div class="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
                            <div class="flex items-center">
                                <button type="button" class="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100">
                                    <svg width="9" fill="currentColor" height="8" class="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
                                        </path>
                                    </svg>
                                </button>
                                <button type="button" class="w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 ">
                                    1
                                </button>
                                <button type="button" class="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
                                    2
                                </button>
                                <button type="button" class="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100">
                                    3
                                </button>
                                <button type="button" class="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
                                    4
                                </button>
                                <button type="button" class="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100">
                                    <svg width="9" fill="currentColor" height="8" class="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default CompanyList;