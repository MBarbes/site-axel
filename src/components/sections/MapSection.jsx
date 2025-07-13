import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icon issue with webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  // CORRECTED URLs (removed space)
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});


const MapSection = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const tileLayerRef = useRef(null);

  useEffect(() => {
    if (mapContainerRef.current && !mapRef.current) {
      const lat = 50.54466591120554;
      const lon = 1.7287692171836715;
      
      const map = L.map(mapContainerRef.current, {
        scrollWheelZoom: false,
      }).setView([lat, lon], 9);
      
      mapRef.current = map;

      // Initial tile layer
      tileLayerRef.current = L.tileLayer('', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors & <a href="https://carto.com/attributions">CARTO</a>'
      }).addTo(map);

      L.marker([lat, lon]).addTo(map)
        .bindPopup('<b>Farceto Home Renov</b><br>4 Rue de Cormont, 62630 Longvilliers<br><a href="tel:0650522012" style="color: #16A34A; text-decoration: underline;">06 50 52 20 12</a><br><a href="mailto:farcetohomerenove@gmail.com" style="color: #16A34A; text-decoration: underline;">farcetohomerenove@gmail.com</a>')
        .openPopup();

      L.circle([lat, lon], {
        color: '#16A34A', // green-600
        fillColor: '#4ADE80', // green-400
        fillOpacity: 0.2,
        radius: 40000,
      }).addTo(map).bindPopup("Zone d'intervention principale (environ 40km)");
    }
    
    // Cleanup on unmount
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []); // Run only once on mount

  // Set tile layer once on mount, no changes with darkMode
  useEffect(() => {
    if (tileLayerRef.current) {
        const lightTile = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        tileLayerRef.current.setUrl(lightTile);
    }
  }, []);


  return (
    <section id="localisation" className="py-20 lg:py-32 bg-gradient-to-br from-amber-50 via-stone-50 to-emerald-50 relative overflow-hidden">
      {/* Éléments décoratifs 2025 */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-amber-200/30 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-emerald-200/30 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-stone-300/30 rounded-full blur-xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header moderne */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-100 to-emerald-100 rounded-full mb-8 border border-amber-200/50">
            <svg className="w-5 h-5 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Zone d'intervention
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-stone-800 mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-stone-700 to-emerald-600">
              Notre Zone
            </span>
            <br />
            <span className="text-stone-700">d'Intervention</span>
          </h2>
          
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Nous intervenons dans un rayon de 40km autour de Longvilliers pour tous vos projets de plaquisterie
          </p>
        </div>

        {/* Layout bento pour la carte */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Carte principale */}
          <div className="lg:col-span-3">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-stone-200 overflow-hidden">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-stone-800">Carte Interactive</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-stone-600 font-medium">Longvilliers, Pas-de-Calais</span>
                  </div>
                </div>
                <p className="text-stone-600">Découvrez notre zone d'intervention et contactez-nous pour votre projet</p>
              </div>
              
              <div ref={mapContainerRef} className="h-96 lg:h-[500px] rounded-2xl shadow-lg overflow-hidden border border-stone-200"></div>
              
              <div className="mt-6 bg-gradient-to-r from-emerald-50 to-amber-50 rounded-2xl p-4 border border-emerald-200/50">
                <div className="flex items-center space-x-3">
                  <div className="bg-emerald-100 p-2 rounded-lg">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-emerald-800 font-semibold text-sm">💡 Zone d'intervention flexible</p>
                    <p className="text-emerald-700 text-xs">Nous pouvons étudier des projets en dehors de cette zone selon la nature des travaux</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar informations */}
          <div className="space-y-8">
            
            {/* Adresse */}
            <div className="bg-gradient-to-br from-amber-600 via-stone-700 to-emerald-700 rounded-3xl p-8 text-white shadow-xl">
              <div className="bg-white/20 p-4 rounded-2xl mb-6 inline-block">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold mb-6">Notre Entreprise</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">📍 Adresse</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    4 Rue de Cormont<br />
                    62630 Longvilliers<br />
                    Pas-de-Calais, France
                  </p>
                </div>
                
                <div className="pt-4 border-t border-white/20">
                  <h4 className="font-semibold text-white mb-3">📞 Contact Direct</h4>
                  <div className="space-y-2">
                    <a href="tel:0650522012" className="block bg-white/20 backdrop-blur-sm rounded-xl p-3 hover:bg-white/30 transition-all duration-300">
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="font-medium">06 50 52 20 12</span>
                      </div>
                    </a>
                    
                    <a href="mailto:farcetohomerenove@gmail.com" className="block bg-white/20 backdrop-blur-sm rounded-xl p-3 hover:bg-white/30 transition-all duration-300">
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="font-medium text-sm">Email</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Villes desservies */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-stone-200">
              <h4 className="text-xl font-bold text-stone-800 mb-6">🏘️ Principales villes</h4>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-stone-100">
                  <span className="font-medium text-stone-700">Longvilliers</span>
                  <span className="text-emerald-600 text-sm font-semibold">Siège</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-stone-100">
                  <span className="font-medium text-stone-700">Montreuil</span>
                  <span className="text-stone-600 text-sm">15 km</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-stone-100">
                  <span className="font-medium text-stone-700">Étaples</span>
                  <span className="text-stone-600 text-sm">20 km</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-stone-100">
                  <span className="font-medium text-stone-700">Berck</span>
                  <span className="text-stone-600 text-sm">25 km</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="font-medium text-stone-700">Boulogne-sur-Mer</span>
                  <span className="text-stone-600 text-sm">35 km</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-stone-200">
                <div className="bg-amber-50 rounded-2xl p-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-amber-100 p-2 rounded-lg">
                      <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-amber-800 font-semibold text-sm">Votre ville absente ?</p>
                      <p className="text-amber-600 text-xs">Contactez-nous pour étudier votre projet</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="mt-16 text-center">
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 lg:p-12 shadow-xl border border-stone-200 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-stone-800 mb-4">Votre Projet dans Notre Zone ?</h3>
            <p className="text-xl text-stone-600 mb-8 leading-relaxed">
              Découvrez si nous intervenons chez vous et obtenez un devis gratuit sous 24h
            </p>
            
            <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:from-emerald-500 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center space-x-3"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Demander un devis</span>
              </a>
              
              <a 
                href="tel:0650522012" 
                className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:from-amber-500 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center space-x-3"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Appeler maintenant</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
