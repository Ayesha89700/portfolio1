"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

    

const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                  <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello,I&apos;m{} </span>
                  <span>
                    <br></br>
                  <TypeAnimation
      sequence={[
        'Ayesha',
        1000, 
        'UI/UX Website Designer',
        1000,
        'Front-End Developer',
        1000,
        'Back-End Developer',
        1000,
        'Graphic Designer',
        1000,
        'Digital Marketer',
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
                  </span>
                  
                    </h1>
                    <p className='text-[#ADB7BE]  text-base sm:text-lg lg:text-xl'>
                      As a passionate UI/UX designer, I thrive on creating intuitive, user-centered designs that blend functionality with aesthetic appeal.
                    Proficient in both front-end and back-end development, I create clean, maintainable code that ensures high performance and usability.
                    </p>
                    <div className=" mt-6flex flex-col lg:flex-row lg:space-x-4">
                  <button className=" px-6 py-3 rounded-full sm:w-fit bg-gradient-to-br from-blue-500 to-pink-500 hover:bg-slate-200 text-white mb-3 lg:mb-0 mt-5">
                   Hire Me
                  </button>
                  <button className="px-6 py-3 rounded-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-600 hover:bg-slate-800 font-semibold  mt-0 lg:mt-0">
                  <a
                href="/cv.pdf" // path to the CV in the public directory
             download="My_CV" // name the file will have when downloaded
               className="px-1 py-1 rounded-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-600 hover:bg-slate-800  mt-0 lg:mt-0">
                   Download CV
                   </a>
                    
               </button>
                </div>

            </div>
            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={350}
              height={350}
            />
          </div>
                </div>

            </div>
    

    </section>
  )
}

export default HeroSection
