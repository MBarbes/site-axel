import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [content, setContent] = useState({
    title: "Farceto Home Renov Expert Plaquiste à Longvilliers",
    subtitle: "Transformez votre intérieur avec nos solutions de plaquisterie, isolation et rénovation sur mesure dans le Pas-de-Calais.",
    ctaText: "Obtenez votre devis gratuit"
  });

  useEffect(() => {
    // Charger le contenu depuis l'administration
    const savedContent = localStorage.getItem('adminContent');
    if (savedContent) {
      const adminContent = JSON.parse(savedContent);
      if (adminContent.hero) {
        setContent({
          title: adminContent.hero.title,
          subtitle: adminContent.hero.description,
          ctaText: adminContent.hero.ctaText || "Obtenez votre devis gratuit"
        });
      }
    }
  }, []);

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center text-white overflow-hidden">
      {/* Image de fond avec parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: 'url(\'img/fond.png\')',
          transform: 'scale(1.1)'
        }}
      ></div>
      
      {/* Overlay moderne avec palette 2025 */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/70 via-stone-800/60 to-emerald-900/80"></div>
      
      {/* Dégradé sophistiqué Neo Sage */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-emerald-800/40 to-transparent"></div>
      
      {/* Éléments flottants 2025 - Style Mocha Mousse */}
      <div className="absolute top-1/4 left-12 w-24 h-24 bg-amber-600/30 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute top-1/3 right-16 w-16 h-16 bg-emerald-500/25 rounded-full blur-xl animate-pulse delay-500"></div>
      <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-stone-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-teal-400/20 rounded-full blur-xl animate-pulse delay-1500"></div>
      
      <div className="relative z-10 text-center p-6 max-w-6xl mx-auto">
        {/* Badge moderne 2025 */}
        <div className="mb-10">
          <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-600/90 to-stone-600/90 text-white text-sm font-semibold rounded-full backdrop-blur-md border border-white/20 shadow-2xl animate-fade-in">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Expert certifié • 10+ ans d'expérience • Devis gratuit
          </span>
        </div>
        
        {/* Titre avec typographie audacieuse 2025 */}
        <h1 className="text-5xl md:text-8xl font-black mb-10 leading-[0.9] animate-fade-in-down">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-stone-100 to-emerald-200 drop-shadow-2xl">
            {content.title.split(' ').slice(0, 3).join(' ')}
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-teal-100 to-white drop-shadow-2xl mt-2">
            {content.title.split(' ').slice(3).join(' ')}
          </span>
        </h1>
        
        {/* Description avec contraste fort */}
        <p className="text-xl md:text-3xl mb-14 text-stone-100 drop-shadow-xl animate-fade-in-up max-w-4xl mx-auto leading-relaxed font-medium">
          {content.subtitle}
        </p>
        
        {/* Statistiques visuelles modern */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 animate-fade-in">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20">
            <div className="text-3xl font-bold text-emerald-300">200+</div>
            <div className="text-sm text-stone-200">Projets réalisés</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20">
            <div className="text-3xl font-bold text-amber-300">5★</div>
            <div className="text-sm text-stone-200">Satisfaction client</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20">
            <div className="text-3xl font-bold text-teal-300">24h</div>
            <div className="text-sm text-stone-200">Réponse devis</div>
          </div>
        </div>
        
        {/* CTA avec palette 2025 */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in">
          <a 
            href="#contact" 
            className="group relative px-10 py-5 bg-gradient-to-r from-amber-600 to-stone-700 hover:from-amber-500 hover:to-stone-600 text-white rounded-2xl text-xl font-bold transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl hover:shadow-amber-500/30 overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              {content.ctaText}
              <svg className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </a>
          
          <a 
            href="#calculator" 
            className="px-10 py-5 border-2 border-emerald-400/40 text-emerald-100 rounded-2xl text-xl font-semibold transition-all duration-500 hover:bg-emerald-500/20 hover:border-emerald-300/60 backdrop-blur-md hover:scale-105"
          >
            Calculateur prix 2025
          </a>
        </div>
        
        {/* Indicateur de scroll moderne */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
            <span className="text-xs text-white/60 font-medium">Découvrir</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
