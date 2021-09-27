import React from 'react';
import { BsArrowBarRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const PageTitle = (props) => {
    return (
        <div className="mb-16">
            <div className="relative">
                <img className="w-full" src="https://i.ibb.co/7zhZS1j/fast-express-promo-title-banner.png" alt="" srcset="" />
                <div className="container pr-16 mr-2 flex absolute top-0 right-0 transform translate-y-28">
                    <h1 className="text-white uppercase text-4xl text-bold">{props.pageName}</h1>
                    <div className="ml-auto text-white flex items-center  uppercase">
                    <Link to="/">Home</Link><BsArrowBarRight className="mx-4"/>{props.title}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageTitle;
