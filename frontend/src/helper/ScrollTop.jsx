import React, { useEffect, useState } from 'react';
import { BsArrow90DegUp } from 'react-icons/bs';

const ScrollTop = () => {
    const [visibility, setVisibility] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 0 })

    const handleCLick = () => {
        setPosition({ ...position, position: { top: 0, left: 0 } })
        window.scroll({
            top: position.top,
            left: position.left,
            behavior: 'smooth'
        })
    }
    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            e.preventDefault()
            if (window.scrollY > 200) {
                setVisibility(true)
            }
            else {
                setVisibility(false)
            }

        })
    })

    return (
        <div>
            <span onClick={() => handleCLick()}
                className=
                {`${visibility ? 'right-0 bottom-0.5 fixed z-10 p-5' : ''}`}
            >
                <BsArrow90DegUp className="relative w-16 h-16 text-white p-5 bg-red-500 rounded-full mr-5 mb-5  drop-shadow-lg ring-red-100  ring-8 cursor-pointer text-4xl" />

            </span>
        </div>
    );
};

export default ScrollTop;