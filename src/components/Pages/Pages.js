import React from 'react'
import Home from '../Home/Home';
import About from '../About/Aboutus';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer.js';



const Pages = () => {
  return (
    <div className=''>
      <Home/>
      <Services/> 
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Pages
