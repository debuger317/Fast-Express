import axios from 'axios';
import React from 'react';

<<<<<<< HEAD:frontend/src/components/dashboard/components/ManageUser/UserPaymentDetails.jsx
const UserPaymentDetails = ({data}) => {
    return (
        <tr>
=======
const CustomerListDetails = (props) => {
    const { name, email, photo, address, updatedAt, createdAt, _id } = props.list;

    const deleteUser = async () => {
        try{
            await axios.delete(`https://fastexpress.herokuapp.com/api/user/${_id}`)
            console.log("user deleted")
            window.location.replace("/dashboard/userlist");
        }
        catch(err){
            console.log(err)
        }
    }
    return (
        <tr>
            <td class="px-5 mr-6 py-5 border-b border-gray-200 bg-white text-sm">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <a href="#" class="block relative">
                            <img alt="profil" src={photo} class="mx-auto object-cover rounded-full h-10 w-10 " />
                        </a>
                    </div>

                </div>
            </td>
            <td>
                <div class="ml-4">
                    <p class="text-gray-900 whitespace-no-wrap">
                        {name}
                    </p>
                </div>
            </td>

>>>>>>> 79ed42eb49c6b94ad198712db085ae479a7e7675:frontend/src/components/dashboard/components/ManageUser/CustomerListDetails.jsx
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                    {data._id}
                </p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
<<<<<<< HEAD:frontend/src/components/dashboard/components/ManageUser/UserPaymentDetails.jsx
=======
                <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span aria-hidden="true" class="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                    </span>
                    <span class="py-4 block px-6 text-center">
                        {address}
                    </span>
                </span>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
>>>>>>> 79ed42eb49c6b94ad198712db085ae479a7e7675:frontend/src/components/dashboard/components/ManageUser/CustomerListDetails.jsx
                <p class="text-gray-900 whitespace-no-wrap">
                    {data.merchantinfo[0].name}
                </p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                    {data.userinfo[0].paymentinfo[0].paymentType}
                </p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                    #pay23102152
                </p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
<<<<<<< HEAD:frontend/src/components/dashboard/components/ManageUser/UserPaymentDetails.jsx
                    {data.createdAt}
=======
                    <button onClick={() => deleteUser(_id)}>Delete</button>
>>>>>>> 79ed42eb49c6b94ad198712db085ae479a7e7675:frontend/src/components/dashboard/components/ManageUser/CustomerListDetails.jsx
                </p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span aria-hidden="true" class="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                    </span>
                    <span class="relative">
                        DONE
                    </span>
                </span>
            </td>
        </tr>
    );
};

export default UserPaymentDetails;