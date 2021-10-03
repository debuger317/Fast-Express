import React from 'react';
import { DeliveryProcessData } from '../../../utiltes/LocalDatabase';
import FaqDeliveryProcessCard from './FaqDeliveryProcessCard';

const DeliveryProcessFaq = () => {
    return (
        <section>
        <div className="w-4/5 md:w-4/5 mx-auto p-8">
        <div class="">
           <h2 className="font-bold font-heading font-poppins md:font-poppins text-2xl md:text-4xl text-black">Most Asked Questions</h2>
           <h6 className="text-2xl font-poppins md:font-poppins">Delivery process
           </h6>
        </div>
        <div className="my-5">
           {
              DeliveryProcessData.map(item => <FaqDeliveryProcessCard key={item.id} items={item} />)
           }
        </div>
     </div>
    </section>
    );
};

export default DeliveryProcessFaq;