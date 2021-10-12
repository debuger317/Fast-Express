import React, { Fragment } from 'react';
import DailyActivity from '../components/DailyActivity';
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';
import TottalSell from '../components/TottalSell';

const Home = () => {
    return (

        <div className="grid grid-cols-5">
            {/* <SideBar /> */}
            <div className="col-span-4">
                {/* <TopBar /> */}
                <TottalSell />
                <DailyActivity />
            </div>
        </div>
    );
};

export default Home;