import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { CgSpinner } from 'react-icons/cg';
import { FiCamera } from 'react-icons/fi';
import Fade from 'react-reveal/Fade';

const DeliveryManList = () => {
    const location = useLocation();
    const [customer, setCustomer] = useState([]);
    const Path = location.pathname.split('/')[1];
    const [added, setadd] = useState(false);
    const [pending, setPending] = useState(false);
    const [error, seterror] = useState(false);
    const [success, setsuccess] = useState(false);
    const [C_photo, setPhoto] = useState();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('')
    const [pickup, setPickup] = useState('');
    const [drop, setDrop] = useState('');


    //  boy fetch 
    const GetCustomer = async () => {
        try {
            const res = await axios.get('https://fastexpress.herokuapp.com/api/delivery/boy/allboy')
            setCustomer(res.data);
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        GetCustomer()
    }, [Path, customer])

    // toggle 
    const toggleText = () => {
        setadd(!added)
    };
    // image upload 
    const handleImageUpload = (event) => {
        event.preventDefault();
        const imageData = new FormData();
        imageData.set('key', '2cb6728a169bdab0acf628bc5d829c2b');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then((response) => {

                setPhoto(response.data.data.display_url);
            })
            .catch((error) => {

            });
    }
    //  form handle 
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newCategory = {
            boy_name: name,
            photo: C_photo,
            email: email,
            phone: phone,
            PickupForm: pickup,
            PickupTo: drop
        };
        console.log(newCategory);
        setPending(true)

        try {
            const res = await axios({

                method: 'post',
                url: 'https://fastexpress.herokuapp.com/api/delivery/boy/addboy',
                data: newCategory
            })

            if (res) {
                setsuccess(true);
                setadd(false)
                seterror(false);
                setPending(false)
                setPhoto('')
            }
        } catch (err) {
            seterror(true);
            setPending(false)

        }
    };

    return (
        <section class="table w-full p-2 px-10">
            <div className="flex justify-between">
                <span class="text-xl font-semibold uppercase my-5">
                    All delivery boy list
                </span>

                <span className="text-right">
                    <button onClick={() => toggleText()} class="text-md my-4 py-1 px-4 bg-red-600 rounded text-white">{added ? "Close" : "Add new"}</button>
                </span>
            </div>

            {added && (
                <Fade top duration={400} distance="60px">
                    <div className="w-full">
                        <div className="rounded shadow py-5 flex items-center justify-between">
                            <div className="text-gray-600 mx-10">
                                <div className="relative">
                                    <img className={`${C_photo ? "w-10 h-10 rounded" : ""}`} src={C_photo ? C_photo : ""} alt="" srcset="" />
                                    <label
                                        class={`${C_photo ? "hidden" : ""} absolute  -top-7 left-2 cursor-pointer`}>
                                        <FiCamera class="text-4xl text-black" />
                                        <input onChange={handleImageUpload} type='file' class="hidden" />
                                        <p class={`${C_photo ? "hidden" : ""}`}>Photo</p>
                                    </label>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit} class="flex items-center mx-20 w-full">
                                <div className="w-3/4 mr-5 flex">
                                    <div>
                                        <input type="text" class="rounded border-transparent appearance-none border border-gray-300 py-2 px-4 mb-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="Name" onBlur={e => setName(e.target.value)} required />
                                        <input type="text" class="rounded border-transparent appearance-none border border-gray-300 py-2 px-4 mb-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="Email" onBlur={e => setEmail(e.target.value)} required />
                                        <input type="text" class="rounded border-transparent appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="Phone" onBlur={e => setPhone(e.target.value)} required />
                                    </div>
                                    <div>
                                        <input type="text" class="rounded border-transparent appearance-none border border-gray-300 py-2 px-4 mb-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="Pickup From" onBlur={e => setPickup(e.target.value)} required />
                                        <input type="text" class="rounded border-transparent appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="Drop To" onBlur={e => setDrop(e.target.value)} required />
                                    </div>
                                </div>

                                <button class="w-1/4 px-6 py-2 text-base font-semibold text-white bg-red-600 rounded shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-red-200" type="submit">
                                    {pending ?
                                        <CgSpinner class="animate-spin text-xl mx-auto" /> : "Add New"
                                    }
                                </button>
                                <br />
                                {error && <p class="absolute text-red-500 text-md text-center pt-20">Something went wrong</p>}
                            </form>

                        </div>

                    </div>
                </Fade>
            )}


            <table class="w-full border">

                <thead>
                    <tr class="bg-gray-50 border-b">
                        <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div class="flex items-center justify-center">
                                Name
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>
                        </th>
                        <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div class="flex items-center justify-center">
                                Email
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>
                        </th>
                        <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div class="flex items-center justify-center">
                                Pickup From
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>
                        </th>
                        <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div class="flex items-center justify-center">
                                Drop To
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>
                        </th>
                        <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div class="flex items-center justify-center">
                                Created at
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>
                        </th>
                        <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div class="flex items-center justify-center">
                                Contact
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customer?.map((customer, index) => (

                            <tr key={index} class="bg-gray-100 text-center border-b text-sm text-gray-600">
                                <td class="p-2 mb-2 border-r">{customer.boy_name}</td>
                                <td class="p-2 border-r">{customer.email}</td>
                                <td class="p-2 border-r">{customer.PickupForm}</td>
                                <td class="p-2 border-r">{customer.PickupTo}</td>
                                <td class="p-2 border-r">{new Date(customer.createdAt).toDateString()}</td>
                                <td>{customer.phone}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </section>
    );
};

export default DeliveryManList;
