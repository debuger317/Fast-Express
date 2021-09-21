import React from 'react';

const FAQ = () => {
   var myRadios = document.getElementsByName('tabs2');
   var setCheck;
   var x = 0;
   for (x = 0; x < myRadios.length; x++) {
      myRadios[x].onclick = function () {
         if (setCheck != this) {
            setCheck = this;
         } else {
            this.checked = false;
            setCheck = null;
         }
      };
   }
   return (
      <section>

         <div className="w-full md:w-3/5 mx-auto p-8">
            <h1>Who We Are</h1>
            <p>Know more about us and <strong> our cause</strong></p>
            <div className="shadow-md">
               <div className="tab w-full overflow-hidden border-t">
                  <input className="absolute opacity-0 " id="tab-multi-one" type="checkbox" name="tabs" />
                  <label className="block p-5 leading-normal cursor-pointer" for="tab-multi-one">WHAT DO WE DO?</label>
                  <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                     <p className="p-5">Fast Express is a platform that matches you to a nearby driver to complete your delivery.</p>
                  </div>
               </div>
               <div className="tab w-full overflow-hidden border-t">
                  <input className="absolute opacity-0" id="tab-multi-two" type="checkbox" name="tabs" />
                  <label className="block p-5 leading-normal cursor-pointer" for="tab-multi-two">WHO AER OUR DELEVERS</label>
                  <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                     <p className="p-5">They are certified drivers and riders from our community who have signed up with us.</p>
                  </div>
               </div>
               <div className="tab w-full overflow-hidden border-t">
                  <input className="absolute opacity-0" id="tab-multi-three" type="checkbox" name="tabs" />
                  <label className="block p-5 leading-normal cursor-pointer" for="tab-multi-three">WHAT MAKE FAST EXPRESS EFFICIENT</label>
                  <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                     <p className="p-5">We do not take a commission from the sales. 100% of the sales goes to the drivers. Drivers are more willing and eager to complete your deliveries. Which translates to higher acceptance and performance rate.</p>
                  </div>
               </div>
               <div className="tab w-full overflow-hidden border-t">
                  <input className="absolute opacity-0" id="tab-multi-two" type="checkbox" name="tabs" />
                  <label className="block p-5 leading-normal cursor-pointer" for="tab-multi-two">WHO AER OUR DELEVERS</label>
                  <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                     <p className="p-5">Most companies earns from commission. That adds up hundreds to thousands of dollars of hard earned money being deprived per month to the driver. We charge only $1-$2 per day or just $30-$60 per month to the driver to maintain our application.</p>
                  </div>
               </div>
               <div className="tab w-full overflow-hidden border-t">
                  <input className="absolute opacity-0" id="tab-multi-two" type="checkbox" name="tabs" />
                  <label className="block p-5 leading-normal cursor-pointer" for="tab-multi-two">HOW DOES FAST EXPRESS MANTAIN THIS APPLICATION AND WHAT IS OUR CAUSE</label>
                  <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                     <p className="p-5">They are certified drivers and riders from our community who have signed up with us.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default FAQ;
