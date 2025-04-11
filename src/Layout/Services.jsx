import React from "react";
import DM from "/images/digitalmarketing.png";
import UIUX from "/images/Uiux.png";
import FE from "/images/frontend.png";
import BE from "/images/backend.png";

function Services() {
  return (
    <section className="mb-20">
      <div className="w-full gap-8 flex flex-col items-center">
        <div>
          <h1 className="font-bold text-black text-6xl">Services</h1>
          <p className="p-2 text-xl font-semibold">
            All the services i provide
          </p>
        </div>

        <div className="cards w-[80%] flex gap-5">
        <div className="card bg-gray-200 rounded-2xl p-4 h-full w-1/4 flex flex-col justify-start">
          <img src={DM} className="w-1/2" />
          <h2 className="font-bold text-black text-xl ">Digital Marketing</h2>
          <p className="font-semibold text-md">
            I am a Digital Marketing Specialist with expertise in SEO, SEM, and
            social media marketing.
          </p>
        </div>

        <div className="card bg-gray-200 rounded-2xl p-4 h-full w-1/4 flex flex-col justify-start">
          <img src={UIUX} className="w-1/2" />
          <h2 className="font-bold text-black text-xl ">UI/UX</h2>
          <p className="font-semibold text-md">
           UI/UX Designer with a passion for creating user-centered designs that enhance the user experience. 
          </p>
        </div>

        <div className="card bg-gray-200 rounded-2xl p-4 h-full w-1/4 flex flex-col justify-start">
          <img src={FE} className="w-1/2" />
          <h2 className="font-bold text-black text-xl ">Front End Development</h2>
          <p className="font-semibold text-md">
            I am a Front-End Developer with expertise in HTML, CSS, JavaScript,
            and React.js. 
          </p>
        </div>

        <div className="card bg-gray-200 rounded-2xl p-4 h-full w-1/4 flex flex-col justify-start">
          <img src={BE} className="w-1/2" />
          <h2 className="font-bold text-black text-xl ">Back End Development</h2>
          <p className="font-semibold text-md">
            I am a Back-End Developer with expertise in Node.js, Express.js,
            and MongoDB.
          </p>
        </div>
        </div>
       
      </div>
    </section>
  );
}

export default Services;
