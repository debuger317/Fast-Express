import React from 'react';
import FilterBar from './sub-components/FilterBar';
import FilteredItems from './sub-components/FilteredItems';

const ServicesDetail = () => {
    return (
        <div className="container mx-auto">
            <div className="flex mx-10 my-20">
                <div className="w-1/4">
                    <FilterBar />
                </div>
                <div className="w-3/4">
                    <FilteredItems />
                </div>
            </div>
        </div>
    );
};

export default ServicesDetail;