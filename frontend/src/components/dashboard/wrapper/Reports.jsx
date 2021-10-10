import React, { Fragment } from 'react';
import ReportManagement from '../components/manage-report/ReportManagement';
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';

const Reports = () => {
    return (
        <div className="grid grid-cols-5">
            <SideBar />
            <div className="col-span-4">
                <TopBar />
                <ReportManagement />
            </div>
        </div>
    );
};

export default Reports;