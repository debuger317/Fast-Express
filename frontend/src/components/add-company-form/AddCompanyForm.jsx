import React from 'react';

const AddCompanyForm = () => {
    return (

        <section className="Company__form py-10 bg-gray-50">
            <form className="container w-5/6 mx-auto">
                <div className="px-20 py-10">
                    <div className="flex justify-between items-center my-5">
                        <div>
                            <h1 className="text-gray-500 uppercase text-md font-medium">Add company logo</h1>
                        </div>
                        <div className="flex items-center">
                            <h1 className="text-gray-600 mx-10">
                                <button type="button" className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z">
                                        </path>
                                    </svg>
                                    Upload
                                </button>
                            </h1>
                            <div className="block relative">
                                <img alt="profil" src="https://www.tailwind-kit.com/images/person/1.jpg" className="mx-auto object-cover rounded-full h-16 w-16 " />
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
                <div class="space-y-6">
                    {/* start form */}
                    <div class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <div class="text-md uppercase max-w-md mx-auto w-3/5">
                            <label class="font-medium text-gray-700" for="pickupto">
                                Name of company
                                <div class=" relative ">
                                    <input type="text" class=" border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="Your company name" required />
                                </div>
                            </label>
                        </div>
                        <div class="text-md uppercase max-w-md mx-auto w-3/5">
                            <label class="font-medium text-gray-700" for="pickupto">
                                Company Email
                                <div class=" relative ">
                                    <input type="email" class=" border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="Your Company Email" required />
                                </div>
                            </label>
                        </div>
                    </div>
                    <div class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <div class="text-md uppercase max-w-md mx-auto w-3/5">
                            <label class="font-medium text-gray-700" for="pickupto">
                                Your company website
                                <div class=" relative ">
                                    <input type="text" class=" border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="Your company website" required />
                                </div>
                            </label>
                        </div>
                        <div class="text-md uppercase max-w-md mx-auto w-3/5">
                            <label class="font-medium text-gray-700" for="pickupfrom">
                                Accept whight (kg)
                                <select id="animals" class="block w-full py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="pickupfrom" required>
                                    <option value="">
                                        Select an option
                                    </option>
                                    <option value="homedelivery">
                                        5
                                    </option>
                                    <option value="onlylocation">
                                        10
                                    </option>
                                    <option value="freedelivery">
                                        15
                                    </option>
                                    <option value="freedelivery">
                                        25
                                    </option>
                                    <option value="freedelivery">
                                        30
                                    </option>
                                </select>
                            </label>

                        </div>
                    </div>
                    {/* about company */}
                    <div class="w-3/5 ml-16 text-md uppercase">
                        <div class="col-span-2">
                            <label class=" font-mediumtext-gray-700" for="name">
                                About your company
                                <textarea class="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" id="comment" placeholder="About of your company" name="comment" rows="5" cols="40" required>
                                </textarea>
                            </label>
                        </div>
                    </div>
                    {/* pickup from and pickup to */}
                    <div class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <div class="text-md uppercase max-w-md mx-auto w-3/5">
                            <label class="font-medium text-gray-700" for="pickupfrom">
                                Pickup from
                                <select id="animals" class="block w-full py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="pickupfrom" required>
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
                        <div class="text-md uppercase max-w-md mx-auto w-3/5">
                            <label class="font-medium text-gray-700" for="pickupto">
                                Pickup to
                                <select id="pickupto" class="block w-full py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="pickupto" required>
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

                    {/* delivery system and helpline */}
                    <div class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <div class="text-md uppercase max-w-md mx-auto w-3/5">
                            <label class="font-medium text-gray-700" for="pickupfrom">
                                Delivery by
                                <select id="animals" class="block w-full py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="pickupfrom" required>
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
                        <div class="text-md uppercase max-w-md mx-auto w-3/5">
                            <label class="font-medium text-gray-700" for="pickupto">
                                Helpline number
                                <div class=" relative ">
                                    <input type="text" class=" border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="Your company helpline number" required />
                                </div>
                            </label>
                        </div>
                    </div>
                    {/* choose service category name */}
                    <div className="">
                        <div className="ml-16 my-5">
                            <h1 className="font-medium text-gray-500 uppercase text-md text">Choose your service category</h1>
                        </div>
                        <div class="grid grid-cols-7 gap-5 mx-16">
                            <label class="flex items-center space-x-3 mb-3">
                                <input class="choose__category rounded-lg" type="checkbox" name="checked-demo" />
                                <span class="text-gray-700 dark:text-white font-normal">
                                    Mobile
                                </span>
                            </label>
                            <label class="flex items-center space-x-3 mb-3">
                                <input class="choose__category rounded-lg" type="checkbox" name="checked-demo" />
                                <span class="text-gray-700 dark:text-white font-normal">
                                    Mobile
                                </span>
                            </label>
                            <label class="flex items-center space-x-3 mb-3">
                                <input class="choose__category rounded-lg" type="checkbox" name="checked-demo" />
                                <span class="text-gray-700 dark:text-white font-normal">
                                    Mobile
                                </span>
                            </label>
                            <label class="flex items-center space-x-3 mb-3">
                                <input class="choose__category rounded-lg" type="checkbox" name="checked-demo" />
                                <span class="text-gray-700 dark:text-white font-normal">
                                    Mobile
                                </span>
                            </label>
                            <label class="flex items-center space-x-3 mb-3">
                                <input class="choose__category rounded-lg" type="checkbox" name="checked-demo" />
                                <span class="text-gray-700 dark:text-white font-normal">
                                    Mobile
                                </span>
                            </label>
                            <label class="flex items-center space-x-3 mb-3">
                                <input class="choose__category rounded-lg" type="checkbox" name="checked-demo" />
                                <span class="text-gray-700 dark:text-white font-normal">
                                    Mobile
                                </span>
                            </label>
                            <label class="flex items-center space-x-3 mb-3">
                                <input class="choose__category rounded-lg" type="checkbox" name="checked-demo" />
                                <span class="text-gray-700 dark:text-white font-normal">
                                    Mobile
                                </span>
                            </label>
                            <label class="flex items-center space-x-3 mb-3">
                                <input class="choose__category rounded-lg" type="checkbox" name="checked-demo" />
                                <span class="text-gray-700 dark:text-white font-normal">
                                    Mobile
                                </span>
                            </label>
                            <label class="flex items-center space-x-3 mb-3">
                                <input class="choose__category rounded-lg" type="checkbox" name="checked-demo" />
                                <span class="text-gray-700 dark:text-white font-normal">
                                    Mobile
                                </span>
                            </label>
                            <label class="flex items-center space-x-3 mb-3">
                                <input class="choose__category rounded-lg" type="checkbox" name="checked-demo" />
                                <span class="text-gray-700 dark:text-white font-normal">
                                    Mobile
                                </span>
                            </label>
                            <label class="flex items-center space-x-3 mb-3">
                                <input class="choose__category rounded-lg" type="checkbox" name="checked-demo" />
                                <span class="text-gray-700 dark:text-white font-normal">
                                    Mobile
                                </span>
                            </label>
                            <label class="flex items-center space-x-3 mb-3">
                                <input class="choose__category rounded-lg" type="checkbox" name="checked-demo" />
                                <span class="text-gray-700 dark:text-white font-normal">
                                    Mobile
                                </span>
                            </label>
                            <label class="flex items-center space-x-3 mb-3">
                                <input class="choose__category rounded-lg" type="checkbox" name="checked-demo" />
                                <span class="text-gray-700 dark:text-white font-normal">
                                    Mobile
                                </span>
                            </label>
                            <label class="flex items-center space-x-3 mb-3">
                                <input class="choose__category rounded-lg" type="checkbox" name="checked-demo" />
                                <span class="text-gray-700 dark:text-white font-normal">
                                    Mobile
                                </span>
                            </label>
                            <label class="flex items-center space-x-3 mb-3">
                                <input class="choose__category rounded-lg" type="checkbox" name="checked-demo" />
                                <span class="text-gray-700 dark:text-white font-normal">
                                    Mobile
                                </span>
                            </label>

                        </div>
                    </div>
                </div>
                {/* request button */}
                <div class="flex w-32 ml-auto mx-14">
                    <div>
                        <button type="submit" class="py-2 px-4 my-10 bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Add request
                        </button>
                    </div>
                </div>
            </form>
        </section >

    );
};

export default AddCompanyForm;