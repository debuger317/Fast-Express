import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TopFilterOption from '../TopFilterOption';
import Pagination from './Pagination';

const FilteredItems = () => {

    const [getCourier, setCourier] = useState([])

    useEffect(() => {
        fetch(`https://fastexpress.herokuapp.com/api/couriers/all`)
            .then(res => res.json())
            .then(data => setCourier(data))
    }, [])

    return (
        <div>
            <TopFilterOption />
            <div class="grid grid-cols-3 gap-4 my-10 mx-5">

                {
                    !getCourier===[] && <h2>loading....</h2>
                }
                {
                    getCourier.map(item =>
                        <Link to={`/service/category/${item._id}`} key={item._id} className="bg-white rounded shadow py-5 px-10">
                            <img src={item.courierLogo} alt="" srcset="" />
                            <h2>{item.name}</h2>
                        </Link>
                    )

                }
            </div>
            <Pagination />
        </div>
    );
};

export default FilteredItems;