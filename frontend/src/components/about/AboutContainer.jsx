import React from 'react';
import exportPicture from '../../assets/images/about/aboutimg.jpg';

const AboutContainer = () => {
  return (
    <div className="container mx-auto ">
      <section className="text-gray-600 pt-5 body-font overflow-hidden">
        <div className="container px-5 py-2 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="Company Logo" className="lg:w-1/2 w-1/2 lg:h-auto h-36 object-cover object-center rounded" src={exportPicture} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest pt-12 text-yellow-500">ABOUT US</h2>
              <h1 className="text-gray-900 pt-5 text-5xl title-font font-medium mb-1">We Professional Moving Company</h1>
              <p className="leading-relaxed pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam accusamus sunt voluptas odio quam eaque laboriosam exercitationem placeat commodi fugiat. Aliquid necessitatibus recusandae accusantium ut sed quos praesentium sint perspiciatis id pariatur eos exercitationem ab adipisci facilis possimus, doloremque nam aperiam quisquam impedit est ipsum!</p>
              <div class=" rounded-lg w-90  block pt-5  pt-10">
                <h3 className="text-3xl title-font font-medium">Product Building</h3>
                <div class="w-full h-4 bg-gray-400 rounded-full mt-3">
                  <div class="w-3/4 h-full text-center text-xs text-white bg-yellow-500 rounded-full">
                    75%
                  </div>
                </div>
              </div>
              <div class=" rounded-lg w-90  block ">
                <h3 className="text-3xl title-font font-medium">Residential Movers</h3>
                <div class="w-full h-4 bg-gray-400 rounded-full mt-3">
                  <div class="w-3/4 h-full text-center text-xs text-white bg-yellow-500 rounded-full">
                    75%
                  </div>
                </div>
              </div>
              <div class=" rounded-lg w-90  block  ">
                <h3 className="text-3xl title-font font-medium">Quick Transportation</h3>
                <div class="w-full h-4 bg-gray-400 rounded-full mt-3">
                  <div class="w-3/4 h-full text-center text-xs text-white bg-yellow-500 rounded-full">
                    75%
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutContainer;