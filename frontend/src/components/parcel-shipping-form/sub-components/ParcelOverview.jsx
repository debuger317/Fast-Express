import axios from 'axios';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { useFormContext } from "react-hook-form";
import { PhotoUrlAction } from '../../../redux/action/users';

const ParcelOverview = () => {
    const [p_logo, setPLogo] = useState();
    const dispatch = useDispatch();
    const methods = useFormContext();
    const MerchantOverview = useSelector(state => state.merchant.selectedMerchant);

    const { name, logo, pickupFrom, pickupTo,description } = MerchantOverview;

    //handle imgae upload
    const handleImageUpload = (event) => {
        event.preventDefault();
        const imageData = new FormData();
        imageData.set('key', '2cb6728a169bdab0acf628bc5d829c2b');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then((response) => {

                setPLogo(response.data.data.display_url);
                //send photo to redux store
                dispatch(PhotoUrlAction(response.data.data.display_url))
            })
            .catch((error) => {

            });

    }

    return (
        <div class="shadow bg-white dark:bg-gray-700 relative overflow-hidden mr-10">
            <h2 class="text-xl font-semibold ml-5 py-2">2. Delivery overview</h2>
            <div class="overflow-hidden">
                <div class="w-40 mx-10">
                    <img src={logo} alt="" srcset="" />
                </div>
                <div className="mx-10">
                    <p>{description}</p>
                </div>
                <div class="p-4 mx-10">
                    <h1 class="text-gray-900 font-bold text-2xl mb-3">
                        {name}
                    </h1>
                    <div class="flex item-center mt-3">
                        <span class="capitalize mr-5">Pick from: {pickupFrom}</span>
                        <span class="capitalize">Pick to: {pickupTo}</span>
                    </div>
                </div>
            </div>
            <h2 class="text-xl font-semibold ml-5 py-2">Your parcel overview</h2>
            <div className="md:flex m-3">
                <div className="w-1/2">
                    <h2 class="text-md font-semibold ml-5 py-2">1. Upload your parcel Photo</h2>
                    <div className="md:flex items-center">
                        <div className="block relative mt-5">
                            {p_logo ? <img alt="company_logo" src={p_logo} className=" rounded h-36 w-36 " /> : <img alt="company_logo" src="https://i.ibb.co/Cm61Z60/instagram.png" className=" rounded h-16 w-16 " />}
                        </div>
                        <div className="text-gray-600 mx-10 mt-5">
                            <label
                                class="w-32 p-1 flex items-center justify-center rounded-lg shadow tracking-wide border border-blue cursor-pointer bg-red-500 hover:bg-red-600 text-white ease-linear transition-all duration-150">
                                <AiOutlineCloudUpload class="text-4xl" />
                                <span class="ml-3 text-center text-base font-semibold">Upload</span>
                                <input onChange={handleImageUpload} type='file' class="hidden" />
                            </label>
                        </div>
                    </div>
                </div>
                <div class="w-1/2">
                    <h2 class="text-md font-semibold ml-5 py-2">2. About your parcel details</h2>
                    <div className="mx-5 pb-5">
                        <div class="relative">
                            <label for="name-with-label" class="text-gray-700">
                                Parcel name
                            </label>
                            <input {...methods.register("parcelName")} type="text" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="parcel name" required />
                        </div>

                        <div class="relative mt-3">
                            <label for="name-with-label" class="text-gray-700">
                                parcel type
                            </label>
                            <input {...methods.register("parceltype")} type="text" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="type" required />
                        </div>

                        <div class="relative mt-3">
                            <label for="name-with-label" class="text-gray-700">
                                parcel weight
                            </label>
                            <input {...methods.register("parcelweight")} type="text" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="weight" required />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParcelOverview;