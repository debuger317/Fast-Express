import React, { useEffect, useState } from 'react';
import axios from "axios";
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { useForm } from 'react-hook-form';

const AddCompanyForm = () => {
    const [courierLogo, setLogo] = useState('')
    const [error, setError] = useState(false)
    const ctegoryData = [
        {
            id: 1,
            name: 'mobile'
        },
        {
            id: 2,
            name: 'laptop'
        },
        {
            id: 3,
            name: 'desktop'
        },
        {
            id: 4,
            name: 'Ipad'
        },
        {
            id: 5,
            name: 'tablet'
        },
        {
            id: 6,
            name: 'tablet'
        },
        {
            id: 7,
            name: 'tablet'
        },
        {
            id: 8,
            name: 'tablet'
        },
        {
            id: 9,
            name: 'tablet'
        },
        {
            id: 10,
            name: 'tablet'
        },
        {
            id: 11,
            name: 'tablet'
        },
    ]
    const { handleSubmit, register } = useForm();

    const onSubmit = async (data) => {
        const companyData = {
            courierLogo: courierLogo,
            name: data.name,
            email: data.email,
            password: data.password,
            website: data.website,
            weight: data.weight,
            address: data.address,
            description: data.description,
            pickupFrom: data.pickupFrom,
            pickupTo: data.pickupTo,
            deliveryOption: data.deliveryOption,
            phone: data.helpline,
            serviceCategory: [
                data.mobile,
                data.laptop,
                data.tablet
            ]
        }
        console.log(companyData);
        try {
            const res = await axios({
                method: 'post',
                url: 'https://fastexpress.herokuapp.com/api/couriers/addcourier',
                data: companyData
            });
            alert("item added");
            console.log(res);
        } catch (err) {
            setError(true);
            console.log(err);
        }

    }

    const handleImageUpload = (event) => {
        event.preventDefault();
        const imageData = new FormData();
        imageData.set('key', '2cb6728a169bdab0acf628bc5d829c2b');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then((response) => {

                setLogo(response.data.data.display_url);
            })
            .catch((error) => {

            });

    }

    return (
        <section class="text-gray-600 body-font">
            <form onSubmit={handleSubmit(onSubmit)}
            >
                <div class="container px-5 py-24 mx-auto flex flex-wrap">

                    <div class="p-4 lg:w-full md:w-full">
                        <div class="my-5">
                            <h1 className="font-medium text-gray-700 font-medium">Add company logo</h1>
                        </div>
                        <div className="md:flex items-center">
                            <div className="block relative">
                                {courierLogo ? <img alt="company_logo" src={courierLogo} className=" rounded h-36 w-36 " /> : <span>loading..</span>}
                            </div>
                            <div className="text-gray-600 mx-10">
                                <label
                                    class="w-32 p-1 flex items-center justify-center rounded-lg shadow tracking-wide border border-blue cursor-pointer bg-red-500 hover:bg-red-600 text-white ease-linear transition-all duration-150">
                                    <AiOutlineCloudUpload class="text-4xl" />
                                    <span class="ml-3 text-center text-base font-semibold">Upload</span>
                                    <input onChange={handleImageUpload} type='file' class="hidden" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/2 md:w-full">
                        <div>
                            <label class="font-medium text-gray-700">
                                Name of company
                                <div>
                                    <input {...register("name")}
                                        type="text" class="rounded  border-transparent flex-1 border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="Your company name" required />
                                </div>
                            </label>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/2 md:w-full">
                        <div>
                            <label class="font-medium text-gray-700">
                                Company Email
                                <div>
                                    <input {...register("email")}
                                        type="email" class="rounded w-full  border-transparent border border-gray-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="Your company email" required />
                                </div>
                            </label>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/2 md:w-full">
                        <div>
                            <label class="font-medium text-gray-700">
                                Password
                                <div>
                                    <input {...register("password")}
                                        type="text" class="rounded  border-transparent flex-1 border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="Your company password" required />
                                </div>
                            </label>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/2 md:w-full">
                        <div>
                            <label class="font-medium text-gray-700">
                                Company address
                                <div>
                                    <input {...register("address")}
                                        type="text" class="rounded  border-transparent flex-1 border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="Your company name" required />
                                </div>
                            </label>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/2 md:w-full">
                        <div>
                            <label class="font-medium text-gray-700">
                                Accept whight (kg)
                                <select {...register("weight")}
                                    class="rounded block w-full py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" required>
                                    <option value="">
                                        Select an option
                                    </option>
                                    <option value="5">
                                        5
                                    </option>
                                    <option value="10">
                                        10
                                    </option>
                                    <option value="15">
                                        15
                                    </option>
                                    <option value="25">
                                        25
                                    </option>
                                    <option value="30">
                                        30
                                    </option>
                                </select>
                            </label>
                        </div>
                    </div>
                    {/*  */}
                    <div class="p-4 lg:w-1/2 md:w-full">
                        <label class="font-medium text-gray-700">
                            Company website name
                            <div class="flex">
                                <span class="rounded-l inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                    http://
                                </span>
                                <input {...register("website")}
                                    type="text" class=" rounded-r flex-1 border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="www.google.com" />
                            </div>
                        </label>
                    </div>
                    {/*  */}
                    <div class="p-4 lg:w-2/3 md:w-full block">
                        <div>
                            <div class="col-span-2">
                                <label class=" font-mediumtext-gray-700">
                                    About your company
                                    <textarea {...register("description")}
                                        class="rounded flex-1 border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="About of your company" rows="5" cols="40" required>
                                    </textarea>
                                </label>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div class="p-4 lg:w-1/2 md:w-full">
                        <div>
                            <label class="font-medium text-gray-700">
                                Pickup from
                                <select {...register("pickupFrom")}
                                    class="rounded block w-full py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" required>
                                    <option value="">
                                        Select an option
                                    </option>
                                    <option value="dhaka">
                                        Dhaka
                                    </option>
                                    <option value="jessore">
                                        Jessore
                                    </option>
                                    <option value="rajshahi">
                                        Rajshahi
                                    </option>
                                    <option value="pabna">
                                        Pabna
                                    </option>
                                    <option value="rangpur">
                                        Rangpur
                                    </option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/2 md:w-full">
                        <div>
                            <label class="font-medium text-gray-700">
                                Pickup to
                                <select {...register("pickupTo")}
                                    class="rounded block w-full py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" required>
                                    <option value="">
                                        Select an option
                                    </option>
                                    <option value="dhaka">
                                        Dhaka
                                    </option>
                                    <option value="jessore">
                                        Jessore
                                    </option>
                                    <option value="rajshahi">
                                        Rajshahi
                                    </option>
                                    <option value="pabna">
                                        Pabna
                                    </option>
                                    <option value="rangpur">
                                        Rangpur
                                    </option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/2 md:w-full">
                        <div>
                            <label class="font-medium text-gray-700">
                                Delivery by
                                <select {...register("deliveryOption")}
                                    class="rounded block w-full py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" required>
                                    <option value="">
                                        Select an option
                                    </option>
                                    <option value="homedelivery">
                                        Home delivery
                                    </option>
                                    <option value="onlylocation">
                                        Only location
                                    </option>
                                    <option value="freedelivery">
                                        Free delivery
                                    </option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/2 md:w-full">
                        <div>
                            <label class="font-medium text-gray-700">
                                Helpline number
                                <div>
                                    <input {...register("helpline")}
                                        type="text" class="rounded border-transparent flex-1 border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="Your company helpline number" required />
                                </div>
                            </label>
                        </div>
                    </div>
                    <div class="p-4 lg:full md:w-full">
                        <div className="my-5">
                            <h1 className="font-medium text-gray-500 uppercase text-md text">Choose your service category</h1>
                        </div>
                        <div class="grid lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-4 gap-5">
                            {ctegoryData.map(d => (
                                <label class="flex items-center space-x-3 mb-3">
                                    <input {...register(`${d.name}`)}
                                        class="w-6 h-6 rounded-lg" type="checkbox" value={d.name} />
                                    <span class="text-gray-700 dark:text-white font-normal">
                                        {d.name}
                                    </span>
                                </label>
                            ))
                            }

                        </div>
                    </div>
                    <div class="p-4 lg:full md:w-full">
                        <div class="flex w-32 ml-auto">
                            <button onClick={() => handleSubmit()} type="submit" class="py-2 px-4 my-10 bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Add request
                            </button>
                        </div>
                    </div>
                    {/* container end */}

                </div>
            </form>
        </section>

    );
};

export default AddCompanyForm;