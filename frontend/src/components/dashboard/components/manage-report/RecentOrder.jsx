import React from 'react';

const RecentOrder = () => {
    return (
        <div class="card">

            <div class="card-body">
                <h2 class="font-bold text-lg mb-10">Recent Orders</h2>

                <table class="table-fixed w-full">

            
                    <thead class="text-left">
                        <tr>
                            <th class="w-1/2 pb-10 text-sm font-extrabold tracking-wide">customer</th>
                            <th class="w-1/4 pb-10 text-sm font-extrabold tracking-wide text-right">Product</th>
                            <th class="w-1/4 pb-10 text-sm font-extrabold tracking-wide text-right">Invoice</th>
                            <th class="w-1/4 pb-10 text-sm font-extrabold tracking-wide text-right">price</th>
                            <th class="w-1/4 pb-10 text-sm font-extrabold tracking-wide text-right">status</th>
                        </tr>
                    </thead>
          
                    <tbody class="text-left text-gray-600">

                     
                        <tr>
                   
                            <th class="w-1/2 mb-4 text-xs font-extrabold tracking-wider flex flex-row items-center w-full">
                                <div class="w-8 h-8 overflow-hidden rounded-full">
                                    <img src="img/user2.jpg" class="object-cover"/>
                                </div>
                                <p class="ml-3 name-1">user name</p>
                            </th>
                   
                            <th class="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">Nike Sport</th>
                 
                            <th class="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">#<span class="num-4"></span></th>
         
                            <th class="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">$<span class="num-2"></span></th>
                    
                            <th class="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">shipped</th>
                 

                        </tr>
                   
                        <tr>
           
                            <th class="w-1/2 mb-4 text-xs font-extrabold tracking-wider flex flex-row items-center w-full">
                                <div class="w-8 h-8 overflow-hidden rounded-full">
                                    <img src="img/user3.jpg" class="object-cover"/>
                                </div>
                                <p class="ml-3 name-1">user name</p>
                            </th>
               
                            <th class="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">Nike Sport</th>
             
                            <th class="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">#<span class="num-4"></span></th>
                
                            <th class="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">$<span class="num-2"></span></th>
             

                     
                            <th class="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">shipped</th>
             

                        </tr>
                 
                        <tr>
                   
                            <th class="w-1/2 mb-4 text-xs font-extrabold tracking-wider flex flex-row items-center w-full">
                                <div class="w-8 h-8 overflow-hidden rounded-full">
                                    <img src="img/user2.jpg" class="object-cover"/>
                                </div>
                                <p class="ml-3 name-1">user name</p>
                            </th>
                     
                            <th class="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">Nike Sport</th>
                
                            <th class="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">#<span class="num-4"></span></th>
                   
                            <th class="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">$<span class="num-2"></span></th>
                    
                            <th class="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">shipped</th>
          

                        </tr>
                  
                        <tr>
                   
                            <th class="w-1/2 mb-4 text-xs font-extrabold tracking-wider flex flex-row items-center w-full">
                                <div class="w-8 h-8 overflow-hidden rounded-full">
                                    <img src="img/user1.jpg" class="object-cover"/>
                                </div>
                                <p class="ml-3 name-1">user name</p>
                            </th>
                      
                            <th class="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">Nike Sport</th>
                   
                            <th class="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">#<span class="num-4"></span></th>
                 
                            <th class="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">$<span class="num-2"></span></th>
                    
                            <th class="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">shipped</th>
              

                        </tr>
               
                        <tr>
                   
                            <th class="w-1/2 mb-4 text-xs font-extrabold tracking-wider flex flex-row items-center w-full">
                                <div class="w-8 h-8 overflow-hidden rounded-full">
                                    <img src="img/user3.jpg" class="object-cover"/>
                                </div>
                                <p class="ml-3 name-1">user name</p>
                            </th>
                      
                            <th class="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">Nike Sport</th>
                     
                            <th class="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">#<span class="num-4"></span></th>
                         
                            <th class="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">$<span class="num-2"></span></th>
              

                            
                            <th class="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">shipped</th>
                        </tr>
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default RecentOrder;