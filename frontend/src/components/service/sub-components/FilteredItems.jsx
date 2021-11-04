import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { updateCount, filterName } from '../../../redux/action/merchants';
import TopFilterOption from '../TopFilterOption';
import { useDispatch } from 'react-redux';
import ReactPaginate from "react-paginate";

const FilteredItems = () => {
    const PER_PAGE = 10;
    const path = useLocation()
    const [getCourier, setCourier] = useState([])
    const [currentPage, setCurrentPage] = useState(0);
    const filterPath = (path.pathname.slice(18)).replace("&", "");
    const offset = currentPage * PER_PAGE;
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(`https://fastexpress.herokuapp.com/api/merchant/all`)
            .then(res => res.json())
            .then(data => setCourier(data))
    }, [filterPath])

    const filterCourier = getCourier.filter(name => name.serviceCategory.includes(filterPath))
    
    dispatch(updateCount(filterCourier.length))
    dispatch(filterName(filterPath))

    //  pagination 
    const pageCount = Math.ceil(filterCourier.length / PER_PAGE);
    const handlePageClick = ({ selected: selectedPage }) => {
        setCurrentPage(selectedPage);
    }
    return (
        <div>
            <TopFilterOption />
            <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 my-10 mx-5">

                {filterCourier?.slice(offset, offset + PER_PAGE)
                    .map(item =>
                        <Link to={`/service/category/${filterPath}/${item._id}`} key={item._id} className="bg-white rounded shadow py-5 px-10">
                            <img src={item.logo} alt="courier-logo" srcset="" />
                            <h2>{item.name}</h2>
                        </Link>)
                }
            </div>
            <ReactPaginate
                previousLabel={"←"}
                nextLabel={"→"}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                disabledClassName={"pagination__link--disabled"}
                activeClassName={"pagination__link--active"}
            />
        </div>
    );
};

export default FilteredItems;
