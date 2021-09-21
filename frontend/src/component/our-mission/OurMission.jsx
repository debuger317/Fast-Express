import React from 'react';
import { BsBell } from 'react-icons/bs';
import { GrDeliver } from 'react-icons/gr';
import { ImLocation } from 'react-icons/im';
import { FcProcess } from 'react-icons/fc';
const OurMission = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 hover:bg-red-700 hover:text-white">
              <div className="mt-5 hover:bg-white-700 text-white"><GrDeliver className="mx-auto text-5xl bg-red-700 text-white rounded-lg" /></div>
              {/* <h3 className="tracking-widest text-xs font-medium title-font text-center py-5">SUBTITLE</h3> */}
              <h2 className="text-lg font-medium title-font mb-4 text-center">24/7 Local Courier Service in Singapore</h2>
              <p className="text-center">Fast Xpress Logistics doesn’t take days off … or nights off. We know that some deliveries can’t wait, so we’re always working for you, offering door to door pick up and delivery, van delivery, courier dispatch, and delivery of bulky items—24 hours a day, 365 days a year, even holidays—fast fast delivery anywhere in Singapore, anytime, at affordable rates.</p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 hover:bg-red-700 hover:text-white">
              <div className="mt-5"><BsBell className="mx-auto text-5xl bg-red-700 text-white rounded-lg" /></div>
              {/* <h3 className="tracking-widest text-xs font-medium title-font text-center py-5">SUBTITLE</h3> */}
              <h2 className="text-lg font-medium title-font mb-4 text-center">Text and Email Delivery Notifications</h2>
              <p className="text-center">Forget the anxiety of guessing whether your parcel or document has been delivered. iXpress Logistics confirms both receipt of parcel and successful delivery by automated SMS text messaging and email. We also notify you immediately of updates and incidents—you’re never in the dark about the status of our courier services.</p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 hover:bg-red-700 hover:text-white">
              <div className="mt-5"><ImLocation className="mx-auto text-5xl bg-red-700 text-white rounded-lg" /></div>
              {/* <h3 className="tracking-widest text-xs font-medium title-font text-center py-5">SUBTITLE</h3> */}
              <h2 className="text-lg font-medium title-font mb-4 text-center">Online Tracking</h2>
              <p className="text-center">Fast Xpress Logistics is fully transparent about the delivery process. You can even track the location of your courier on our online platform or mobile app, so you always know exactly where your delivery is. Our tracking system also includes the courier’s name and contact info so you can check the status of your delivery in Singapore, anytime.</p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 hover:bg-red-700 hover:text-white">
              <div className="mt-5"><FcProcess className="mx-auto text-5xl bg-red-700 text-white rounded-lg" /></div>
              {/* <h3 className="tracking-widest text-xs font-medium title-font text-center py-5">SUBTITLE</h3> */}
              <h2 className="text-lg font-medium title-font mb-4 text-center">No Wasted Paper</h2>
              <p className="text-center">Fast Xpress Logistics uses a paperless receipt, contract, and documentation system. We back up our records in the Cloud and supply your documentation by email, saving money, paper, and the time it takes to file paper records. No more paper cuts and inky fingers documenting your local courier service!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurMission;
