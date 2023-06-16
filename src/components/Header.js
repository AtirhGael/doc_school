import React, { useState } from "react";
import {  NavLink  } from "react-router-dom";
import WhatsApp from 'react-whatsapp';
import menu from '../assets/menu.svg'
import logo from '../assets/logos.jpg'

export default function Header({ fixed }) {

  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <NavLink to='/'
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
              href="#pablo"
            >
              <img src={logo}
              style={{
                height:50,
                width:50,
                borderRadius:25,
                resize:'none'
              }}
              />
            </NavLink>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <img src={menu}/>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            
              <li className="nav-item">
                <a
                  className="px-3 py-1 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <NavLink to='/' className="fab fa-twitter text-lg leading-lg text-black opacity-75">
                    <span className="ml-2">Home</span>
                    </NavLink>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-1 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <NavLink to='/service' className="fab fa-twitter text-lg leading-lg text-black opacity-75">
                    <span className="ml-2">Academics</span>
                  </NavLink>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-1 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <NavLink to='/about'  className={({ isActive, isPending }) =>
                                          isPending ? "pending" : isActive ? "active" : ""
                                        } >
                    <span className=" fab fa-twitter text-lg leading-lg text-black opacity-75 ml-2">About</span>
                  </NavLink >
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-1 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <NavLink to='/contact'  className={({ isActive, isPending }) =>
                                          isPending ? "pending" : isActive ? "active" : ""
                                        } >
                    <span className=" fab fa-twitter text-lg leading-lg text-black opacity-75 ml-2">Contact Us</span>
                  </NavLink >
                </a>
              </li>
           
              
              <WhatsApp number="+237650292489" message="Hello World!" className="border-2 border-[#71a22f] hover:bg-[#71a22f] cursor-pointer p-1 rounded-lg ">
                <div className=" fab fa-pinterest text-[#71a22f]  hover:text-white" > Emergency Call </div>
              </WhatsApp>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}