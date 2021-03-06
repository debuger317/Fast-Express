import React, { useState } from 'react';
import { BsDash, BsPlus } from 'react-icons/bs';
import Fade from 'react-reveal/Fade';


const FaqServiceCard = ({ items }) => {
    const { levelName, description } = items;

    const [show, setShow] = useState(false)
    const toggleText = () => {
        setShow(!show)
    }
    return (
        <div className="w-full border overflow-hidden my-5 bg-gray-100 hover:bg-gray-200">
            <div onClick={() => toggleText()} className="flex items-center justify-between cursor-pointer">
                <label className="block font-bold font-heading font-poppins md:font-poppins text-base text-gray-500 p-5 leading-normal cursor-pointer " for="tab-single-one">{levelName}</label>
                {show ?
                    <div className="plus-icon icon px-5"><BsDash className="text-xl text-gray-700" /></div> :
                    <div className="plus-icon icon px-5"><BsPlus className="text-xl text-gray-700" /></div>
                }
            </div>
            <Fade top>
            <div className={`overflow-hidden border-l-2 bg-gray-100 border-red-500 leading-normal text-gray-500 ${show ? 'block' : 'hidden'}`}>
                <p className="p-5">{description}</p>
            </div>
            </Fade>
        </div>
    );
};

export default FaqServiceCard;