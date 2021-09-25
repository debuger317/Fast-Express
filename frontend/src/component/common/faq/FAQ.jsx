import React from 'react';
import { FaqData } from '../../../utiltes/LocalDatabase';
import FCard from './FCard';
const FAQ = () => {

   return (
      <section>
         <div className="w-4/5 md:w-4/5 mx-auto p-8">
            <div class="text-center">
               <h2 className="text-3xl">WHO WE ARE</h2>
               <h6 className="text-xl">Know more about us and our cause
               </h6>
            </div>
            <div className="my-5">
               {
                  FaqData.map(item => <FCard key={item.id} item={item} />)
               }
            </div>
         </div>
      </section>
   )
}

export default FAQ;
