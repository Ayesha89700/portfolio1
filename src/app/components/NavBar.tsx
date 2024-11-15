"use client";

import Link from 'next/link';
import React, {useState}from 'react';
import NavLink from './NavLink';
import { Bars3Icon,XMarkIcon } from '@heroicons/react/16/solid';
import MenuOverlay from './MenuOverlay';

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  }
];

const NavBar = () => {
const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
      <div className='flex flex-wrap items-center justify-between mx-auto pt-7 px-4'>
        <Link href={"/"} className=' text-2xl md:text-5xl text-white font-semibold'>
          Portfolio
        </Link>
        <div className='mobile-menu block md:hidden'>
        {!navbarOpen ? (
             <button
             onClick={() => setNavbarOpen(true)}
             className='flex items-center px-3 py-2  border-rounded text-white border-slate-200 text-slate-
              hover:text-white hover:border-white'> 
              <Bars3Icon className='h-8 w-8' />
             </button>
             ) : (
              <button 
              onClick={() => setNavbarOpen(false)}
              className='flex items-center px-3 py-2  border-rounded text-white border-slate-200 text-slate-
              hover:text-white hover:border-white'> 
              <XMarkIcon className='h-8 w-8' />
             </button>          
             )  
             }
        </div>
        <div className='menu hidden md:block md:w-auto' id='navbar'>
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
            {navLinks.map((navLink, index) => (
              <li key={index}>
                <NavLink href={navLink.path} title={navLink.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ?  <MenuOverlay links={navLinks} /> :null }
    </nav>
  );
};

export default NavBar;
