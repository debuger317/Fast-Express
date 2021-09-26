import React from 'react';
import { FaqData } from '../../../utiltes/LocalDatabase';
import FCard from './FCard';
const FAQ = () => {

   return (
      <section>
         <div className="container mx-auto p-10">
            <div class="faq-title my-10">
               <h2 className="font-base font-heading font-poppins md:font-poppins text-2xl md:text-4xl text-gray-500">WHO WE ARE</h2>
               <p className="text-base font-poppins md:font-poppins">Know more about us and our cause Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Commodi maxime animi ratione provident eaque doloremque, repellat, distinctio quae doloribus at, modi repellendus.
               </p>
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
