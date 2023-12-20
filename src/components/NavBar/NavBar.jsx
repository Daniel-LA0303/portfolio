import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <>
      {/* New navbar */}
      <header className='bg-black-card'>

        <div className=' text-green-500 text-base sm:text-2xl'>Daniel-LA | Developer</div>

        <ul className={`navbar ${menuAbierto ? 'open' : ''}`}>
          <li>
            <Link
              className=' cursor-pointer'
              to='about-me'
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >About me</Link>
          </li>
          <li>
            <Link
              className=' cursor-pointer'
              to='experience'
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >Experience</Link>
          </li>
          <li>
            <Link
              className=' cursor-pointer'
              to='projects'
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >Projects</Link>
          </li>
          <li>
            <Link
              className=' cursor-pointer'
              to='contact'
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >Contact</Link>
          </li>
        </ul>

        <div class="main">
          <div className={'menu-icon'} id="" onClick={toggleMenu}>
            <FontAwesomeIcon icon={menuAbierto ? faClose : faBars} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
