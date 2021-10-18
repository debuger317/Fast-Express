import React, { useEffect, useState } from 'react';
import CompanyListDetiles from './CompanyListDetiles';

const CompanyList = () => {

    const [clist, setClist] = useState([]);

    console.log(clist);

    useEffect(() => {
        fetch(`https://fastexpress.herokuapp.com/api/merchant/all`)
            .then(res => res.json())
            .then(data => setClist(data))
    }, [])
    return (
        <section className="container w-full mx-auto px-4 sm:px-8 max-w-8xl">

            <div class="py-8">
                <div class="flex flex-row mb-1 sm:mb-0 justify-between">
                    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table class="min-w-full leading-normal">
                                <thead>
                                    <tr className="bg-gray-50 border-b">
                                        <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                            <div className="flex items-center justify-center">
                                                ID
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                                </svg>
                                            </div>
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
                                        <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                            <div className="flex items-center justify-center">
                                                Merchant
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                                </svg>
                                            </div>
                                        </th>
                                        <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                            <div className="flex items-center justify-center">
                                                Created
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                                </svg>
                                            </div>
                                        </th>
                                        <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                            <div className="flex items-center justify-center">
                                                Updated
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                                </svg>
                                            </div>
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
                                        clist.map(c => (<CompanyListDetiles list={c} />))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default CompanyList;