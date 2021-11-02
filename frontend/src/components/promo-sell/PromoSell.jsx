import React from 'react';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';



const PromoSell = () => {
    return (

        <section class="container pt-5 mx-auto lg:px-8 px-4 sm:px-6 ">
            <div class="flex flex-wrap">
                    <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        <Slide left duration={2000}>
                            <img class="object-cover object-center h-full w-full" src="https://i.ibb.co/0BQvvWh/promo-sell.jpg" alt="" srcset="" />
                        </Slide>
                    </div>

                    <div class="lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left mx-auto flex items-center">
                        
                            <Slide right duration={2000}>
                            <div>
                                <h1 class="text-6xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl pb-5">
                                    Summer styles are finally here
                                </h1>
                                <p class="mt-4 text-2xl text-gray-500 pb-5">This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care if you live or die.This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care if you live or die.</p>
                                <Link to="/service">
                                    <button className="bg-red-600 rounded text-xl text-white px-5 py-2 hover:bg-red-700">Order Now</button>
                                </Link>
                                </div>
                            </Slide>
                        
                    </div>
            </div>
        </section >

    )
}

export default PromoSell;
