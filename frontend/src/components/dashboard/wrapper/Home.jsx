import React, { Fragment } from 'react';
import DailyActivity from '../components/DailyActivity';
import TottalSell from '../components/TottalSell';

const Home = () => {
    return (
        <Fragment>
            <TottalSell/>
            <DailyActivity/>
        </Fragment>
    );
};

export default Home;