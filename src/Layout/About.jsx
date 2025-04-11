import React from "react";
import myImage from "/images/PXL_20240114_134919861.PORTRAIT~4.jpg";
import Home from "./Home.jsx";

function About() {
  return (
<>

<section id="about">
      <div className="hero w-full mx-10 my-20 h-auto">
        <div className="hero-content flex-col justify-self-auto lg:flex-row">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100  w-[50%] rounded-full  ">
              <img src={myImage} />
            </div>
          </div>
          <div>
            <h1 className="text-5xl font-bold">About Me</h1>
            <p className="py-6 font-semibold text-lg">
              Hi! I'm a Computer Science student at United International
              University, currently in my 7th trimester. I live in Bangladesh
              and have a strong interest in Front-End Web Development.
            </p>
            <div className="progress-bar flex flex-col gap-2">
             
             <div>
                <p className="font-bold text-md text-black ">Digital Marketing</p>
                <progress
                className="progress w-56"
                value={80}
                max="100"
              >
              </progress>
             </div>
            
             <div>
                <p className="font-bold text-md text-black ">Designing</p>
                <progress
                className="progress w-56"
                value="70"
                max="100"
              ></progress>
             </div>


             <div>
                <p className="font-bold text-md text-black ">Front End</p>
                <progress
                className="progress w-56"
                value="100"
                max="100"
              ></progress>
             </div>

             <div>
                <p className="font-bold text-md text-black ">PowerPoint</p>
                <progress
                className="progress w-56"
                value="85"
                max="100"
              ></progress>
             </div>
             
              
             
             
            </div>
          </div>
        </div>
      </div>
    </section>
</>
  );
}

export default About;
