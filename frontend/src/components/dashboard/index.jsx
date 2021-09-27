import React from 'react';
import Routes from './Routes';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';

const Container = () => {
    return (
        <div className="grid grid-cols-5">
            <SideBar />
            <div className="col-span-4">
                <TopBar />
                <Routes />
            </div>
        </div>
    );
};

export default Container;