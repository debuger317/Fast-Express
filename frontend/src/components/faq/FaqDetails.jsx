import React from 'react';
import { Fragment } from 'react';
import DeliveryProcessFaq from './subcomponents/DeliveryProcessFaq';
import ServicesFaq from './subcomponents/ServicesFaq';

const FaqDetails = () => {
    return (
        <Fragment>
            <DeliveryProcessFaq />
            <ServicesFaq />
        </Fragment>
    );
};

export default FaqDetails;