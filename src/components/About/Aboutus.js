import React from 'react'
import './Aboutus.css'

const Aboutus = () => {
  return (
    <div id='about' className='home-page p-0 text-center row m-0 justify-content-center py-4'>
      <div className='col-12 col-md-6 row pt-md-5 mt-md-5 p-3 m-0 justify-content-center text-center'>
        <div>
          <h1 className='p-4 header'>
          <svg className='home-circle' width="55" height="55" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40.5" cy="20.5" r="21" fill="#12355B" fillOpacity="0.3" />
          </svg>
            About Us
          </h1>
          <p className='text-start'>
            We are a comprehensive research entity comprising a team of postgraduate researchers with over ten years of experience in educational services. Our primary focus is to provide you with accuracy, efficiency, and timely delivery for your projects, research endeavors, and assistance in gathering the necessary references and scientific material across all disciplines for students throughout the Arab world.

            With a diverse team of master's and doctoral degree holders, we bring a wealth of expertise and knowledge to ensure the highest quality of work. Our commitment lies in supporting your academic pursuits, streamlining your research process, and helping you achieve your goals.

            We understand the value of time and the importance of meeting deadlines. Therefore, we guarantee prompt and reliable service, ensuring that your projects are completed within the specified time frame. Our dedication to precision and efficiency allows you to focus on other essential aspects of your academic journey.

            Regardless of your field of study, we have specialists in various disciplines who are well-versed in the requirements and expectations of academic research. Whether you need assistance in data analysis, literature review, or any other research-related task, we have the expertise to guide you through the process and deliver exceptional results.

            We take pride in our ability to cater to the needs of students across the Arab world. Our team is committed to providing comprehensive support and delivering the highest level of professionalism and quality in all our services. Trust us to be your reliable partner in achieving academic success.
          </p>
        </div>

      </div>
      <div className='col-12 col-md-6 row p-0 m-0 justify-content-center'>
        <img src='./images/about.svg' className='col-9 m-5' />
      </div>
    </div>
  )
}

export default Aboutus
