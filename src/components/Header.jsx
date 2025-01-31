import React from 'react';
import Menu from '../components/Menu';
import logo from '../logonuevo.jpg';

function Header() {
    return (
      <header className="site-header">
        <div className="header-container">
          <div className="logo">
          <img
            src={logo}
            alt="Logo de la Institución"
            className="logo"
          />
          </div>
          <nav>
           <Menu></Menu>
          </nav>
        </div>
      </header>
    );
  }

export default Header;