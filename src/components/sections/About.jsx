import React from 'react';

const About = () => {
  return (
    <section id="about-us" className="py-20 lg:py-32 bg-gradient-to-br from-stone-100 via-amber-50 to-emerald-50 relative overflow-hidden">
      {/* Éléments décoratifs 2025 */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-amber-200/30 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-200/30 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-stone-300/30 rounded-full blur-xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header moderne */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-100 to-emerald-100 rounded-full mb-8 border border-amber-200/50">
            <svg className="w-5 h-5 text-amber-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            À propos de notre entreprise
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-stone-800 mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-stone-700 to-emerald-600">
              Votre Artisan
            </span>
            <br />
            <span className="text-stone-700">de Confiance</span>
          </h2>
          
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Passion, précision et savoir-faire au service de votre habitat depuis plus de 10 ans
          </p>
        </div>

        {/* Layout bento asymétrique */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Bloc principal - Histoire & Mission */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-lg border border-stone-200 hover:shadow-xl transition-all duration-500">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-amber-500 to-stone-600 p-4 rounded-2xl mr-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-stone-800">Farceto Home Renov</h3>
                  <p className="text-stone-600">Votre partenaire rénovation à Longvilliers</p>
                </div>
              </div>
              
              <div className="space-y-6 text-stone-700 leading-relaxed">
                <p className="text-lg">
                  <strong className="text-amber-600">Bienvenue chez Farceto Home Renov</strong>, votre artisan plaquiste expert et partenaire privilégié pour tous vos travaux de plâtrerie et de rénovation intérieure à <strong>Longvilliers (62)</strong> et ses environs dans le Pas-de-Calais.
                </p>
                
                <div className="bg-gradient-to-r from-amber-50 to-emerald-50 rounded-2xl p-6 border border-amber-200/50">
                  <h4 className="text-xl font-bold text-amber-700 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Notre Mission
                  </h4>
                  <p>
                    Transformer vos espaces de vie ou de travail en lieux fonctionnels, esthétiques et confortables. Nous croyons qu'un travail de plâtrerie bien exécuté est la base d'un intérieur réussi.
                  </p>
                </div>
                
                <p>
                  Chez Farceto Home Renov, la <strong className="text-emerald-600">confiance</strong> et la <strong className="text-emerald-600">satisfaction client</strong> sont au cœur de notre démarche. Nous vous écoutons attentivement, vous conseillons et réalisons vos travaux avec précision, dans le respect des délais convenus.
                </p>
              </div>
              
              <div className="mt-8">
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-600 to-stone-700 text-white rounded-2xl font-semibold hover:from-amber-500 hover:to-stone-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Discutons de votre projet
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar - Statistiques et image */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Statistiques modernes */}
            <div className="bg-gradient-to-br from-amber-600 via-stone-700 to-emerald-700 rounded-3xl p-8 text-white shadow-xl">
              <h4 className="text-2xl font-bold mb-6 text-center">Notre Expertise</h4>
              
              <div className="space-y-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-4xl font-black mb-2">10+</div>
                  <div className="text-white/80 text-sm font-medium">Années d'expérience</div>
                </div>
                
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-4xl font-black mb-2">200+</div>
                  <div className="text-white/80 text-sm font-medium">Projets réalisés</div>
                </div>
                
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-4xl font-black mb-2">100%</div>
                  <div className="text-white/80 text-sm font-medium">Satisfaction client</div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="flex items-center justify-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Certifié
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Assuré
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Local
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image avec design moderne */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-stone-200 hover:shadow-xl transition-all duration-500">
              <div className="relative overflow-hidden rounded-2xl group">
                <img 
                  src="img/previewfarceto.png" 
                  alt="Farceto Home Renov - Travaux de rénovation intérieure à Longvilliers" 
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="font-semibold">Réalisation Farceto Home Renov</p>
                  <p className="text-sm text-white/80">Rénovation complète • Longvilliers</p>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <p className="text-stone-600 text-sm font-medium">Aperçu de nos réalisations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section valeurs - Layout horizontal */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-stone-200 hover:shadow-xl transition-all duration-500 text-center">
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-stone-800 mb-3">Qualité Garantie</h4>
            <p className="text-stone-600 text-sm leading-relaxed">
              Chaque projet est réalisé avec le plus grand soin, dans le respect des normes et de vos exigences.
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-stone-200 hover:shadow-xl transition-all duration-500 text-center">
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-stone-800 mb-3">Délais Respectés</h4>
            <p className="text-stone-600 text-sm leading-relaxed">
              Ponctualité et respect des échéances sont nos priorités pour votre sérénité.
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-stone-200 hover:shadow-xl transition-all duration-500 text-center">
            <div className="bg-gradient-to-br from-stone-500 to-stone-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-stone-800 mb-3">Proximité Locale</h4>
            <p className="text-stone-600 text-sm leading-relaxed">
              Basés à Longvilliers, nous connaissons parfaitement les spécificités régionales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
