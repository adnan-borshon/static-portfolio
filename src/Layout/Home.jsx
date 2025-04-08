import React from 'react';
import myImage from '/src/images/PXL_20240114_134919861.PORTRAIT~4.jpg';

function Home() {
  return (
   <section id="home">
    <div className="hero w-full mx-10 my-20 h-auto">
  <div className="hero-content flex-col justify-self-auto lg:flex-row-reverse">
  <div className="avatar justify-center">
  <div className="ring-primary ring-offset-base-100 ml-64 w-[50%] rounded-full  ">
    <img src={myImage} />
  </div>
</div>
    <div>
        <p className='font-bold text-2xl'>Hi I am</p>
        <p className='font-bold text-3xl text-orange-400'>Adnan Borshon</p>
      <h1 className="text-5xl font-bold">Web Developer</h1>
      <p className="py-6  font-semibold text-lg">
      I'm a dedicated Front-End Web Developer with 6 months of experience creating responsive, user-friendly interfaces using HTML, CSS, JavaScript, and React. Eager to learn, grow, and contribute to impactful projects.
      </p>
      <button className="btn font-bold hover:bg-orange-600 text-white text-lg px-6 bg-orange-500">Hire Me</button>
    </div>
  </div>
</div>
   </section>
  );
}

export default Home;