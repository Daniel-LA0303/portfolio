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
        strings: ['Backend Developer', 'Java Developer', 'NodeJS Developer'],
        typeSpeed: 100,
        backSpeed: 50,
        startDelay: 500, // Retraso antes de comenzar la animación
        backDelay: 500, // Retraso antes de retroceder la animación
        showCursor: true, // Mostrar el cursor
        cursorChar: '|', // Carácter del cursor
        loop: false,
      };
  
      const typed = new Typed(typedRef.current, options);
  
      return () => {
        typed.destroy();
      };
    }, []);

  return (
    <div className=' mt-60'>
      <div className="text-center text-white">
        <p className='text-center text-green-500 text-2xl md:text-3xl mb-10'>I'm Luis Alberto</p>
        <span className=' text-3xl md:text-5xl' ref={typedRef} />
        <div className="mb-7"></div>
        <button
          onClick={downloadCV}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
        >
          Download CV
        </button>
      </div>
    </div>
  );
};

export default About;
