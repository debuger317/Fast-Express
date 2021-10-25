import axios from 'axios';
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { CgSpinner } from 'react-icons/cg';
import { useDispatch } from 'react-redux';
import { customAuthAction } from '../../../redux/action/action';

const UserSignUp = () => {
    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };
    const [error, setError] = useState(false);
    const [pending, setPending] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();
    const { handleSubmit, register } = useForm();
    const onSubmit = async (data) => {
        const userData = {
            name: data.name,
            email: data.email,
            password: data.password,
            role: "user",
        }
        console.log(userData);
        setPending(true)
        try {
            const res = await axios({
                method: 'post',
                url: 'https://fastexpress.herokuapp.com/api/auth/register',
                data: userData
            });
            dispatch(customAuthAction(res.data))

            if (res) {
                history.replace(from)
            }
        } catch (err) {
            setError(true);
            setPending(false);
            console.log(err);
        }
    }

    return (
        <div className="mx-auto w-1/2">
            <div class="flex flex-col max-w-lg px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10 mx-auto">
                <div class="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
                    User Signup
                </div>
                <span class="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
                    Already have an account ?
                    <Link to="login" class="text-sm text-blue-500 underline hover:text-blue-700">
                        Log in
                    </Link>
                </span>
                <div class="p-6 mt-8">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="flex flex-col mb-2">
                            <div class=" relative ">
                                <input type="text" id="create-account-pseudo" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your Full Name"
                                    {...register("name")} />
                            </div>
                        </div>
                        <div class="flex flex-col mb-2">
                            <div class=" relative ">
                                <input type="email" id="create-account-pseudo" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your Email Address"
                                    {...register("email")} />
                            </div>
                        </div>
                        <div class="flex flex-col mb-2">
                            <div class=" relative ">
                                <input type="password" class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder=" Password"
                                    {...register("password")} />
                            </div>
                        </div>
                        <div class="flex w-full my-4">

                            <button type="submit" class="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none rounded">
                                {pending ? <CgSpinner class="animate-spin text-xl" /> : "Sign up"}


                            </button>
                        </div>
                        {error && <span style={{ color: 'red', marginTop: '10px' }}>Something went wrong!</span>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserSignUp;