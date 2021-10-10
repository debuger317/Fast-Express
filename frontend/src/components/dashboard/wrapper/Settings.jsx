import React from 'react';
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';

const Settings = () => {
    return (
      
        <div className="grid grid-cols-5">
        <SideBar />
        <div className="col-span-4">
            <TopBar />
            {/* <ReportManagement/> */}
        </div>
    </div>
    );
};

export default Settings;