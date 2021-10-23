import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TableRow from './TableRow';
import axios from 'axios';
import { FiCamera } from 'react-icons/fi';
import { useLocation } from 'react-router';
import { filterCategoryAction, getCategoriesAction } from './../../../../redux/action/categories';
import { CgSpinner } from 'react-icons/cg';
// 
const CategoriesTable = () => {
    const [C_photo, setChoto] = useState();
    const [added, setadd] = useState(false);
    const [pending, setPending] = useState(false);
    const [success, setsuccess] = useState(false);
    const [error, seterror] = useState(false);
    const [filter, setFilter] = useState();
    const [CategoryName, setName] = useState();
    const dispatch = useDispatch();
    const location = useLocation();
    const Path = location.pathname.split('/')[1];

    const categories = useSelector((state) => state.categories.items);

    const getCategories = async () => {
        try {
            const res = await axios.get('https://fastexpress.herokuapp.com/api/categories/all');
            dispatch(getCategoriesAction(res.data))
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getCategories()
    }, [Path, success, filter])

    const toggleText = () => {
        setadd(!added)
    };

    //image upload

    const handleImageUpload = (event) => {
        event.preventDefault();
        const imageData = new FormData();
        imageData.set('key', '2cb6728a169bdab0acf628bc5d829c2b');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then((response) => {

                setChoto(response.data.data.display_url);
            })
            .catch((error) => {

            });

    }
    //add new category 

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newCategory = {
            name: CategoryName,
            photo: C_photo
        };
        console.log(newCategory);
        setPending(true)

        try {
            const res = await axios({

                method: 'post',
                url: 'https://fastexpress.herokuapp.com/api/categories/addcategory',
                data: newCategory
            })

            if (res) {
                setsuccess(true);
                setadd(false)
                seterror(false);
                setPending(false)

                console.log('new category added successfully');
            }
        } catch (err) {
            seterror(true);
            setPending(false)

        }

    };

    //handle filter changes 

    const handlefilter = (e) => {
        e.preventDefault();
        dispatch(filterCategoryAction(filter))
    }
    return (

        <div class="container mx-auto px-12 max-w-5xl">
            <div class="py-8">
                <div class="flex flex-row mb-1 sm:mb-0 justify-between w-full">
                    <h2 class="text-md font-semibold uppercase">
                        Category List
                    </h2>
                    <div class="text-end">
                        <form onSubmit={handlefilter} class="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                            <div class="relative">
                                <input type="text" id="&quot;form-subscribe-Filter" class="rounded border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="type any category  name" onChange={e => setFilter(e.target.value)} required />
                            </div>
                            <button class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-red-600 rounded shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-red-200" type="submit">
                                Filter
                            </button>
                        </form>
                    </div>

                </div>
                <div className="text-right">       
                    <button onClick={() => toggleText()} class="text-md my-4 py-1 px-4 bg-red-600 rounded text-white">Add new</button> 
                </div>
                {
                    added && (
                        <div className="w-full">
                            <div className="rounded shadow py-5 flex items-center justify-between">
                                <div className="text-gray-600 mx-10">
                                    <div className="relative">
                                        <img className={`${C_photo ? "w-16 h-16 rounded" : ""}`} src={C_photo ? C_photo : ""} alt="" srcset="" />
                                        <label
                                            class={`${C_photo ? "hidden" : ""} absolute  -top-7 left-2 cursor-pointer`}>
                                            <FiCamera class="text-4xl text-black" />
                                            <input onChange={handleImageUpload} type='file' class="hidden" />
                                            <p class={`${C_photo ? "hidden" : ""}`}>Photo</p>
                                        </label>

                                    </div>
                                </div>
                                <form onSubmit={handleSubmit} class="flex items-center mx-20 w-full">
                                    <div className="w-3/4 mr-5">
                                        <input type="text" class="rounded border-transparent appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="Category name" onBlur={e => setName(e.target.value)} required />
                                    </div>

                                    <button class="w-1/4 px-6 py-2 text-base font-semibold text-white bg-red-600 rounded shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-red-200" type="submit">
                                        {pending ?
                                            <CgSpinner class="animate-spin text-xl mx-auto" /> : "Add New"
                                        }
                                    </button>
                                    <br />
                                    <br />
                                    {error && <p class="absolute text-red-500 text-md text-center pt-20">Something went wrong</p>}
                                </form>

                            </div>

                        </div>
                    )
                }

                <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div class="inline-block min-w-full shadow rounded overflow-hidden">
                        <table class="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        Photo
                                    </th>
                                    <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        Category name
                                    </th>
                                    <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        Created at
                                    </th>
                                    <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        status
                                    </th>
                                    <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-justify text-sm uppercase font-normal">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    categories.map(tdata => (<TableRow data={tdata} />))
                                }
                            </tbody>
                        </table>
                        <div class="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
                            <div class="flex items-center">
                                Pagination
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CategoriesTable;