/* START OF FILE TopBar.jsx */

import React from 'react';

const TopBar = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 hidden sm:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2 text-xs">
          <div className="flex items-center gap-x-4">
            <span className="flex items-center gap-1.5">
              <i className="fa-solid fa-location-dot text-green-600"></i>
              4 Rue de Cormont, 62630 Longvilliers
            </span>
          </div>
          <div className="flex items-center gap-x-4">
            <a href="tel:0650522012" className="flex items-center gap-1.5 hover:text-green-600 transition-colors">
              <i className="fa-solid fa-phone text-green-600"></i>
              06 50 52 20 12
            </a>
            {/* CORRECTED mailto link */}
            <a href="mailto:farcetohomerenove @gmail.com" className="flex items-center gap-1.5 hover:text-green-600 transition-colors">
              <i className="fa-solid fa-envelope text-green-600"></i>
              farcetohomerenove @gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
/* END OF FILE TopBar.jsx */