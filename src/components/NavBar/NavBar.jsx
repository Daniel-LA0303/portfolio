import React, { useState } from 'react';

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
          <button type="button">About me</button>
          <button type="button" className='active'>Experience</button>
          <button type="button">Projects</button>
          <button type="button">Contact</button>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
