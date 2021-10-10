import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import TopFilterOption from '../TopFilterOption';
import Pagination from './Pagination';

const FilteredItems = () => {
    const path = useLocation()
    const [getCourier, setCourier] = useState([])

    const filterPath = (path.pathname.slice(18));

    useEffect(() => {
        fetch(`https://fastexpress.herokuapp.com/api/merchant/all`)
            .then(res => res.json())
            .then(data => setCourier(data))

    }, [filterPath])


    return (
        <div>
            <TopFilterOption />
            <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 my-10 mx-5">

                {
                    !getCourier === [] && <h2>loading....</h2>
                }
                {

                    getCourier.filter(name => name.serviceCategory.includes(filterPath)).map(item =>
                        <Link to={`/service/category/${filterPath}/${item._id}`} key={item._id} className="bg-white rounded shadow py-5 px-10">
                            <img src={item.logo} alt="courier-logo" srcset="" />

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