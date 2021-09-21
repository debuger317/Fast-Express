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
         <div className="w-1/1 md:w-3/5 mx-auto p-8">
            <p className="text-5xl">Who We Are</p>
            <p>Know more about us and our cause</p>
            <div className="shadow-md">
               <div className="tab w-full overflow-hidden border-t">
                  <input className="absolute opacity-0" id="tab-single-one" type="radio" name="tabs2" />
                  <label className="block p-5 leading-normal cursor-pointer" for="tab-single-one">Label One</label>
                  <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                     <p className="p-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
                  </div>
               </div>
               <div className="tab w-full overflow-hidden border-t">
                  <input className="absolute opacity-0" id="tab-single-two" type="radio" name="tabs2" />
                  <label className="block p-5 leading-normal cursor-pointer" for="tab-single-two">Label Two</label>
                  <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                     <p className="p-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
                  </div>
               </div>
               <div className="tab w-full overflow-hidden border-t">
                  <input className="absolute opacity-0" id="tab-single-three" type="radio" name="tabs2" />
                  <label className="block p-5 leading-normal cursor-pointer" for="tab-single-three">Label Three</label>
                  <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                     <p className="p-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default FAQ;
