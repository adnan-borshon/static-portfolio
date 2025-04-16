import React from 'react';
import first_per from '/images/first-per.jpg';

function Testimonials() {
  return (
  <section>
<div className="w-full gap-8 flex flex-col items-center">
        <div className="flex flex-col items-center">
          <h1 className="section-header animated-underline">Testimonals</h1>
          <p className="p-1 text-xl font-semibold">
            Reviews from my clients
          </p>
        </div>

<div className="testimonial-container w-[55%] bg-orange-100 mb-8 rounded-lg">
    <div className="testimonial-cards">
        <img  src={first_per} alt="" />
        <div className='testimonial-para'>
            <p className='mb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, porro! Illo vero suscipit debitis pariatur sint vitae, voluptatem iste sapiente.
            </p>
            <h1 className='font-extrabold '>Name</h1>
            <h2 className='font-semibold'>CEO</h2>
        </div>
        </div>

</div>
        
</div>
  </section>
  );
}

export default Testimonials;