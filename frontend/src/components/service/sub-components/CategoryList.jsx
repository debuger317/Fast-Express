import axios from 'axios';
import React, { useEffect } from 'react';
import { FcCellPhone, FcGraduationCap, FcHome, FcFactory, FcAutomotive } from "react-icons/fc";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesAction } from '../../../redux/action/categories';

const CategoryList = () => {
    const categories = useSelector((state) => state.categories.items)
    console.log(categories);
    const path = useLocation();

    const dispatch = useDispatch();

    const getCategories = async () => {
        try {
            const res = await axios.get('https://fastexpress.herokuapp.com/api/categories/all');
            dispatch(getCategoriesAction(res.data))
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getCategories()
    }, [path])

    return (
        <div className="container mx-auto px-20 py-24">
            <div className="mb-10">
                <h4>Browse items by category</h4>
            </div>
            <div class="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  xl:gap-10 lg:gap-8 sm:gap-3">

                {categories.map(item =>
                    <Link to={`/service/category/${item.name}`} class="p-4 bg-gray-50 shadow-lg rounded-md h-40">
                        <div class="flex flex-col items-center text-center mt-5">
                            <span class="w-16">
                                <img src={item.photo} alt="" srcset="" />
                            </span>
                            <h4 class="font-semibold">{item.name}</h4>
                        </div>
                    </Link>
                )

                }
            </div>
        </div>
    )
}

export default CategoryList;
