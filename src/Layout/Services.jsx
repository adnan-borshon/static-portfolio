import React from 'react';
import {DM} from "/src/images/digitalmarketing.png";
import {UIUX} from "/src/images/Uiux.png";
import {frontEnd} from "/src/images/frontend.png";
import {backEnd} from "/src/images/backend.png";

function services() {
  return (
   <section id="services" >

    <div className='w-full flex flex-col justify-center items-center p-2 '>
    <h1 className="text-5xl font-bold">Services</h1>
    <div className="service-list">
    <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={DM}
      alt="Digital Marketing" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

    </div>

    </div>
  
   </section>
  );
}

export default services;