import React from 'react';
import { ServiceFaqData } from '../../../utiltes/LocalDatabase';
import FaqServiceCard from './FaqServiceCard';

const ServicesFaq = () => {
    return (
        <section>
            <div className="w-4/5 md:w-4/5 mx-auto p-8">
            <div class="">
               <h2 className="font-bold font-heading font-poppins md:font-poppins text-2xl md:text-4xl text-black">What's Your Pickup And Delivery Timing?</h2>
               <h6 className="text-2xl font-poppins md:font-poppins">Services meaning
               </h6>
            </div>
            <div className="my-5">
               {
                  ServiceFaqData.map(item => <FaqServiceCard key={item.id} items={item} />)
               }
            </div>
         </div>
        </section>
    );
};

export default ServicesFaq;