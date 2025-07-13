/* START OF FILE Navbar.jsx */

import React, { useState } from 'react';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  const navLinks = [
    { href: '#combined-services', text: 'Services' },
    { href: '#about-us', text: 'À Propos' },
    { href: '#localisation', text: 'Zone d\'Intervention' },
    { href: '#contact', text: 'Contact' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="/" aria-label="Accueil">
              <img src="img/logo.png" alt="Logo Farceto Home Renov" className="h-16 w-auto" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                {link.text}
              </a>
            ))}
            <a href="https://www.facebook.com/people/Farceto-Home-Renov/61551721910151/?_rdr" target="_blank" rel="noopener noreferrer"
               className="text-white bg-blue-600 hover:bg-blue-700 w-9 h-9 flex items-center justify-center rounded-full transition-colors" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f text-lg"></i>
            </a>
            <button
              onClick={toggleDarkMode}
              className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-400 transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
             <button
              onClick={toggleDarkMode}
              className="w-9 h-9 mr-2 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-400 transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-gray-700" aria-controls="mobile-menu" aria-expanded={isOpen}>
              <span className="sr-only">Ouvrir le menu principal</span>
              {isOpen ? (
                <i className="fa-solid fa-xmark h-6 w-6"></i>
              ) : (
                <i className="fa-solid fa-bars h-6 w-6"></i>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                {link.text}
              </a>
            ))}
             <a href="https://www.facebook.com/people/Farceto-Home-Renov/61551721910151/?_rdr" target="_blank" rel="noopener noreferrer"
               className="text-blue-600 dark:text-blue-400 hover:bg-green-100 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              <i className="fa-brands fa-facebook-f mr-2"></i> Facebook
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
/* END OF FILE Navbar.jsx */