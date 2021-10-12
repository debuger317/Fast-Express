import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const CustomerInfoForm = () => {
    const { handleSubmit, register } = useForm();

    const [userinfo, setinfo] = useState({

    })

    const handleSubmit = (data) => {
        setinfo({
            fname: data.fname,
            lname: data.lname,
            address: data.address,
            phone: data.phone,
            email: data.email,
            city: data.city,
            zip: data.zip,
            comment: data.comment,
        })

    }

    console.log(userinfo);
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
                    <input {...register("fName")} type="text" class=" rounded border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="First name" required />
                </div>
                <div class=" relative ">
                    <label for="name-with-label" class="text-gray-700">
                        Last name
                    </label>
                    <input {...register("lName")} type="text" class=" rounded border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="Last name" required />
                </div>
            </div>
            <div class="flex flex-col mb-2">
                <div class=" relative ">
                    <label for="name-with-label" class="text-gray-700">
                        Address
                    </label>
                    <input {...register("address")} type="text" class=" rounded border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="address" required />
                </div>
            </div>
            <div class="flex flex-col mb-2">
                <div class=" relative ">
                    <label for="name-with-label" class="text-gray-700">
                        Phone
                    </label>
                    <input {...register("phone")} type="text" class=" rounded border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="phone" required />
                </div>
            </div>
            <div class="flex flex-col mb-2">
                <div class=" relative ">
                    <label for="name-with-label" class="text-gray-700">
                        Email
                    </label>
                    <input {...register("email")} type="text" class="rounded border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="email" required />
                </div>
            </div>
            <div class="flex gap-4 mb-2">
                <div class=" relative ">
                    <label for="name-with-label" class="text-gray-700">
                        City
                    </label>
                    <input {...register("city")} type="text" class=" rounded border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="City**" required />
                </div>
                <div class=" relative ">
                    <label for="name-with-label" class="text-gray-700">
                        Zip code
                    </label>
                    <input {...register("zip")} type="text" class=" rounded border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="1216" required />
                </div>
            </div>
            <label class="text-gray-700">
                <label for="name-with-label" class="text-gray-700">
                    Comment
                </label>
                <textarea {...register("comment")} class="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="Enter your comment" rows="5" cols="40" required>
                </textarea>
            </label>
        </div>

    );
};

export default CustomerInfoForm;