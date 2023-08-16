import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { LuLinkedin } from 'react-icons/lu';
import { LuMail } from 'react-icons/lu';
import { LuPhoneCall } from 'react-icons/lu';
import './Footer.css'

const Footer = () => {
    return (
        <div className='col-12 p-0 m-0 footer-body layer2 home-page '>
            <MDBFooter className='text-center text-lg-start text-muted '>
                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5 p-1'>
                        <MDBRow className='mt-3 '>

                            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4 '>

                                <div className='row fw-bold mb-4 p-0 m-0'>
                                    <div className='mt-4 p-0'>
                                        <img src='./images/logo.png' className='footer-logo ' />
                                    </div>
                                </div>

                                <p className=''>
                                    We envision a world where everyone feels welcome in Our collaborative Company.
                                </p>
                            </MDBCol>

                            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase  my-4  footer-h6 fw-bold'>OUR SERVICES</h6>
                                <p>                                
                                    Web Development                               
                                </p>
                                <p>                                
                                    Digital Product Design                             
                                </p>
                                <p>                         
                                    Coding                             
                                </p>
                                <p>                               
                                     Hiring
                                </p>
                            </MDBCol>

                            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase my-4  footer-h6 fw-bold'>Contact</h6>
                                <p className=''>
                                    <button className='footer-btn p-2 px-3 mx-1 fs-5'>
                                        <LuLinkedin />
                                    </button>
                                    <button className='footer-btn p-2 px-3 mx-1 fs-5'>
                                        <AiOutlineInstagram />
                                    </button>
                                    <button className='footer-btn p-2 px-3 mx-1 fs-5'>
                                        <FaFacebookF />
                                    </button>
                                </p>
                                <p className='pink-p '>
                                    <LuPhoneCall className='fs-4' /> 
                                    <span className='footer-h6'>Phone:</span> +966546550541 ,  +96567600964
                                </p>
                                <p className='pink-p'>
                                    <LuMail className='fs-4' />   smart.educ.official@gmail.com
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-2 copyright' style={{ color: 'black' }}>
                    Copyright © 2023.
                    <span className='text-reset mx-2'>
                        All Right Reserved.
                    </span>
                </div>
            </MDBFooter>
        </div>
    )
}

export default Footer
