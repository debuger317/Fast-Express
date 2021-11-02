import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';

const CustomerList = () => {
    const location = useLocation();
    const [customer, setCustomer] = useState([]);
    const Path = location.pathname.split('/')[1];
    const merchant = useSelector((state => state.auth.authdetails._id))

    const GetCustomer = async () => {
        try {
            const res = await axios.get(`https://fastexpress.herokuapp.com/api/order/merchant/${merchant}`)
            setCustomer(res.data);
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        GetCustomer()
    }, [Path])
    return (
        <section class="table w-full p-2">
            <h2 class="text-xl font-semibold uppercase my-5">
                Customer list
            </h2>
            <table class="w-full border">

                <thead>
                    <tr class="bg-gray-50 border-b">
                        <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div class="flex items-center justify-center">
                                Name
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>
                        </th>
                        <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div class="flex items-center justify-center">
                                Email
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>
                        </th>
                        <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div class="flex items-center justify-center">
                                Address
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>
                        </th>
                        <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div class="flex items-center justify-center">
                                City
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>
                        </th>
                        <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div class="flex items-center justify-center">
                                Created at
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>
                        </th>
                        <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div class="flex items-center justify-center">
                                Contact
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customer?.map((customer, index) => (

                            <tr key={index} class="bg-gray-100 text-center border-b text-sm text-gray-600">
                                <td class="p-2 border-r">{customer.fname + ' ' + customer.lname}</td>
                                <td class="p-2 border-r">{customer.usermail}</td>
                                <td class="p-2 border-r">{customer.address}</td>
                                <td class="p-2 border-r">{customer.city}</td>
                                <td class="p-2 border-r">
                                    {new Date(customer.createdAt).toDateString()}
                                </td>
                                <td>
                                    {customer.phone}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </section>
    );
};

export default CustomerList;