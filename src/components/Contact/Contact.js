import React from 'react'
import './Contact.css'
import { SiWhatsapp } from 'react-icons/si';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { GrMail } from 'react-icons/gr';
import { SlLocationPin } from 'react-icons/sl';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { ImLinkedin2 } from 'react-icons/im';
import { FaTwitter } from 'react-icons/fa';



const Contact = () => {
  return (
    <div id='contact' className=''>

      <div className='blue text-white p-5'>
        <h1 className='header'>
          Contact us :
        </h1>
        <p>
          For inquiries and communication, we can be reached through the following channels:
        </p>
      </div>

      <div className='row p-0 m-0 justify-content-center'>
        <div className='contact-card col-5 col-xl-2 m-1 text-center p-4'>
          <SiWhatsapp className='fs-1 touch' />
          <h6 className='py-3'>
            Our Whats App Numbers
          </h6>

          <p className='text-secondary p-0 m-0'>
            (Saudi Arabia): +966546550541
          </p>
          <p className='text-secondary p-0 m-0'>
            (Kuwait and other Arab countries): +96567600964
          </p>
        </div>
        <div className='contact-card col-5 col-xl-2 m-1 text-center p-4'>

          <BiSolidPhoneCall className='fs-1 touch' />
          <h6 className='py-3'>
            Our Numbers
          </h6>

          <p className='text-secondary p-0 m-0'>
            (Saudi Arabia): +966546550541
          </p>
          <p className='text-secondary p-0 m-0'>
            (Kuwait and other Arab countries): +96567600964
          </p>

        </div>
        <div className='contact-card col-5 col-xl-2 m-1 text-center p-0'>

          <GrMail className='fs-1 mt-4 touch' />
          <h6 className='py-3'>
            Our Email
          </h6>

          <p className='email text-secondary p-0 m-0'>
            smart.educ.official@gmail.com
          </p>

        </div>
        <div className='contact-card col-5 col-xl-2 m-1 text-center p-4'>

          <SlLocationPin className='fs-1 touch' />
          <h6 className='py-3'>
            Our Location
          </h6>
          <p className='text-secondary p-0 m-0'>
          </p>
        </div>
      </div>

      <div className='row p-0 m-0'>
        <div className='form col-12 col-lg-6 justify-content-center'>     
          <div className='row p-0 m-0 justify-content-center'>

            <div className='col-10 col-md-5 row py-5' >
              <label className='col-9 fw-bold touch  fs-3' >Email</label>
              <input type='email' placeholder='Enter a valid email' className='input col-10 col-md-8 p-3'/>
            </div>

            <div className='col-10 col-md-5 row py-5 '>
              <label className='col-9 fw-bold touch fs-3 '>Name</label>
              <input type='name' placeholder='Enter Your Name' className='input col-10 col-md-8 p-3'/>
            </div>

            <div className='col-10 row '>
              <label className='col-9 fw-bold touch fs-3'>Message</label>
              <textarea  rows="4" cols="50" type='name' placeholder='Enter Your Message' className='input col-12 p-3' />
            </div>

            <div className='col-12 row p-3 justify-content-center'>
               <button className='contact-btn col-4 p-3'>
              SUBMIT
            </button>
            </div>
           
          </div>
        </div>

        <div className='col-12 col-lg-6 text-start p-5'>
          <h1 className='touch'>
            Get In Touch
          </h1>
          <h6 className='orange'>
            We believe sustainability is vitally important.
          </h6>
          <p className='text-secondary' >
            Please feel free to reach out to us via the provided phone numbers and email address. We value your inquiries and look forward to assisting you.
          </p>
          <div className='p-5 row '>
            <button className='contact-icon px-3 col-3 col-sm-2'>
              <FaFacebookF className='fs-1' />
            </button>
            <button className='contact-icon px-3 col-3 col-sm-2'>
              <FaTwitter className='fs-1' />
            </button>
            <button className='contact-icon px-3 col-3 col-sm-2'>
              <BsInstagram className='fs-1' />
            </button>
            <button className='contact-icon px-3 col-3 col-sm-2'>
              <ImLinkedin2 className='fs-1' />
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact
