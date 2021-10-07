import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/Fast-Express.PNG';

const SideBar = () => {

    // http://localhost:5500/api/admin/all

    const [lebel, setLebel] = useState([])

    const getAdmin = async () => {
        try {
            const res = await axios.get('http://localhost:5500/api/admin/all');
            setLebel(res.data)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getAdmin()
    }, [])

    return (
        <div class="lg:block  ml-4 relative">
            <div class="h-screen bg-white dark:bg-gray-700 border-r border-gray-100">
                <Link to='/dashboard' class="flex items-center justify-center">
                    <img class="px-5 pr-10 pt-5" src={Logo} alt="" srcset="" />
                </Link>

                <nav class="mt-6">
                    <div>
                        <Link to="/dashboard" class="w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500">
                    
                            <span class="mx-4 text-sm font-normal">
                                Dashboard
                            </span>
                        </Link>
                        <Link to="/dashboard/orderlist" class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500">
                      
                            <span class="mx-4 text-sm font-normal">
                                Order List
                            </span>
                        </Link>
                        <Link to="/dashboard/userlist" class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500">
                            
                            <span class="mx-4 text-sm font-normal">
                                User List
                            </span>
                        </Link>
                        <Link to="/dashboard/companylist" class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500">
                           
                            <span class="mx-4 text-sm font-normal">
                                Company List
                            </span>
                        </Link>
                        <Link to="/dashboard/pending-company" class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500">
                          
                            <span class="mx-4 text-sm font-normal">
                                Pending Company
                            </span>
                        </Link>
                        <Link to="/dashboard/account-report" class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500">
                           
                            <span class="mx-4 text-sm font-normal">
                                Reports
                            </span>
                        </Link>
                        <Link to="/dashboard/account-setting" class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500">
                            
                            <span class="mx-4 text-sm font-normal">
                                Settings
                            </span>
                        </Link>
                        <Link to="/dashboard/my-account" class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500">
                           
                            <Link to="/dashboard/my-account"> <span class="mx-4 text-sm font-normal">
                                My Account
                            </span></Link>
                        </Link>
                    </div>
                </nav>
                <Link to="/" class="text-center">Back to home</Link>
            </div>
        </div>

    );
};

export default SideBar;