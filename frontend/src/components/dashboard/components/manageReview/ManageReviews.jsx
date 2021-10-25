import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useLocation } from 'react-router';
import ReviewTable from './ReviewTable';
import { fetchReviewAction } from '../../../../redux/action/review';
// 
const ManageReviews = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const Path = location.pathname.split('/')[1];
    const review = useSelector((state) => state.review.item)
    console.log(review);
    const fetchReview = async () => {
        try {
            const res = await axios.get('https://fastexpress.herokuapp.com/api/review/allreviews');
            dispatch(fetchReviewAction(res.data))
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchReview()
    }, [Path])
    return (

        <div class="container mx-auto px-12 max-w-5xl">
            <div class="py-8">
                <div class="flex flex-row mb-1 sm:mb-0 justify-between w-full">
                    <h2 class="text-md font-semibold uppercase">
                        Review List
                    </h2>
                    <div class="text-end">
                        <form class="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                            <div class=" relative ">
                                <input type="text" id="&quot;form-subscribe-Filter" class="rounded border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="type any category  name" />
                            </div>
                            <button class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-red-600 rounded shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-red-200" type="submit">
                                Filter
                            </button>
                        </form>
                    </div>

                </div>
                <div className="text-right">
                    <button class="text-md my-4 py-1 px-4 bg-red-600 rounded text-white">Add new</button>
                </div>
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
                                    review.map(tdata => (<ReviewTable data={tdata} />))
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

export default ManageReviews;