import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { dashboard_nav } from '../../../utiltes/LocalDatabase';
import { VscHome } from 'react-icons/vsc';

const SideBar = () => {

    const role = useSelector((state) => state.auth.authdetails.role)
    const open = useSelector((state) => state.dashboard.openmenu)
    return (
        <div class={`fixed inset-0 flex-none h-full ${open? 'w-24		':'w-72'} overflow-y-visible lg:pt-0 lg:block mt-16`}>
            <div class="bg-white mr-10 shadow-lg h-screen overflow-y-scroll	">
                <nav class="mb-16">
                    {
                        dashboard_nav?.filter(nav => nav.role.includes(role)).map(item =>
                            <Link to={item.path} class={`${item.bg} text-gray-500 focus:text-white focus:bg-red-500  border-red-600 uppercase  flex items-center ${open?"py-4":"p-4"} my-2  duration-200 justify-start`}>
                                <span class="mx-4 text-sm	 font-semibold flex items-center">
                                    <span class={`${item.size} pr-2`}>{item.icon}</span>  {item.pathname}
                                </span>
                            </Link>
                        )
                    }
                    <a href={'/'} class={`flex items-center cursor-pointer uppercase text-sm font-semibold text-gray-500 pb-10 mt-10 ${open?"ml-4":"ml-8  mx-8"}`}><span class="text-2xl pr-2 "><VscHome /></span> Back to home</a>
                </nav>
            </div>
        </div>

    );
};

export default SideBar;
