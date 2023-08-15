import React from 'react'
import './Services.css'
import ServicesSlider from './ServicesSlider'

const Services = () => {
  return (
    <div id='services' className=' text-center row py-5 m-0 justify-content-center'>
       <div className="pt-5 w-100">
        <h1 className='h1-color fw-bold header'>Our Services </h1> 
        <p className='p-color'>
           At our firm, we prioritize professionalism, excellence, and customer satisfaction. Our dedicated team is ready to assist you in achieving your goals.
        </p>
      </div>
      <div className="col-12 py-5 my-5">
        <ServicesSlider/>
      </div>
    </div>
  )
}

export default Services
