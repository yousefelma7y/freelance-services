import React from 'react'
import './Services.css'
import ServicesSlider from './ServicesSlider'

const Services = () => {
  return (
    <div id='services' className=' text-center row py-5 m-0 justify-content-center'>
       <div className="pt-5 w-100">
        <h1 className='h1-color fw-bold header'>
          <svg className='circle' width="55" height="55" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40.5" cy="20.5" r="21" fill="#12355B" fillOpacity="0.3" />
          </svg>
          Our Services
        </h1> 
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
