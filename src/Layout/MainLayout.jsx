import React from 'react';
import Navbar from "./navbar.jsx";
import Home from "./Home.jsx";
import Footer from "./Footer.jsx";
import About from "./About.jsx";



function MainLayout() {
  return (
    <>  
     <Navbar/>

      <Home/>
      <About/>
     
      <Footer/>
       </>
      
  );
}

export default MainLayout;