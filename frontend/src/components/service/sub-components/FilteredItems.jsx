import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { updateCount, filterName } from '../../../redux/action/merchants';
import TopFilterOption from '../TopFilterOption';
import { useDispatch } from 'react-redux';
import ReactPaginate from "react-paginate";
import './filterItemPagination.css'
const FilteredItems = () => {
    const path = useLocation()
    const [getCourier, setCourier] = useState([])
    console.log("get courier", getCourier)

    const filterPath = (path.pathname.slice(18)).replace("&", "");
    console.log("filterPath", filterPath);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(`https://fastexpress.herokuapp.com/api/merchant/all`)
            .then(res => res.json())
            .then(data => setCourier(data))
    }, [filterPath])
    
    const count = getCourier.slice(3).filter(name => name.serviceCategory[0].includes(filterPath))
    dispatch(updateCount(count.length))
    dispatch(filterName(filterPath))
    // console.log(count)
    const test = getCourier[4]
    console.log("test",test)

    // pagination
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 6;
    const pagesVisited = pageNumber * usersPerPage;
    const displayCompany = count
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .map(item =>
            <Link to={`/service/category/${filterPath}/${item._id}`} key={item._id} className="bg-white rounded shadow py-5 px-10">
                <img src={item.logo} alt="courier-logo" srcset="" />
                <h2>{item.name}</h2>
            </Link>
        )
    const pageCount = Math.ceil(count.length / usersPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div>
            <TopFilterOption />
            <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 my-10 mx-5">
                {
                    !getCourier === [] && <h2>loading....</h2>
                }
                {
                    displayCompany
                }
            </div>
            <ReactPaginate
                previousLabel={"Prev"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />
        </div>
    );
};

export default FilteredItems;