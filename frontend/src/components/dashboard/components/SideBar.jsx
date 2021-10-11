import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import { dashboard_nav } from '../../../utiltes/LocalDatabase';
import { VscHome } from 'react-icons/vsc';
import { BackToHomeAction } from '../../../redux/action/dashboard';
const SideBar = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const abv = () => {
        history.push('/')
        dispatch(BackToHomeAction(true))
    }
    const role = useSelector((state) => state.auth.userdetails.role)

    useEffect(() => {

    }, [])

    const filtered = dashboard_nav.filter(nav => nav.role.includes(role))
    console.log(filtered);
    return (
        <div class="lg:block relative mr-14 h-screen">
            <div class="h-screen bg-white mr-10 shadow-lg">
                <nav class="mb-32">
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
                <span onClick={() => abv()} class="flex items-center cursor-pointer uppercase mx-8 text-sm font-semibold text-gray-500"><span class="text-xl pr-2"><VscHome /></span> Back to home</span>
            </div>
        </Router>

    );
};

export default SideBar;
//naimurbd@gmail.com