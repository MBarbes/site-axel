import React, { useState, useEffect, useCallback } from 'react';

const Carousel = () => {
  const images = [
    'img/image1.jpg',
    'img/image2.jpg',
    'img/image3.jpg',
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
    <section id="gallery" className="relative w-full h-screen overflow-hidden">
      <div 
        className="relative h-full"
        onMouseEnter={() => setHovered(true)} 
        onMouseLeave={() => setHovered(false)}
      >
        <div className="flex transition-transform duration-700 ease-in-out h-full" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full h-full">
              <img src={image} alt={`Exemple de réalisation ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Nos Réalisations</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">Quelques exemples de notre savoir-faire en images.</p>
          <div className="flex justify-center space-x-3 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Aller à l'image ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-white' : 'bg-white/50 hover:bg-white'}`}
              ></button>
            ))}
          </div>
        </div>

        <button onClick={goToPrev} aria-label="Précédent" className={`absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/20 text-white p-3 rounded-full backdrop-blur-sm hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white z-10 transition-all duration-300 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button onClick={goToNext} aria-label="Suivant" className={`absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 text-white p-3 rounded-full backdrop-blur-sm hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white z-10 transition-all duration-300 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Carousel;
