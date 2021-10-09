import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';

const SingleCourierDetail = () => {
    const path = useLocation();
    const c_name=path.pathname.slice(18);
    console.log(c_name);
    const { _id } = useParams();
    console.log(_id);
    const [Item, setItem] = useState({})
    useEffect(() => {
        fetch(`https://fastexpress.herokuapp.com/api/merchant/${_id}`)
            .then(response => response.json())
            .then(data => setItem(data))
    }, [_id])
    const { name, logo, description } = Item;

    return (
        <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={logo} />
                <div class="text-center lg:w-2/3 w-full">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{name}</h1>
                    <p class="mb-8 leading-relaxed">{description}</p>
                    <div class="flex justify-center">
                        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><Link to={`/service/category/${c_name}/${_id}/checkoutform`} >Take a order</Link></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleCourierDetail;