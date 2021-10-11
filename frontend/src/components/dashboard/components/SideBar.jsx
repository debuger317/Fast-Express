import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Link, useHistory
} from "react-router-dom";
import Logo from '../../../assets/images/Fast-Express.PNG';
import { dashboard_nav } from '../../../utiltes/LocalDatabase';
import {VscHome}  from 'react-icons/vsc';
const SideBar = () => {
    const history = useHistory();
    const abv = () => {
        history.push('/')
    }
    const role = useSelector((state) => state.auth.userdetails.role)

    useEffect(() => {

    }, [])

    const filtered = dashboard_nav.filter(nav => nav.role.includes(role))
    console.log(filtered);
    return (
        <Router>
            <div class="lg:block relative">
                <div class="h-screen bg-white mr-10 shadow-lg">
                    <Link style={{paddingBottom:'4px'}} to='/dashboard' class="flex items-center justify-center">
                        <img class="px-5 pr-10 pt-5" src={Logo} alt="" srcset="" />
                    </Link>

                    <nav class="mt-6 mb-32">
                        <div>
                            {
                                dashboard_nav.filter(nav => nav.role.includes(role)).map(item =>
                                    <Link to={item.path} class={`${item.bg} text-gray-500 focus:text-white focus:bg-red-500  border-red-600 uppercase  flex items-center p-4 my-2  duration-200 justify-start`}>

                                        <span class="mx-4 text-sm	 font-semibold flex items-center">
                                         <span class={`${item.size} pr-2`}>{item.icon}</span>  {item.pathname}
                                        </span>
                                    </Link>
                                )
                            }
                        </div>
                    </nav>
                    <span onClick={() => abv()} class="flex items-center cursor-pointer uppercase mx-8 text-sm font-semibold text-gray-500"><span class="text-xl pr-2"><VscHome/></span> Back to home</span>
                </div>
            </div>
        </Router>

    );
};

export default SideBar;