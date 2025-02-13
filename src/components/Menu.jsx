import React, { useState, useEffect } from 'react';
import { Link }  from "react-router-dom";

const MenuIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
  >
    <path d="M3 12h18M3 6h18M3 18h18" />
  </svg>
);

const CloseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
  >
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

const ChevronIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    className="menu-chevron"
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

function Menu() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const menuItems = [
    { label: 'Inicio', link: '/' },
    {
      label: 'Motocross',
      submenus: [
        { label: 'Resultados', link: '/motocross/resultados' },
        { label: 'Campeonato', link: '/motocross/campeonato' },
        { label: 'Reglamento', link: '/motocross/reglamento' },
        { label: 'Calendario', link: '/motocross/calendario' }
      ]
    },
    {
      label: 'Enduro',
      submenus: [
        { label: 'Resultados', link: '/enduro/resultados' },
        { label: 'Campeonato', link: '/enduro/campeonato' },
        { label: 'Reglamento', link: '/enduro/reglamento' },
        { label: 'Calendario', link: '/enduro/calendario' }
      ]
    },
    {
      label: 'Velocidad',
      submenus: [
        { label: 'Resultados', link: '/velocidad/resultados' },
        { label: 'Campeonato', link: '/velocidad/campeonato' },
        { label: 'Reglamento', link: '/velocidad/reglamento' },
        { label: 'Calendario', link: '/velocidad/calendario' }
      ]
    },
    {
      label: 'Quadcross',
      submenus: [
        { label: 'Resultados', link: '/quadcross/resultados' },
        { label: 'Campeonato', link: '/quadcross/campeonato' },
        { label: 'Reglamento', link: '/quadcross/reglamento' },
        { label: 'Calendario', link: '/quadcross/calendario' }
      ]
    },
    { label: 'Contacto', link: '/contacto' }
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
        setActiveMobileSubmenu(null);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseEnter = (index) => {
    if (!isMobile) {
      setActiveMenu(index);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setActiveMenu(null);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveMobileSubmenu(null);
  };

  const toggleMobileSubmenu = (index) => {
    setActiveMobileSubmenu(activeMobileSubmenu === index ? null : index);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setActiveMobileSubmenu(null);
  };

  return (
    <nav className="nav-container">
      <button 
        className="mobile-menu-toggle"
        onClick={toggleMobileMenu}
        aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      <ul className={`main-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        {menuItems.map((item, index) => (
          <li
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className={`menu-item ${item.submenus ? 'has-submenu' : ''} ${
              activeMobileSubmenu === index ? 'submenu-active' : ''
            }`}
          >
            {item.submenus ? (
              <button
                className="menu-button"
                onClick={() => toggleMobileSubmenu(index)}
                aria-expanded={activeMobileSubmenu === index}
              >
                {item.label}
                <ChevronIcon />
              </button>
            ) : (
              <Link to={item.link} onClick={handleLinkClick}>
                {item.label}
              </Link>
            )}

            {item.submenus && (
              <div
                className={`submenu ${
                  (activeMenu === index && !isMobile) || activeMobileSubmenu === index ? 'active' : ''
                }`}
              >
                {item.submenus.map((submenu, subIndex) => (
                  <a
                    key={subIndex}
                    href={submenu.link}
                    className="submenu-item"
                    onClick={handleLinkClick}
                  >
                    {submenu.label}
                  </a>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;