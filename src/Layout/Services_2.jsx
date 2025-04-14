import React from 'react';
import WD_1 from '/images/prac-portfolio.jpg';
import WD_2 from '/images/design-2.jpg';
import WD_3 from '/images/design-3.jpg';

function Services_2() {
  return (
  <section className="mb-20">
     <div className="w-full gap-5 flex flex-col items-center h-full">
       
         <h1 className="section-header animated-underline ">My projects</h1>
        <div className="project-bar flex gap-5">
           <div className="p-bar">All</div>
           <div className="p-bar">UI/UX</div>
           <div className="p-bar">Webites</div>
           <div className="p-bar">Front End </div>
           <div className="p-bar">Back End </div>
        </div>
  

        <div className="web-design-card">

    <div className="web-card web-card1">
        <div className="img-bg">
        <img src={WD_1} alt="" />
        </div>

     <span>Web Design</span>
     <h2>SalesForce ui</h2>
    </div>

    <div className="web-card web-card2">
    <div className="img-bg">
        <img src={WD_2} alt="" />
        </div>
     <span>Web Design</span>
     <h2>Health Sadge</h2>
    </div>
    
    <div className="web-card web-card3"> 
    <div className="img-bg">
        <img src={WD_3} alt="" />
        </div>
     <span>Web Design</span>
     <h2>Education BD</h2>
    </div>
       
        </div>
    
  
    
      
     </div>
   </section>
  );
}

export default Services_2;