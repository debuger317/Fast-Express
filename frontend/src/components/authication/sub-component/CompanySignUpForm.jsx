import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { customAuthAction } from '../../../redux/action/action';
import { CgSpinner } from 'react-icons/cg';
import axios from 'axios';

const CompanySignUpForm = () => {
    const dispatch = useDispatch();

    const [pending, setPending] = useState(false);
    const [error, setError] = useState(false);

    const history = useHistory();

    const { handleSubmit, register } = useForm();
    const onSubmit = async (data) => {
        setError(false);
        const merchantData = {
            email: data.email,
            password: data.password,
            role: "merchant",
        }
        setPending(true)
        try {
            const res = await axios({
                method: 'post',
                url: 'https://fastexpress.herokuapp.com/api/auth/register',
                data: merchantData
            });
            dispatch(customAuthAction(res.data))

            if (res) {
                history.push('/new-company/register-form')
            }
        } catch (err) {
            setError(true);
            setPending(false);
        }
    }

    return (
        <div className="mx-auto mt-16">
            <div className="relative">
                <img class="object-cover center" src="https://i.ibb.co/jzCDFwd/undraw-city-life-gnpr.png" alt="" srcset="" />
            </div>
            <div class="w-1/3 h-4/6 md:absolute z-10 inset-x-0 bottom-0 top-30 flex flex-col px-4 py-8 bg-white rounded shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10 mx-auto">
                <h2 class="text-xl font-semibold text-gray-800 dark:text-white text-center">
                    Company Signup
                </h2>
                <div class="p-6 mt-8">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="flex flex-col mb-2">
                            <div class="relative">
                                <input type="email" class=" rounded border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your Company Email Address" {...register("email")} required />
                            </div>
                        </div>
                        <div class="flex flex-col mb-2">
                            <div class="relative">
                                <input type="password" class=" rounded border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your Company Password" {...register("password")} required />
                            </div>
                        </div>
                        <div class="flex w-full my-4">

                            <button type="submit" class="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none  rounded">
                                {pending ? <CgSpinner class="animate-spin text-xl" /> : "Next Step"}
                            </button>
                        </div>
                        {error && <span style={{ color: 'red', marginTop: '10px' }}>Something went wrong!</span>}
                    </form>
                    <span class="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
                        Already have an account ?
                        <Link to="login" class="text-sm text-blue-500 underline hover:text-blue-700">
                            Log in
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CompanySignUpForm;