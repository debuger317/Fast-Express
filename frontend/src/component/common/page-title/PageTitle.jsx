import React from 'react';
import { BsArrowBarRight } from 'react-icons/bs';

const PageTitle = (props) => {
    return (
        <div className="bg-gray-200 mb-10 py-8">
            <div className="container w-1/1 mx-auto">
                <h2 className="flex items-center justify-center uppercase">Home <span className="mx-5"><BsArrowBarRight/></span> {props.title}</h2>
            </div>
        </div>
    )
}

export default PageTitle;
