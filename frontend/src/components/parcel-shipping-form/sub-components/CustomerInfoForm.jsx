import React from 'react';
import { useFormContext } from "react-hook-form";
import { useSelector } from 'react-redux';

const CustomerInfoForm = () => {
    const methods = useFormContext();
    const user = useSelector((state) => state.auth.authdetails)
    return (
        <div class="px-5 mr-10 mt-6 py-10 bg-white rounded shadow dark:bg-gray-800">
            <div class="mb-3 text-lg font-semibold uppercase text-gray-800 dark:text-white">
                1. Customer Information
            </div>
            <div class="flex gap-4 mb-2">
                <div class=" relative ">
                    <label for="name-with-label" class="text-gray-700">
                        First name
                    </label>
                    <input   {...methods.register("fName")} type="text" class=" rounded border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"  placeholder="First name"  />
                </div>
                <div class=" relative ">
                    <label for="name-with-label" class="text-gray-700">
                        Last name
                    </label>
                    <input {...methods.register("lName")} type="text" class=" rounded border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="Last name"  />
                </div>
            </div>
            <div class="flex flex-col mb-2">
                <div class=" relative ">
                    <label for="name-with-label" class="text-gray-700">
                        Address
                    </label>
                    <input {...methods.register("address")} type="text" class=" rounded border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="address"  />
                </div>
            </div>
            <div class="flex flex-col mb-2">
                <div class=" relative ">
                    <label for="name-with-label" class="text-gray-700">
                        Phone
                    </label>
                    <input {...methods.register("phone")} type="text" class=" rounded border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="phone"  />
                </div>
            </div>
            <div class="flex flex-col mb-2">
                <div class=" relative ">
                    <label for="name-with-label" class="text-gray-700">
                        Email
                    </label>
                    <input {...methods.register("email")} type="text" class="rounded border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" value={user.email} placeholder="email"  />
                </div>
            </div>
            <div class="flex gap-4 mb-2">
                <div class=" relative ">
                    <label for="name-with-label" class="text-gray-700">
                        Pickup form
                    </label>
                    <input {...methods.register("pickupform")} type="text" class=" rounded border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="Jessore"  />
                </div>
                <div class=" relative ">
                    <label for="name-with-label" class="text-gray-700">
                        Pickup to
                    </label>
                    <input {...methods.register("pickupto")} type="text" class=" rounded border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="Dhaka"  />
                </div>
            </div>
            <div class="flex gap-4 mb-2">
                <div class=" relative ">
                    <label for="name-with-label" class="text-gray-700">
                        City
                    </label>
                    <input {...methods.register("city")} type="text" class=" rounded border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="City"  />
                </div>
                <div class=" relative ">
                    <label for="name-with-label" class="text-gray-700">
                        Zip code
                    </label>
                    <input {...methods.register("zip")} type="text" class=" rounded border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="1234"  />
                </div>
            </div>
            <label class="text-gray-700">
                <label for="name-with-label" class="text-gray-700">
                    Comment
                </label>
                <textarea {...methods.register("comment")} class="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="Enter your Instruction" rows="5" cols="40" >
                </textarea>
            </label>
        </div>

    );
};

export default CustomerInfoForm;