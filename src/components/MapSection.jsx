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


const MapSection = ({ darkMode }) => {
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
        .bindPopup('<b>Farceto Home Renov</b><br>4 Rue de Cormont, 62630 Longvilliers')
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

  // Effect to update tile layer when darkMode changes
  useEffect(() => {
    if (tileLayerRef.current) {
        const lightTile = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        const darkTile = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
        
        const newUrl = darkMode ? darkTile : lightTile;
        tileLayerRef.current.setUrl(newUrl);
    }
  }, [darkMode]);


  return (
    <section id="localisation" className="py-16 lg:py-24 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">Notre Zone d'Intervention</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Nous intervenons principalement dans un rayon de 40km autour de Longvilliers.
          </p>
        </div>
        <div ref={mapContainerRef} className="h-96 rounded-lg shadow-lg z-0"></div>
      </div>
    </section>
  );
};

export default MapSection;
