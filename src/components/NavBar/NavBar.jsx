import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);

    // Agregar lógica para cambiar la clase 'open' en el elemento 'body'
    if (isMenuOpen) {
      document.body.classList.remove('open');
    } else {
      document.body.classList.add('open');
    }
  };

  return (
    <>
      <div className="navbar">
        {isMenuOpen && (
          <div className="navbar-overlay" onClick={toggleMenuOpen}></div>
        )}

        <button type="button" className={`navbar-burger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenuOpen}>
            <span className="material-icons">menu</span>
        </button>


        <h1 className="navbar-title text-green-500">Daniel-LA | Developer</h1>
        <nav className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
          <Link 
            className=' cursor-pointer'
            to='about-me'
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            onClick={toggleMenuOpen}
          >About me</Link>
          <Link
            className=' cursor-pointer'
            to='experience'
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}           
            onClick={toggleMenuOpen} 
          >Experience</Link>
          <Link
            className=' cursor-pointer'
            to='projects'
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}    
            onClick={toggleMenuOpen}      
          >Projects</Link>
          <Link
            className=' cursor-pointer'
            to='contact'
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}   
            onClick={toggleMenuOpen}       
          >Contact</Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
