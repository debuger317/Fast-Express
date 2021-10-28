import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TableRow from './TableRow';
import axios from 'axios';
import { useLocation } from 'react-router';
import { filterCategoryAction, getCategoriesAction } from './../../../../redux/action/categories';
import { CgSpinner } from 'react-icons/cg';
import ReactPaginate from 'react-paginate';
import './userOrderPagination.css';

// 
const UserOrderTable = () => {

    const [error, seterror] = useState(false);
    const [filter, setFilter] = useState([]);
    const dispatch = useDispatch();
    const location = useLocation();
    const Path = location.pathname.split('/')[1];

    const orders = useSelector((state) => state.categories.items);
    console.log(orders);
    const getCategories = async () => {
        try {
            const res = await axios.get('https://fastexpress.herokuapp.com/api/order/allorder');
            dispatch(getCategoriesAction(res.data))
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getCategories()
    }, [Path])
    const order = (filter.map(a => a));

    const merchantinfo = (filter.map(a => a.merchantinfo));
    const userinfo = (filter.map(a => a.userinfo));
    const PaymentInfo = (userinfo.paymentinfo);

    console.log(order);
    console.log(merchantinfo);
    console.log(userinfo);
    console.log(PaymentInfo);


    //handle filter changes 

    const handlefilter = (e) => {
        e.preventDefault();
        dispatch(filterCategoryAction(filter))
    }
    let serial = 1;
    // pagination
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 5;
    const pagesVisited = pageNumber * usersPerPage;
    const displayUserOrders = orders
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .map(tdata => (<TableRow serial={serial++} data={tdata} />))
    const pageCount = Math.ceil(orders.length / usersPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };
    
    return (

        <div class="container mx-auto px-12 max-w-5xl">
            <div class="py-8">
                <div class="flex flex-row mb-1 sm:mb-0 justify-between w-full">
                    <h2 class="text-md font-semibold uppercase">
                        Your order List
                    </h2>
                    <div class="text-end">
                        <form class="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                            <div class="relative">
                                <input type="text" id="&quot;form-subscribe-Filter" class="rounded border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="type any category  name" onChange={e => setFilter(e.target.value)} required />
                            </div>
                            <button class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-red-600 rounded shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-red-200" type="submit">
                                Filter
                            </button>
                        </form>
                    </div>

                </div>
                <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div class="inline-block min-w-full shadow rounded overflow-hidden">
                        <table class="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        Serial No.
                                    </th>
                                    <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        Orders Photo
                                    </th>
                                    <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        Courier Name
                                    </th>
                                    <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        Ordered at
                                    </th>
                                    <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        Corier Company Name
                                    </th>
                                    <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        Reciver Address
                                    </th>
                                    <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        Delivery status
                                    </th>
                                    <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-justify text-sm uppercase font-normal">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    displayUserOrders
                                }
                            </tbody>
                        </table>
                        <div class="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
                            <div class="flex items-center">
                                <ReactPaginate
                                    previousLabel={"Prev"}
                                    nextLabel={"Next"}
                                    pageCount={pageCount}
                                    onPageChange={changePage}
                                    containerClassName={"paginationBttns"}
                                    previousLinkClassName={"previousBttn"}
                                    nextLinkClassName={"nextBttn"}
                                    disabledClassName={"paginationDisabled"}
                                    activeClassName={"paginationActive"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default UserOrderTable;