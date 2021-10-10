import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/Fast-Express.PNG';
import { dashboard_nav } from '../../../utiltes/LocalDatabase';

const SideBar = () => {
    const role = useSelector((state) => state.auth.userdetails.role)

    useEffect(() => {

    }, [])

    const filtered = dashboard_nav.filter(nav => nav.role.includes(role))
    console.log(filtered);
    return (
        <div class="lg:block  ml-4 relative">
            <div class="h-screen bg-white dark:bg-gray-700 border-r border-gray-100">
                <Link to='/dashboard' class="flex items-center justify-center">
                    <img class="px-5 pr-10 pt-5" src={Logo} alt="" srcset="" />
                </Link>

                <nav class="mt-6">
                    <div>
                        {
                            dashboard_nav.filter(nav => nav.role.includes(role)).map(item => 
                                <Link to={item.path} class="w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2  duration-200 justify-start bg-gradient-to-r from-white to-blue-100 dark:from-gray-700 dark:to-gray-800 ">

                                    <span class="mx-4 text-sm font-normal">
                                        {item.pathname}
                                    </span>
                                </Link>
                            )
                        }
                    </div>
                </nav>
                <Link to="/" class="text-center">Back to home</Link>
            </div>
        </div>

    );
};

export default SideBar;