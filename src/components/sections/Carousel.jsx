import React, { useState, useEffect, useCallback } from 'react';

const Carousel = () => {
  const images = [
    { src: 'img/image1.jpg', caption: 'Rénovation intérieure complète' },
    { src: 'img/image2.jpg', caption: 'Installation de cloisons sèches' },
    { src: 'img/image3.jpg', caption: 'Isolation thermique et acoustique' },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setHovered] = useState(false);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [goToNext]);

  return (
    <section id="gallery" className="relative w-full min-h-screen overflow-hidden">
      <div 
        className="relative h-full min-h-screen"
        onMouseEnter={() => setHovered(true)} 
        onMouseLeave={() => setHovered(false)}
      >
        <div className="flex transition-transform duration-1000 ease-out h-full min-h-screen" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full h-full min-h-screen relative">
              <img 
                src={image.src} 
                alt={`${image.caption} par Farceto Home Renov à Longvilliers`} 
                className="w-full h-full min-h-screen object-cover transition-transform duration-[10000ms] ease-out hover:scale-105" 
              />
              
              {/* Overlay moderne avec palette 2025 */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/60 via-stone-800/40 to-emerald-900/60"></div>
              
              {/* Badge flottant avec catégorie */}
              <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md rounded-2xl px-6 py-3 shadow-xl border border-white/20">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-stone-800 font-semibold text-sm">Projet réalisé</span>
                </div>
              </div>
              
              {/* Contenu de la slide repositionné */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-amber-500 to-emerald-600 p-3 rounded-xl mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">{image.caption}</h3>
                      <p className="text-white/80 text-sm md:text-base">Réalisation Farceto Home Renov • Pas-de-Calais</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-amber-500/20 text-amber-200 rounded-full text-xs font-medium">Plaquisterie</span>
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-200 rounded-full text-xs font-medium">Isolation</span>
                    <span className="px-3 py-1 bg-stone-500/20 text-stone-200 rounded-full text-xs font-medium">Finitions</span>
                  </div>
                  
                  <a 
                    href="#contact" 
                    className="inline-flex items-center px-6 py-3 bg-white text-stone-800 rounded-xl font-semibold hover:bg-stone-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Projet similaire ?
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Header centré avec design moderne */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-20 pointer-events-none">
          <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-12 border border-white/10 shadow-2xl max-w-4xl">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500/20 to-emerald-500/20 rounded-full mb-8 border border-white/20">
              <svg className="w-5 h-5 text-amber-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Galerie de nos réalisations
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-emerald-200">
                Nos Réalisations
              </span>
              <br />
              <span className="text-white/90">à Longvilliers</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Découvrez notre savoir-faire à travers quelques-unes de nos plus belles réalisations en plaquisterie et rénovation
            </p>
          </div>
        </div>

        {/* Indicateurs modernes */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-xl rounded-full px-6 py-4 border border-white/20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Aller à l'image ${index + 1}`}
                className={`relative transition-all duration-500 ${
                  currentIndex === index 
                    ? 'w-12 h-3 bg-white rounded-full' 
                    : 'w-3 h-3 bg-white/40 hover:bg-white/60 rounded-full hover:scale-125'
                }`}
              >
                {currentIndex === index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
            
            <div className="w-px h-6 bg-white/20 mx-2"></div>
            
            <div className="flex items-center space-x-2 text-white/70 text-sm">
              <span className="font-medium">{currentIndex + 1}</span>
              <span>/</span>
              <span>{images.length}</span>
            </div>
          </div>
        </div>

        {/* Navigation améliorée */}
        <button 
          onClick={goToPrev} 
          aria-label="Précédent" 
          className={`absolute top-1/2 left-8 transform -translate-y-1/2 bg-white/10 backdrop-blur-xl text-white p-4 rounded-2xl border border-white/20 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 z-30 transition-all duration-500 ${isHovered ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-90 -translate-x-4'}`}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={goToNext} 
          aria-label="Suivant" 
          className={`absolute top-1/2 right-8 transform -translate-y-1/2 bg-white/10 backdrop-blur-xl text-white p-4 rounded-2xl border border-white/20 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 z-30 transition-all duration-500 ${isHovered ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-90 translate-x-4'}`}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Carousel;
