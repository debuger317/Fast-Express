import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { selectedMerchant } from '../../../redux/action/merchants';

const SingleCourierDetail = () => {
    const history = useHistory();
    const { _id } = useParams();
    const dispatch = useDispatch();
    const [Item, setItem] = useState({})
    const { name, logo, description } = Item;
    
    const singleitem = async () => {
        try {
            const res = await axios.get(`https://fastexpress.herokuapp.com/api/merchant/${_id}`);
            setItem(res.data)
            dispatch(selectedMerchant(res.data))
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        singleitem()
    }, [_id])

    const handleChange = () => {
        history.push(`${_id}/customer-parcel-shipping-form`)
    }
    return (
        <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={logo} />
                <div class="text-center lg:w-2/3 w-full">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{name}</h1>
                    <p class="mb-8 leading-relaxed">{description}</p>
                    <div class="flex justify-center">
                        <button onClick={() => handleChange()} class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Take a order</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleCourierDetail;