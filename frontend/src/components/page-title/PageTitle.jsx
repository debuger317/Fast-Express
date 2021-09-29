import React from 'react';
import { BsArrowBarRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const PageTitle = (props) => {
    return (
        <section className="bg-gray-100 border-b">
            <div className="container mx-auto p-10">
                <div className="w-5/6 lg:w-full mx-auto flex items-center justify-between">
                    <div className="">
                        <h1 className="uppercase text-4xl text-bold">{props.pageName}</h1>
                    </div>
                    <div className="flex items-center  uppercase">
                        <Link to="/">Home</Link><BsArrowBarRight className="mx-4" />{props.title}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageTitle;
