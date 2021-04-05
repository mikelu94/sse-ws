import React from 'react';

const Navbar = (props) => {
  const handleSelectNavbarItem = (event) => props.setNavbarItem(event.target.innerText);
  return (
    <nav className='navbar is-dark'>
      <div className='navbar-brand'>
        <p onClick={handleSelectNavbarItem} className='navbar-item'> Home </p>
      </div>
      <div className='navbar-menu'>
        <div className='navbar-start'>
          <div className='navbar-item'>
            <a onClick={handleSelectNavbarItem} className='navbar-item'> Server-Sent Events </a>
          </div>
          <div className='navbar-item'>
            <a onClick={handleSelectNavbarItem} className='navbar-item'> WebSockets </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
