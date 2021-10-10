import React from 'react';
import PendingCompany from '../components/manageCompany/PendingCompany';
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';

const ManageCompany = () => {
    return (
        <div className="grid grid-cols-5">
        <SideBar />
        <div className="col-span-4">
            <TopBar />
            <PendingCompany />
        </div>
    </div>
    );
};

export default ManageCompany;