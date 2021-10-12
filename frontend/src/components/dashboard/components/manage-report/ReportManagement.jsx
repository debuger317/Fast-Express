import React from 'react';
import BestSeller from './BestSeller';
import RecentOrder from './RecentOrder';
import Status from './Status';
import Summery from './Summery';

const ReportManagement = () => {
    return (
        <div class="h-screen flex flex-row flex-wrap">
            <div class="bg-gray-100 flex-1 p-6 md:mt-16">
                <div class="grid grid-cols-3 lg:grid-cols-1 gap-5">
                    <Summery />
                </div>
                <Status />
                <div class="grid grid-cols-2 lg:grid-cols-1 gap-5 mt-5">
                    <BestSeller />
                    <RecentOrder />
                </div>
            </div>
        </div>
    );
};

export default ReportManagement;