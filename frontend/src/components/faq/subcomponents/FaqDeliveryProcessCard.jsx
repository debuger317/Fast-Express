import React, { useState } from 'react';
import { BsDash, BsPlus } from 'react-icons/bs';

const FaqDeliveryProcessCard = ({ items }) => {
    const { levelName, description } = items;

    const [show, setShow] = useState(false)
    const toggleText = () => {
        setShow(!show)
    };

    return (
        <div className="w-full  border overflow-hidden my-5 bg-gray-100 hover:bg-gray-200">
            <div onClick={() => toggleText()} className="flex items-center justify-between cursor-pointer">
                <label className="block font-bold font-heading font-poppins md:font-poppins text-xl text-gray-500 p-5 leading-normal cursor-pointer sm:text-lg" for="tab-single-one">{levelName}</label>
                {show ?
                    <div className=" plus-icon icon px-5"><BsDash className=" text-xl text-gray-700" /></div> 
                    :
                    <div className="transition duration-1000 ease-in-out plus-icon icon px-5"><BsPlus className=" text-xl text-gray-700" /></div>
                }
            </div>
            <div className={`overflow-hidden fix-it  border-l-2 bg-gray-100 border-indigo-500 leading-normal ${show ? 'block' : 'hidden'}`}>
                <p onClick={()=>setShow(!show)} className="transition ease-in-out duration-700 p-5">{description}</p>
            </div>
        </div>
    );
};

export default FaqDeliveryProcessCard;