import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import axios from 'axios';
import { RemoveuserAction, userlistAction } from './../../../redux/action/users';
import { deleteAuthAction, logOutAction } from './../../../redux/action/action';
import { useForm } from 'react-hook-form';

const Settings = () => {

    const { handleSubmit, register } = useForm();
    const dispatch = useDispatch();
    const [update, setUpdate] = useState(false);
    const authUser = useSelector((state) => state.auth.authdetails);

    var { _id, email } = authUser

    const singleUser = useSelector((state) => state.users?.userlist);

    //auth + user details
    const GetAUserInfo = async () => {
        try {
            const res = await axios.get(`https://fastexpress.herokuapp.com/api/user/${_id}`);

            dispatch(userlistAction(res.data))

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        GetAUserInfo()
    }, [_id])

    const onSubmit = async (data) => {

        const updateUser = {
            photo: "",
            phone: data?.phone,
            address: data?.address,
            
        }

        try {
            //
            var res1 = await axios({
                method: 'put',
                url: `https://fastexpress.herokuapp.com/api/user/${_id}`,
                data: updateUser
            });
            console.log(res1.data);

        }
        catch (err) {
            console.log(err);
        }
        const updatedPassword = {
            email:email,
            password: data?.password,
        }
        console.log(updatedPassword);
        try {
            //
            var res2 = await axios({
                method: 'put',
                url: `https://fastexpress.herokuapp.com/api/auth/${_id}`,
                data: updatedPassword
            });
            console.log(res2.data);

        }
        catch (err) {
            console.log(err);
        }
        if(res1 || res2){

            setUpdate(true)
            dispatch(logOutAction())
        }
        
    }

    //delete user account from database
    const deletedUserAccount = async () => {

        try {
            var res1 = await axios.put(`https://fastexpress.herokuapp.com/api/user/status${_id}`, {

                data: { status: "inactive" }
            });

        } catch (err) {
            console.log('Not deleted!');

        }
        try {
            var res2 = await axios.delete(`https://fastexpress.herokuapp.com/api/auth/${_id}`, { data: { email } });
            console.log(res2.data);

        }
        catch (err) { console.log(err.message) }

        if (res1 && res2) {
            dispatch(deleteAuthAction())
            dispatch(RemoveuserAction())

        }
        else {
            console.log('you can only delete your own account');
        }
    }

    return (
        <Fragment>
            <div class="container mx-auto px-4 mt-8 sm:px-8">
                <div class="py-8">
                    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div class="inline-block min-w-full shadow rounded overflow-hidden">
                            {update ?
                                <div class="flex">
                                    <form onSubmit={handleSubmit(onSubmit)} class="flex flex-col md:flex-row w-full max-w-5xl md:space-x-3 space-y-3 md:space-y-0 justify-center items-center mx-5">
                                        <div class=" relative  py-3">
                                            <input type="text" id="&quot;form-subscribe-Subscribe" class="rounded border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="photo" />
                                        </div>
                                        <div class=" relative  py-3">
                                            <input {...register("phone")} type="text" id="&quot;form-subscribe-Subscribe" class=" rounded border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="phone" />
                                        </div>
                                        <div class=" relative  py-3">
                                            <input {...register("address")} type="text" id="&quot;form-subscribe-Subscribe" class=" rounded border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="address" />
                                        </div>
                                        <div class=" relative  py-3">
                                            <input {...register("password")} type="text" id="&quot;form-subscribe-Subscribe" class=" rounded border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="password" />
                                        </div>
                                        <button class="block px-4 py-2 text-base font-semibold text-white bg-red-600 rounded shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-red-200" type="submit">
                                            Update
                                        </button>
                                    </form>
                                </div>
                                :
                                <table class="min-w-full leading-normal">
                                    <thead>
                                        <tr>
                                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                NAME
                                            </th>
                                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                EMAIL ADDRESS
                                            </th>
                                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                ADDRESS
                                            </th>
                                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                EDIT
                                            </th>
                                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                DELETE
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    {singleUser?.name}
                                                </p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    {singleUser?.email}
                                                </p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    {singleUser?.address}
                                                </p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <span class="relative  inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                    <span aria-hidden="true" class="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                                    </span>
                                                    <button onClick={() => setUpdate(true)} class="relative ">
                                                        <FaEdit />
                                                    </button>
                                                </span>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <span class="relative  inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                    <span aria-hidden="true" class="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                                    </span>
                                                    <button onClick={() => deletedUserAccount()} class="relative ">
                                                        <FaTrashAlt />
                                                    </button>
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            }
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    );

};

export default Settings;