import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router';

const CustomerOrderList = () => {
    const location = useLocation();
    const [order, setOrder] = useState([]);

    const Path = location.pathname.split('/')[1];

    const GetOrder = async () => {
        try {
            const res = await axios.get('https://fastexpress.herokuapp.com/api/order/allorder')
            setOrder(res.data);
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        GetOrder()
    }, [Path])
    return (
        <section class="table w-full p-2">
            <h2 class="text-xl font-semibold uppercase my-5">
                Customer order list
            </h2>
            <table class="w-full border">
                <thead>
                    <tr class="bg-gray-50 border-b">
                        <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div class="flex items-center justify-center">
                                Photo
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>
                        </th>


                        <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div class="flex items-center justify-center">
                                Delivery by
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>
                        </th>
                        <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div class="flex items-center justify-center">
                                status
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>
                        </th>
                        <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div class="flex items-center justify-center">
                                Parcel name
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>
                        </th>
                        <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div class="flex items-center justify-center">
                                Type
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>
                        </th>
                        <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div class="flex items-center justify-center">
                                Weight
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
                        <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div class="flex items-center justify-center">
                                City name
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>
                        </th>
                        <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div class="flex items-center justify-center">
                                Zip code
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {order?.map((data, index) => (
                        <tr key={index} class="bg-gray-100 text-center border-b text-sm text-gray-600">
                            <td class="p-2 border-r">
                                <img class="w-16 h-16" src={data.p_photo} alt="" srcset="" />
                            </td>

                            <td class="p-2 border-r">{data.deliverytype}</td>
                            <td class="p-2 border-r">
                                <select class="block w-30 text-gray-700 mx-auto py-2 px-3 border  rounded shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals">
                                    <option value="">
                                        {data.orderStatus}
                                    </option>
                                    <option value=" OnGoing">
                                        OnGoing
                                    </option>
                                    <option value=" Panding">
                                        Panding
                                    </option>
                                    <option value="Done">
                                        Done
                                    </option>

                                </select>
                            </td>
                            <td class="p-2 border-r">{data.p_name}</td>
                            <td class="p-2 border-r">{data.p_type}</td>

                            <td class="p-2 border-r">{data.p_weight}</td>
                            <td class="p-2 border-r">{data.phone}</td>
                            <td class="p-2 border-r">{data.city}</td>

                            <td class="p-2 border-r">{data.zip}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </section>
    );
};

export default CustomerOrderList;

//address: "Dhakasd-1216bbb"
// city: "Jhenaidah"
// createdAt: "2021-10-26T14:12:23.467Z"
// deliverytype: "location"
// fname: "Mr"
// lname: "Cat"
// merchantId: "61761dc5c7f1b624d4f5fa89"
// merchantName: "Royal Dytch"
// merchantmail: "dutch@gmail.com"
// orderStatus: "pending"
// p_name: "Dog Food"
// p_photo: "https://i.ibb.co/pJQJvSv/kazi-shop-15.jpg"
// p_type: "Food"
// p_weight: 13
// phone: 1111111
// pickupFrom: "Dhaka"
// pickupTo: "Jessore"
// updatedAt: "2021-10-26T14:12:23.467Z"
// userId: "6177fc7f92fb501576ddf66f"
// usermail: "cat@gmail.com"
// zip: "11234"