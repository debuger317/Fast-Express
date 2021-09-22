import React, { useState } from 'react';
import { BsPlus, BsDash } from 'react-icons/bs';

const FCard = ({ item }) => {
    const { levelName, description } = item;

    const [show, setShow]= useState(false)
    const toggleText = ()=>{
        setShow(!show)
    }

    return (
        <div className="w-full border overflow-hidden my-5 bg-gray-100 hover:bg-gray-200">
            <div onClick={()=>toggleText()} className="flex items-center justify-between cursor-pointer">
                <label className="block p-5 leading-normal cursor-pointer" for="tab-single-one">{levelName}</label>
                {show ?
                    <div className="plus-icon icon px-5"><BsDash className="text-xl text-gray-700" /></div> :
                    <div className="plus-icon icon px-5"><BsPlus className="text-xl text-gray-700" /></div>
                    }
            </div>
            <div className={`overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal ${show ? 'block' : 'hidden'}`}>
                <p className="p-5">{description}</p>
            </div>
        </div>
    )
}

export default FCard;

// style={{display: show ? 'block' : 'none' }}
// {`overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal ${show? block : hidden}`}