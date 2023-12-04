import React from 'react';



const ContactFixed = () => {
  return (
    <div className="hidden md:flex  fixed bottom-0 right-0 m-4 flex-col items-end">
      <div className="flex flex-col gap-2">
        <a 
            className='cursor-pointer'
            href="https://github.com/Daniel-LA0303" 
            target='_blank'
        >
            <img src="/images/GITHUB.png" width={30} alt="" />
        </a>
        <a 
            className='cursor-pointer'
            href="https://www.linkedin.com/in/luis-alberto-zacarias-daniel-137118209/"
            target='_blank'
        >
            <img src="/images/linkedin.png" width={30}  alt="" />
        </a>
        
        <div className='flex justify-center items-center'>
            <div className=" border-l border-2 border-gray-300 h-14"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactFixed;
