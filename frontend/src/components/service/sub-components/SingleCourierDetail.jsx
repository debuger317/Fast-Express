import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const SingleCourierDetail = () => {
    const { _id } = useParams();
    console.log(_id);
    const [Item, setItem] = useState({})
    console.log(Item);
    useEffect(() => {
        fetch(`https://fastexpress.herokuapp.com/api/couriers/${_id}`)
            .then(response => response.json())
            .then(data => setItem(data))
    }, [])
    const { name, courierLogo, description } = Item;

    return (
        <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={courierLogo} />
                <div class="text-center lg:w-2/3 w-full">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{name}</h1>
                    <p class="mb-8 leading-relaxed">{description}</p>
                    <div class="flex justify-center">
                        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Take a order</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleCourierDetail;