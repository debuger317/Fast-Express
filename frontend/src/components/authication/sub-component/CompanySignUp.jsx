import React from 'react';
import { Link } from 'react-router-dom';

const CompanySignUp = () => {
    return (
        <div className="w-1/2">
            <div class="flex flex-col max-w-lg px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10 mx-auto">
                <div class="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
                    Company Signup
                </div>
                <span class="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
                    Already have an account ?
                    <Link to="login" class="text-sm text-blue-500 underline hover:text-blue-700">
                        Log in
                    </Link>
                </span>
                <div class="p-6 mt-8">
                    <form>
                        <div class="flex flex-col mb-2">
                            <div class=" relative ">
                                <input type="text" class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="companyname" placeholder="Your Company Name" />
                            </div>
                        </div>
                        <div class="flex flex-col mb-2">
                            <div class="relative">
                                <input type="email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="email" placeholder="Your Company Email Address" />
                            </div>
                        </div>
                        <div class="flex w-full my-4">
                            <Link to="/new-company/register-form"  class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                SignUp
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CompanySignUp;