import React from 'react';

const ServiceCard = ({ icon, title, description, delay, category }) => (
  <div 
    className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-stone-200 overflow-hidden animate-fade-in hover:border-amber-200"
    style={{ animationDelay: `${delay * 0.1}s` }}
  >
    {/* Header avec icône et gradient */}
    <div className="relative bg-gradient-to-br from-amber-50 to-stone-100 p-6 pb-4">
      <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/10 rounded-full -translate-y-4 translate-x-4"></div>
      <div className="relative flex items-center space-x-4">
        <div className="bg-gradient-to-br from-amber-500 to-stone-600 p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-500">
          <i className={`${icon} text-2xl text-white`}></i>
        </div>
        <div className="flex-1">
          <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold mb-2">
            {category}
          </span>
          <h4 className="text-xl font-bold text-stone-800 leading-tight">{title}</h4>
        </div>
      </div>
    </div>
    
    {/* Contenu */}
    <div className="p-6 pt-4">
      <p className="text-stone-600 leading-relaxed text-sm">{description}</p>
      
      {/* Prix indicatif */}
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-stone-500">À partir de</span>
        <span className="text-lg font-bold text-amber-600">Sur devis</span>
      </div>
    </div>
    
    {/* Hover effect overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 to-emerald-500/0 group-hover:from-amber-500/5 group-hover:to-emerald-500/5 transition-all duration-500 pointer-events-none"></div>
  </div>
);

const Services = () => {
    const plaquisterieServices = [
    { icon: 'fa-solid fa-hammer', title: 'Installation de plaques de placo', description: 'Pose professionnelle de plaques de plâtre pour murs et plafonds, garantissant une finition lisse et durable adaptée à vos espaces dans la région du Pas-de-Calais.', category: 'Installation' },
    { icon: 'fa-solid fa-wrench', title: 'Réparation et entretien de placo', description: 'Réparation de fissures, trous ou dégâts sur vos plaques de plâtre existantes, avec un entretien pour prolonger leur durée de vie.', category: 'Réparation' },
    { icon: 'fa-solid fa-snowflake', title: 'Isolation acoustique et thermique', description: 'Solutions d\'isolation performantes pour réduire les nuisances sonores et améliorer l\'efficacité énergétique de votre habitat.', category: 'Isolation' },
    { icon: 'fa-solid fa-border-all', title: 'Faux plafond (dalle et standard)', description: 'Installation de faux plafonds pour un rendu esthétique ou pour intégrer des éclairages, avec options en dalles ou plâtre classique.', category: 'Aménagement' },
    { icon: 'fa-solid fa-border-style', title: 'Cloison sèche et contre-cloison', description: 'Création de cloisons sèches pour diviser vos espaces, et pose de contre-cloisons pour renforcer l\'isolation ou masquer des imperfections.', category: 'Cloisons' },
    { icon: 'fa-solid fa-temperature-low', title: 'Isolation de comble en laine soufflée', description: 'Isolation optimale de vos combles par projection de laine soufflée, pour une protection thermique efficace et des économies d\'énergie.', category: 'Isolation' },
  ];

  const otherServices = [
    { icon: 'fa-solid fa-door-open', title: 'Pose de menuiserie intérieure', description: 'Installation soignée de portes, cadres et autres éléments de menuiserie intérieure pour un intérieur fonctionnel et esthétique.', category: 'Menuiserie' },
    { icon: 'fa-solid fa-paint-roller', title: 'Enduits, bandes et ratissage', description: 'Application d\'enduits, pose de bandes de joint et ratissage pour des surfaces parfaitement lisses prêtes à peindre ou à décorer.', category: 'Finitions' },
  ];

  return (
    <section id="combined-services" className="py-20 lg:py-32 bg-gradient-to-br from-stone-50 via-amber-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header moderne avec statistiques */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-100 to-emerald-100 rounded-full mb-6">
            <svg className="w-5 h-5 text-amber-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Services certifiés • Devis gratuit • Expertise locale
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-stone-800 mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-stone-700 to-emerald-600">
              Nos Services
            </span>
            <br />
            <span className="text-stone-700">de Plaquisterie</span>
          </h2>
          
          <p className="text-xl text-stone-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            De la conception à la finition, nous transformons vos espaces avec une expertise reconnue dans le Pas-de-Calais
          </p>
          
          {/* Statistiques en bento box */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-stone-200">
              <div className="text-3xl font-bold text-amber-600">200+</div>
              <div className="text-stone-600 text-sm">Projets réalisés</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-stone-200">
              <div className="text-3xl font-bold text-emerald-600">10+</div>
              <div className="text-stone-600 text-sm">Années d'expertise</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-stone-200">
              <div className="text-3xl font-bold text-stone-600">5★</div>
              <div className="text-stone-600 text-sm">Satisfaction client</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-stone-200">
              <div className="text-3xl font-bold text-teal-600">24h</div>
              <div className="text-stone-600 text-sm">Réponse devis</div>
            </div>
          </div>
        </div>
        
        <div className="lg:grid lg:grid-cols-4 lg:gap-12">
          
          {/* Services principal - Layout bento asymétrique */}
          <div className="lg:col-span-3 space-y-16">
            <div>
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-amber-500 to-stone-600 p-3 rounded-xl mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-stone-800">Plaquisterie & Isolation</h3>
                  <p className="text-stone-600">Solutions complètes pour votre confort thermique et acoustique</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {plaquisterieServices.map((service, index) => (
                  <ServiceCard key={index} {...service} delay={index} />
                ))}
              </div>
            </div>
            
            <div>
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3 rounded-xl mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-stone-800">Finitions & Aménagement</h3>
                  <p className="text-stone-600">La touche finale pour un résultat parfait</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {otherServices.map((service, index) => (
                  <ServiceCard key={index} {...service} delay={index + plaquisterieServices.length} />
                ))}
              </div>
            </div>
          </div>

          {/* CTA sidebar moderne */}
          <div className="mt-16 lg:mt-0">
            <div className="bg-gradient-to-br from-amber-600 via-stone-700 to-emerald-700 text-white rounded-3xl p-8 shadow-2xl sticky top-24 overflow-hidden relative">
              {/* Éléments décoratifs */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <div className="bg-white/20 p-4 rounded-2xl mb-6 inline-block">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">Projet sur mesure ?</h3>
                <p className="mb-6 text-white/90 leading-relaxed">
                  Chaque projet est unique. Contactez-nous pour une étude personnalisée et un devis adapté à vos besoins spécifiques.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-white/90">
                    <svg className="w-5 h-5 mr-3 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Devis gratuit sous 24h
                  </div>
                  <div className="flex items-center text-white/90">
                    <svg className="w-5 h-5 mr-3 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Étude technique gratuite
                  </div>
                  <div className="flex items-center text-white/90">
                    <svg className="w-5 h-5 mr-3 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Garantie décennale
                  </div>
                </div>
                
                <a 
                  href="#contact" 
                  className="group inline-flex items-center justify-center w-full bg-white text-stone-800 font-bold px-6 py-4 rounded-2xl hover:bg-stone-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  Obtenir mon devis gratuit
                  <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
