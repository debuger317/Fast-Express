import React, { Fragment, useState } from 'react';
import { BsChevronBarRight } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { SideBarAction } from '../../../redux/action/dashboard';

const CloseButton = () => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false)
    const handleSideMenu = () => {
        setShow(!show);
        dispatch(SideBarAction(!show))
    }
    return (
        <Fragment >
            <button onClick={() => handleSideMenu()} className="w-8 h-8">
                <BsChevronBarRight className={`cursor-pointer shadow-lg ${show ? "" : "ml-10"} text-4xl rounded text-gray-400 p-2`} />
            </button>
        </Fragment>
    );
};

export default CloseButton;