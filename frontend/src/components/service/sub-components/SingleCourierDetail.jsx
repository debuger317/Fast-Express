import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { selectedMerchant } from '../../../redux/action/merchants';

const SingleCourierDetail = () => {
    const history = useHistory();
    const { _id } = useParams();
    const dispatch = useDispatch();
    const [Item, setItem] = useState([]);
 
    const { name, logo, description, address, createdAt, costperkg, deliveryOption, phone, pickupFrom, pickupTo, serviceCategory, website, weight } = Item;
  
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
            <div class="container mx-auto flex px-16 py-24 items-center justify-center flex-col w-2/3 lg:w-full">
                <img class="mb-10 rounded shadow object-cover center w-full h-20" alt="hero" src={logo} />
                <div class="">
                    <h1 class="title-font text-3xl mb-4 font-semibold text-gray-900 uppercase">{name}</h1>
                    <p class="mb-8 leading-relaxed">{description}</p>
                    <span>Created at : {new Date(createdAt).toDateString()}</span>
                    <p>{address}</p>
                    <p>{costperkg}</p>
                    <p>{deliveryOption}</p>
                    <p>{phone}</p>
                    <p>{pickupFrom}</p>
                    <p>{pickupTo}</p>
                    <p>{website}</p>
                    <p>{weight}</p>

                    <ol>
                    {serviceCategory?.map((item,index)=> <li>
                      {1 + index} {item}
                    </li>)}
                    </ol>
                    <div class="flex">
                        <button onClick={() => handleChange()} class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Take a order</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleCourierDetail;