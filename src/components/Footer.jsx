import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navLinks = [
    { href: '#combined-services', text: 'Services' },
    { href: '#gallery', text: 'Réalisations' },
    { href: '#about-us', text: 'À Propos' },
    { href: '#contact', text: 'Contact' },
  ];

  return (
    <footer className="bg-gray-800 dark:bg-black text-gray-400 text-center py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2 mb-8">
            {navLinks.map(link => (
                <div key={link.href} className="px-5 py-2">
                    <a href={link.href} className="text-base leading-6 hover:text-white transition-colors">
                        {link.text}
                    </a>
                </div>
            ))}
        </nav>
        <div className="flex justify-center mb-8">
            <a href="https://www.facebook.com/people/Farceto-Home-Renov/61551721910151/?_rdr" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-blue-500 transition-colors" aria-label="Facebook">
              <span className="sr-only">Facebook</span>
              <i className="fa-brands fa-facebook-f text-2xl"></i>
            </a>
        </div>
        <p className="text-center text-sm">
          © {currentYear} Farceto Home Renov | Plaquiste à Longvilliers, Pas-de-Calais
        </p>
        <p className="text-center text-xs mt-2">
          Tous droits réservés
        </p>
      </div>
    </footer>
  );
};

export default Footer;
