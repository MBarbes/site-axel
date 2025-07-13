/* START OF FILE Navbar.jsx */

import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  
  const navLinks = [
    { href: '#combined-services', text: 'Services' },
    { href: '#about-us', text: 'À Propos' },
    { href: '#localisation', text: 'Zone d\'Intervention' },
    { href: '#contact', text: 'Contact' }
  ];

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = document.querySelector('nav').offsetHeight;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - 10;
      
      // Utilisation d'une animation personnalisée pour garantir un défilement fluide
      const startPosition = window.pageYOffset;
      const distance = offsetPosition - startPosition;
      const duration = 800; // Réduit à 800ms pour une meilleure performance
      let startTime = null;

      function animateScroll(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
        
        window.scrollTo(0, startPosition + distance * ease);
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animateScroll);
        }
      }
      
      requestAnimationFrame(animateScroll);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = navLinks.map(link => document.getElementById(link.href.substring(1)));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          setActiveLink(`#${section.id}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-300/90 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
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
              <a key={link.href} href={link.href} onClick={(e) => handleSmoothScroll(e, link.href)} className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative group ${activeLink === link.href ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}>
                {link.text}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-green-600 transition-all duration-300 ${activeLink === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </a>
            ))}
            <a href="https://www.facebook.com/people/Farceto-Home-Renov/61551721910151/?_rdr" target="_blank" rel="noopener noreferrer"
               className="w-9 h-9 flex items-center justify-center text-gray-700 hover:text-gray-500 transition-colors" aria-label="Facebook">
              <i className="fab fa-facebook-f text-lg"></i>
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-500" aria-controls="mobile-menu" aria-expanded={isOpen}>
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
              <a key={link.href} href={link.href} onClick={(e) => handleSmoothScroll(e, link.href)} className="text-gray-700 hover:bg-gray-500 block px-3 py-2 rounded-md text-base font-medium transition-colors relative group">
                {link.text}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
             <a href="https://www.facebook.com/people/Farceto-Home-Renov/61551721910151/?_rdr" target="_blank" rel="noopener noreferrer"
               className="text-gray-700 hover:bg-gray-500 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              <i className="fab fa-facebook-f mr-2"></i> Facebook
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
/* END OF FILE Navbar.jsx */
