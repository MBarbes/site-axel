import React, { useState, useEffect } from 'react';

const Calculator = () => {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [service, setService] = useState('placo');
  const [complexity, setComplexity] = useState('standard');
  const [estimate, setEstimate] = useState(null);

  // Prix par défaut basés sur les recherches 2025
  const [prices, setPrices] = useState({
    placo: { name: 'Plaquisterie', priceMin: 25, priceMax: 35, description: 'Pose de placo avec fournitures' },
    isolation: { name: 'Isolation thermique', priceMin: 150, priceMax: 200, description: 'Isolation extérieure sous enduit' },
    cloison: { name: 'Cloison séparative', priceMin: 27, priceMax: 60, description: 'Cloison en placo avec pose' }
  });

  useEffect(() => {
    // Charger les prix depuis l'administration si disponibles
    const savedPrices = localStorage.getItem('adminPrices');
    if (savedPrices) {
      setPrices(JSON.parse(savedPrices));
    }
  }, []);

  const calculateEstimate = () => {
    if (!length || !width || length <= 0 || width <= 0) {
      setEstimate({ error: 'Veuillez entrer des dimensions valides.' });
      return;
    }

    const area = length * width;
    const serviceData = prices[service];
    
    // Calculer le prix en fonction de la complexité
    let basePrice = serviceData.priceMin;
    let maxPrice = serviceData.priceMax;
    
    // Ajustement selon la complexité
    const complexityMultiplier = {
      simple: 0.9,    // -10%
      standard: 1.0,  // prix normal
      complex: 1.2    // +20%
    };
    
    basePrice *= complexityMultiplier[complexity];
    maxPrice *= complexityMultiplier[complexity];
    
    // Calculer coût min et max
    const minCost = area * basePrice;
    const maxCost = area * maxPrice;
    
    setEstimate({ 
      minCost: minCost.toFixed(2), 
      maxCost: maxCost.toFixed(2), 
      area: area.toFixed(2), 
      service: serviceData.name,
      complexity: complexity,
      priceRange: `${basePrice.toFixed(0)}€ - ${maxPrice.toFixed(0)}€`
    });
  };

  const resetForm = () => {
    setLength('');
    setWidth('');
    setService('placo');
    setComplexity('standard');
    setEstimate(null);
  };

  return (
    <section id="calculator" className="py-20 lg:py-32 bg-gradient-to-br from-emerald-50 via-stone-50 to-amber-50 relative overflow-hidden">
      {/* Éléments décoratifs 2025 */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-emerald-200/30 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-amber-200/30 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-stone-300/30 rounded-full blur-xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header moderne */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-100 to-amber-100 rounded-full mb-8 border border-emerald-200/50">
            <svg className="w-5 h-5 text-emerald-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
            </svg>
            Calculateur de prix 2025
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-stone-800 mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-stone-700 to-amber-600">
              Estimation
            </span>
            <br />
            <span className="text-stone-700">de Projet</span>
          </h2>
          
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Obtenez une estimation instantanée basée sur les tarifs du marché 2025
          </p>
        </div>

        {/* Layout bento moderne */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Formulaire principal */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-stone-200">
              
              {/* Instructions */}
              <div className="bg-gradient-to-r from-emerald-50 to-amber-50 rounded-2xl p-6 mb-8 border border-emerald-200/50">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-xl">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-emerald-800 mb-2">Mode d'emploi</h3>
                    <p className="text-emerald-700 text-sm leading-relaxed">
                      Saisissez les dimensions de votre projet, choisissez le type de prestation et le niveau de complexité pour obtenir une estimation basée sur les tarifs 2025.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Formulaire */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Longueur */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-stone-700">
                      📏 Longueur (en mètres)
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        placeholder="Ex: 4.5"
                        min="0"
                        step="0.1"
                        className="w-full px-4 py-4 border border-stone-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 text-lg bg-white/50 backdrop-blur-sm"
                      />
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-stone-400 font-medium">
                        m
                      </div>
                    </div>
                  </div>
                  
                  {/* Largeur */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-stone-700">
                      📐 Largeur (en mètres)
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                        placeholder="Ex: 3.2"
                        min="0"
                        step="0.1"
                        className="w-full px-4 py-4 border border-stone-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 text-lg bg-white/50 backdrop-blur-sm"
                      />
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-stone-400 font-medium">
                        m
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Service */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-stone-700">
                      🔧 Type de prestation
                    </label>
                    <div className="relative">
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-4 py-4 border border-stone-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent appearance-none transition-all duration-300 text-lg bg-white/50 backdrop-blur-sm"
                      >
                        {Object.entries(prices).map(([key, serviceData]) => (
                          <option key={key} value={key}>
                            {serviceData.name}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-stone-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Complexité */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-stone-700">
                      ⚙️ Niveau de complexité
                    </label>
                    <div className="relative">
                      <select
                        value={complexity}
                        onChange={(e) => setComplexity(e.target.value)}
                        className="w-full px-4 py-4 border border-stone-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent appearance-none transition-all duration-300 text-lg bg-white/50 backdrop-blur-sm"
                      >
                        <option value="simple">💚 Simple (-10%)</option>
                        <option value="standard">🟡 Standard</option>
                        <option value="complex">🔴 Complexe (+20%)</option>
                      </select>
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-stone-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Boutons d'action */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button
                    onClick={calculateEstimate}
                    className="flex-1 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-4 px-8 rounded-2xl font-bold hover:from-emerald-500 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <span>Calculer l'estimation</span>
                  </button>
                  <button
                    onClick={resetForm}
                    className="flex-1 bg-stone-100 hover:bg-stone-200 text-stone-700 py-4 px-8 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-3"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span>Réinitialiser</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar informations */}
          <div className="space-y-8">
            
            {/* Info tarifs */}
            <div className="bg-gradient-to-br from-amber-600 via-stone-700 to-emerald-700 rounded-3xl p-8 text-white shadow-xl">
              <div className="bg-white/20 p-4 rounded-2xl mb-6 inline-block">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Tarifs 2025</h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Nos estimations sont basées sur les prix du marché français actualisés pour 2025.
              </p>
              
              <div className="space-y-4">
                {Object.entries(prices).map(([key, serviceData]) => (
                  <div key={key} className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                    <div className="font-semibold mb-1">{serviceData.name}</div>
                    <div className="text-2xl font-bold text-amber-300">
                      {serviceData.priceMin}€ - {serviceData.priceMax}€
                    </div>
                    <div className="text-white/70 text-sm">par m²</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Points clés */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-stone-200">
              <h4 className="text-xl font-bold text-stone-800 mb-6">✨ Points clés</h4>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-emerald-100 p-2 rounded-lg mt-1">
                    <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-stone-800">Estimation instantanée</h5>
                    <p className="text-stone-600 text-sm">Calcul basé sur vos dimensions réelles</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-amber-100 p-2 rounded-lg mt-1">
                    <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-stone-800">Tarifs 2025</h5>
                    <p className="text-stone-600 text-sm">Prix actualisés du marché français</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-stone-100 p-2 rounded-lg mt-1">
                    <svg className="w-4 h-4 text-stone-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-stone-800">Devis gratuit</h5>
                    <p className="text-stone-600 text-sm">Estimation détaillée sous 24h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Résultats */}
        {estimate && (
          <div className="mt-16 max-w-4xl mx-auto">
            {estimate.error ? (
              <div className="bg-red-50 border border-red-200 rounded-3xl p-8 text-center">
                <div className="bg-red-100 p-4 rounded-2xl mb-4 inline-block">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-red-700 text-lg font-semibold">{estimate.error}</p>
              </div>
            ) : (
              <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-stone-200 overflow-hidden">
                
                {/* Header résultats */}
                <div className="bg-gradient-to-r from-emerald-600 to-amber-600 p-8 text-white text-center">
                  <div className="bg-white/20 p-4 rounded-2xl mb-4 inline-block">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Estimation pour {estimate.service}</h3>
                  <p className="text-white/90">
                    Complexité : {
                      estimate.complexity === 'simple' ? '💚 Simple' :
                      estimate.complexity === 'standard' ? '🟡 Standard' :
                      '🔴 Complexe'
                    }
                  </p>
                </div>
                
                {/* Détails de l'estimation */}
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    
                    <div className="bg-stone-50 rounded-2xl p-6 text-center">
                      <div className="bg-stone-100 p-3 rounded-xl mb-4 inline-block">
                        <svg className="w-8 h-8 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                      </div>
                      <p className="text-stone-600 text-sm font-medium mb-2">Surface totale</p>
                      <p className="text-3xl font-black text-stone-800">{estimate.area}</p>
                      <p className="text-stone-500 text-sm">mètres carrés</p>
                    </div>
                    
                    <div className="bg-amber-50 rounded-2xl p-6 text-center">
                      <div className="bg-amber-100 p-3 rounded-xl mb-4 inline-block">
                        <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                      </div>
                      <p className="text-amber-700 text-sm font-medium mb-2">Tarif au m²</p>
                      <p className="text-2xl font-black text-amber-800">{estimate.priceRange}</p>
                      <p className="text-amber-600 text-sm">selon complexité</p>
                    </div>
                    
                    <div className="bg-emerald-50 rounded-2xl p-6 text-center">
                      <div className="bg-emerald-100 p-3 rounded-xl mb-4 inline-block">
                        <svg className="w-8 h-8 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-emerald-700 text-sm font-medium mb-2">Coût total estimé</p>
                      <p className="text-3xl font-black text-emerald-800">
                        {estimate.minCost}€ - {estimate.maxCost}€
                      </p>
                      <p className="text-emerald-600 text-sm">fourchette de prix</p>
                    </div>
                  </div>
                  
                  {/* Avertissement */}
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-6 mb-8">
                    <div className="flex items-start space-x-4">
                      <div className="bg-yellow-100 p-3 rounded-xl">
                        <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.99-.833-2.732 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-yellow-800 mb-2">⚠️ Important à retenir</h4>
                        <p className="text-yellow-700 text-sm leading-relaxed">
                          Cette estimation est basée sur les tarifs moyens du marché 2025. Le prix final peut varier selon la complexité réelle, l'accessibilité, les matériaux choisis et votre localisation. Pour un chiffrage précis, contactez-nous pour un devis personnalisé gratuit.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <div className="text-center">
                    <a 
                      href="#contact" 
                      className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-emerald-600 to-amber-600 text-white rounded-2xl text-xl font-bold hover:from-emerald-500 hover:to-amber-500 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                    >
                      <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Demander un devis détaillé gratuit
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Calculator;
