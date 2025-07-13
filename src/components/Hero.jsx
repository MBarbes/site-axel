import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white" style={{ backgroundImage: 'url(\'img/fond.png\')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
      <div className="relative z-10 text-center p-4">
        <h1 
          className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
        >
          Farceto Home Renov
        </h1>
        <p 
          className="text-lg md:text-2xl mb-8 drop-shadow-md"
        >
          Votre expert en plaquisterie et rénovation intérieure
        </p>
        <div>
          <a href="#contact" className="px-8 py-3 bg-green-600 hover:bg-green-700 rounded-full text-lg font-semibold transition-transform hover:scale-105 shadow-lg">
            Demandez un devis
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

