import React from 'react';
import { Fragment } from 'react';
import FAQ from './FAQ';
import DeliveryProcessFaq from './subcomponents/DeliveryProcessFaq';
import ServicesFaq from './subcomponents/ServicesFaq';

const FaqDetails = () => {
    return (
        <Fragment>
            <FAQ />
            <ServicesFaq />
            <DeliveryProcessFaq />
        </Fragment>
    );
};

export default FaqDetails;