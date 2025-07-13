import React, { useState, useEffect } from 'react';

const PriceManager = () => {
  const [prices, setPrices] = useState({
    placo: {
      name: 'Plaquisterie',
      priceMin: 25,
      priceMax: 35,
      description: 'Pose de placo avec fournitures'
    },
    isolation: {
      name: 'Isolation thermique',
      priceMin: 150,
      priceMax: 200,
      description: 'Isolation extérieure sous enduit'
    },
    cloison: {
      name: 'Cloison séparative',
      priceMin: 27,
      priceMax: 60,
      description: 'Cloison en placo avec pose'
    }
  });

  const [editingService, setEditingService] = useState(null);
  const [tempPrices, setTempPrices] = useState({});

  useEffect(() => {
    // Charger les prix depuis le localStorage
    const savedPrices = localStorage.getItem('adminPrices');
    if (savedPrices) {
      setPrices(JSON.parse(savedPrices));
    }
  }, []);

  const savePrices = () => {
    localStorage.setItem('adminPrices', JSON.stringify(prices));
    
    // Notification moderne au lieu d'alert
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg z-50';
    notification.textContent = '✓ Tous les tarifs sauvegardés !';
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
  };

  const startEdit = (service) => {
    setEditingService(service);
    setTempPrices({ ...prices[service] });
  };

  const cancelEdit = () => {
    setEditingService(null);
    setTempPrices({});
  };

  const saveEdit = () => {
    const updatedPrices = {
      ...prices,
      [editingService]: tempPrices
    };
    setPrices(updatedPrices);
    // Sauvegarder immédiatement dans localStorage
    localStorage.setItem('adminPrices', JSON.stringify(updatedPrices));
    setEditingService(null);
    setTempPrices({});
    
    // Notification de succès
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg z-50';
    notification.textContent = '✓ Tarif sauvegardé avec succès !';
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
  };

  const updateTempPrice = (field, value) => {
    setTempPrices({
      ...tempPrices,
      [field]: field.includes('price') ? parseFloat(value) || 0 : value
    });
  };

  return (
    <div className="space-y-8">
      {/* Header avec actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Gestion des Tarifs</h2>
          <p className="text-gray-600 mt-1">Configurez les prix de vos prestations basés sur les tarifs 2025</p>
        </div>
        <button
          onClick={savePrices}
          className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Sauvegarder tous les tarifs</span>
        </button>
      </div>

      {/* Statistiques rapides */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-lg">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Prix moyen</p>
              <p className="text-2xl font-bold text-gray-900">
                {Math.round(Object.values(prices).reduce((acc, service) => acc + (service.priceMin + service.priceMax) / 2, 0) / Object.keys(prices).length)}€/m²
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-lg">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Services actifs</p>
              <p className="text-2xl font-bold text-gray-900">{Object.keys(prices).length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center">
            <div className="bg-purple-100 p-3 rounded-lg">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Dernière MAJ</p>
              <p className="text-lg font-bold text-gray-900">Aujourd'hui</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cartes des services */}
      <div className="grid gap-8">
        {Object.entries(prices).map(([serviceId, service]) => (
          <div key={serviceId} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
            {editingService === serviceId ? (
              // Mode édition
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Modifier le service</h3>
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    En cours d'édition
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nom du service</label>
                    <input
                      type="text"
                      value={tempPrices.name || ''}
                      onChange={(e) => updateTempPrice('name', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Ex: Plaquisterie"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Prix minimum (€/m²)</label>
                      <div className="relative">
                        <input
                          type="number"
                          value={tempPrices.priceMin || ''}
                          onChange={(e) => updateTempPrice('priceMin', e.target.value)}
                          className="w-full px-4 py-3 pl-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="25"
                        />
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">€</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Prix maximum (€/m²)</label>
                      <div className="relative">
                        <input
                          type="number"
                          value={tempPrices.priceMax || ''}
                          onChange={(e) => updateTempPrice('priceMax', e.target.value)}
                          className="w-full px-4 py-3 pl-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="35"
                        />
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">€</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Description du service</label>
                    <textarea
                      value={tempPrices.description || ''}
                      onChange={(e) => updateTempPrice('description', e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Décrivez les prestations incluses..."
                    />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <button
                      onClick={saveEdit}
                      className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Sauvegarder</span>
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Annuler</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              // Mode affichage
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-xl">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                        <p className="text-gray-600 leading-relaxed">{service.description}</p>
                        <div className="mt-4 flex items-center space-x-4">
                          <div className="bg-green-50 rounded-lg px-4 py-2">
                            <span className="text-2xl font-bold text-green-600">
                              {service.priceMin}€ - {service.priceMax}€
                            </span>
                            <span className="text-gray-500 ml-2 text-sm font-medium">par m²</span>
                          </div>
                          <div className="text-sm text-gray-500">
                            Prix moyen: <span className="font-semibold text-gray-700">{Math.round((service.priceMin + service.priceMax) / 2)}€/m²</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => startEdit(serviceId)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      <span>Modifier</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Informations sur les tarifs 2025 */}
      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-6">
        <div className="flex items-start space-x-4">
          <div className="bg-yellow-100 p-3 rounded-lg flex-shrink-0">
            <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-yellow-800 mb-3">💡 Informations sur les tarifs 2025</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-yellow-700">
              <div className="bg-white/50 rounded-lg p-4">
                <p className="font-semibold text-yellow-800">Plaquisterie</p>
                <p>25-35€/m² (pose et fournitures incluses)</p>
              </div>
              <div className="bg-white/50 rounded-lg p-4">
                <p className="font-semibold text-yellow-800">Isolation extérieure</p>
                <p>150-200€/m² (pose sous enduit)</p>
              </div>
              <div className="bg-white/50 rounded-lg p-4">
                <p className="font-semibold text-yellow-800">Cloisons</p>
                <p>27-60€/m² (cloison placo avec pose)</p>
              </div>
            </div>
            <p className="mt-3 italic text-yellow-600">Ces tarifs sont basés sur les prix du marché français en 2025.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceManager;