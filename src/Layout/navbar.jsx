import React from 'react';
import logo from '/src/images/ChatGPT Image Apr 7, 2025, 08_10_21 PM.png';
import { Link } from 'react-router-dom';



function Navbar() {
  return (
    <section>
   <div className="navbar bg-base-100 flex shadow-md fixed top-0 w-full z-50 px-4 md:px-10">
  <div className="">
   
    <a className="btn btn-ghost text-xl">
      <img className='h-full w-full ' src={logo}  />
      </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal font-bold gap-8 px-1">
     
      <Link to="/">Home </Link>
      <Link to="/about">About Me </Link>
      
      
      <li>
        <details>
          <summary>Services</summary>
          <ul className="p-2">
            <li><a>Digital Marketing</a></li>
            <li><a>UI/UX</a></li>
            <li><a>Front end Development</a></li>
            <li><a>Back end Development</a></li>
            
          </ul>
        </details>
      </li>
      <li><a>Projects</a></li>
      <li><a>Testimonials</a></li>
      <li><a>Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-orange-400 hover:bg-orange-600 font-bold text-white">Download CV</a>
  </div>
</div>
    </section>
  );
}

export default Navbar;