import React from 'react';
import TopFilterOption from '../TopFilterOption';
import Pagination from './Pagination';

const FilteredItems = () => {
    return (
        <div>
            <TopFilterOption />
            <div class="grid grid-cols-3 gap-4 my-10 mx-5">
                <div className="bg-purple-400 py-5 px-10">1</div>
                <div className="bg-purple-400 py-5 px-10">1</div>
                <div className="bg-purple-400 py-5 px-10">1</div>
                <div className="bg-purple-400 py-5 px-10">1</div>
                <div className="bg-purple-400 py-5 px-10">1</div>
                <div className="bg-purple-400 py-5 px-10">1</div>
                <div className="bg-purple-400 py-5 px-10">1</div>
                <div className="bg-purple-400 py-5 px-10">1</div>
                <div className="bg-purple-400 py-5 px-10">1</div>
                <div className="bg-purple-400 py-5 px-10">1</div>
                <div className="bg-purple-400 py-5 px-10">1</div>
                <div className="bg-purple-400 py-5 px-10">1</div>
                <div className="bg-purple-400 py-5 px-10">1</div>
                <div className="bg-purple-400 py-5 px-10">1</div>
                <div className="bg-purple-400 py-5 px-10">1</div>
                <div className="bg-purple-400 py-5 px-10">1</div>
                <div className="bg-purple-400 py-5 px-10">1</div>
                <div className="bg-purple-400 py-5 px-10">1</div>
                <div className="bg-purple-400 py-5 px-10">1</div>
                <div className="bg-purple-400 py-5 px-10">1</div>
                <div className="bg-purple-400 py-5 px-10">1</div>
                <div className="bg-purple-400 py-5 px-10">1</div>
                <div className="bg-purple-400 py-5 px-10">1</div>
                <div className="bg-purple-400 py-5 px-10">1</div>
                <div className="bg-purple-400 py-5 px-10">1</div>
                <div className="bg-purple-400 py-5 px-10">1</div>
                <div className="bg-purple-400 py-5 px-10">1</div>
                <div className="bg-purple-400 py-5 px-10">1</div>
            </div>
            <Pagination/>
        </div>
    );
};

export default FilteredItems;