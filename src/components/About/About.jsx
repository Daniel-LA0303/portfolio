import React, { useState, useEffect, useRef } from 'react';
import Typed from 'typed.js';
import CVFile from '../../assets/Luis_Alberto_Zacarias_Daniel_CV.pdf';

const About = () => {
    const typedRef = useRef(null);

    const downloadCV = () => {
      const link = document.createElement('a');
      link.href = CVFile;
      link.setAttribute('download', 'Luis_Alberto_Zacarias_Daniel.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    useEffect(() => {
      const options = {
        strings: ['NodeJS Developer', 'Java Developer', 'Backend Developer'],
        typeSpeed: 100,
        backSpeed: 50,
        startDelay: 500, 
        backDelay: 500, 
        showCursor: true, 
        cursorChar: '|', 
        loop: false,
      };
  
      const typed = new Typed(typedRef.current, options);
  
      return () => {
        typed.destroy();
      };
    }, []);

  return (
    <div className='px-5 mt-20 sm:mt-60 text-white' >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
        <div className='pt-10'>
          <p className='text-green-500 text-2xl md:text-3xl mb-10'>I'm Luis Alberto</p>
          <span className=' text-xl md:text-3xl lg:text-5xl' ref={typedRef} />
          <div className="mb-10"></div>
          <button
            onClick={downloadCV}
            className="bg-green-500 hover:bg-green-700 py-2 px-4 rounded transition duration-300 ease-in-out"
          >
            Download CV
          </button>
        </div>
        <div className=' mx-auto w-60 md:w-full'>
          
          <img src="/images/logo.gif" alt="" className=""/>
        </div>
      </div>

      <div className='grid grid-cols-1 my-20' id="about-me">
        <div className=' w-full md:w-4/6'>
          <p className=' text-lg mb-5'>Introduction</p>
          <p className='text-green-500 text-5xl mb-4'>About Me</p>
          <p className=' text-xl'>I am Mr. Luis Alberto, I am about to graduate with a degree in <span className='text-green-500 font-bold text-lg'>Computer Science Engineering.</span> Currently, 
            I am in my final semester of the program. I have experience as a backend programmer in <span className='text-green-500 font-bold text-lg'>Java and Node.js.</span> 
            Additionally, I am working on freelance projects involving microservices using <span className='bg-text-500 font-bold text-lg'>Spring Boot</span>, and I have experience in <span className='text-green-500 font-bold text-lg'>cloud computing.</span>
          </p>
        </div>
        <div className='w-full'>
        </div>
      </div>
    </div>
  );
};

export default About;
