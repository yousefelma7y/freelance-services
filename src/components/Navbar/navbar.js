import React from 'react';

import { AiFillHome } from 'react-icons/ai';
import { MdDesignServices } from 'react-icons/md';
import { TbChartInfographic } from 'react-icons/tb';
import { IoIosContacts } from 'react-icons/io';

import { BiMenuAltRight } from 'react-icons/bi';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'
import {  useLocation } from 'react-router';



const Navigate = () => {

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <Navbar expand="lg" className=" navbar justify-content-center " >
      <div className='nav-shadow p-0 m-0'>
        <svg className='shadow-svg' viewBox="0 0 242 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 -1.97949C28.4413 19.5761 92.319 60.1091 158.167 48.3929C201.717 40.6581 227.282 18.5238 242 -1.97949H0Z" fill="#12355B" fill-opacity="0.14"/>
        </svg>
      </div>
      <Container className='p-0 m-0 w-100 row '>
      
        <Navbar.Brand href="/" className='p-0 m-0 col-5'>
          <div className=''>
            <img src='./images/logo.png' className='logo ' />
          </div>
        </Navbar.Brand>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='col-2 m-1 p-0' >
          <span ><BiMenuAltRight className='menu-icon'/> </span>
        </Navbar.Toggle>


        <Navbar.Collapse id="basic-navbar-nav " className='p-0 m-0 col-7 row text-center ' >
          <Nav className=" justify-content-center p-0 m-0 ">
            <Nav.Link href="/" className= {splitLocation[1] =="" ?'nav-active fs-5 ':'nav fs-5 '}><AiFillHome className='icon fs-4 mb-1'/>Home</Nav.Link>
            <Nav.Link href="/#services"className= 'nav fs-5  mx-1' ><MdDesignServices className='fs-4 mb-1 icon'/>Services</Nav.Link>
            <Nav.Link href="/#about" className= 'nav fs-5  mx-1' ><TbChartInfographic className='fs-4 mb-2 icon'/>About Us</Nav.Link>
            <Nav.Link href="/#contact"className= 'nav fs-5   '><IoIosContacts  className='fs-4 mb-1 icon'/>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>

     
      </Container>
    </Navbar>
  )
}

export default Navigate
