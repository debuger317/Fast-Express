import React from 'react';
import { Fragment } from 'react';
import FAQ from '.././common/faq/FAQ';
import DeliveryProcessFaq from './subcomponents/DeliveryProcessFaq';
import ServicesFaq from './subcomponents/ServicesFaq';

const FaqDetails = () => {
    return (
        <Fragment>
    
            <FAQ />
            <DeliveryProcessFaq />
            <ServicesFaq />
       
        </Fragment>
    );
};

export default FaqDetails;