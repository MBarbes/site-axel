import React, { useState, useEffect } from 'react';

const ImageManager = () => {
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    // Charger les images depuis db.json
    loadImagesFromDB();
  }, []);

  const loadImagesFromDB = async () => {
    try {
      const response = await fetch('/db.json');
      const data = await response.json();
      
      // Convertir la structure des images en tableau plat
      const allImages = [];
      Object.entries(data.images).forEach(([category, imageList]) => {
        imageList.forEach(img => {
          allImages.push({
            ...img,
            category: category
          });
        });
      });
      
      setImages(allImages);
    } catch (error) {
      console.error('Erreur lors du chargement des images:', error);
      // Fallback vers les images par défaut
      loadExistingImages();
    }
  };

  const loadExistingImages = () => {
    // Images par défaut en cas d'erreur
    const existingImages = [
      { id: 'logo-1', name: 'logo.png', path: '/img/logo.png', category: 'logo', alt: 'Logo principal' },
      { id: 'bg-1', name: 'fond.png', path: '/img/fond.png', category: 'background', alt: 'Image de fond' },
      { id: 'gallery-1', name: 'image1.jpg', path: '/img/image1.jpg', category: 'gallery', alt: 'Réalisation 1' },
      { id: 'gallery-2', name: 'image2.jpg', path: '/img/image2.jpg', category: 'gallery', alt: 'Réalisation 2' },
      { id: 'gallery-3', name: 'image3.jpg', path: '/img/image3.jpg', category: 'gallery', alt: 'Réalisation 3' },
    ];
    setImages(existingImages);
  };

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setUploading(true);

    // Notification d'avertissement
    const warningNotification = document.createElement('div');
    warningNotification.className = 'fixed top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-md shadow-lg z-50';
    warningNotification.textContent = '⚠️ Mode simulation - Les images ne seront pas sauvegardées de façon permanente';
    document.body.appendChild(warningNotification);
    setTimeout(() => warningNotification.remove(), 5000);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newImage = {
          id: 'temp-' + Date.now() + Math.random(),
          name: file.name,
          path: e.target.result,
          category: 'uploaded',
          size: file.size,
          type: file.type,
          alt: `Image téléversée - ${file.name}`,
          isTemporary: true // Flag pour indiquer que c'est temporaire
        };
        setImages(prev => [...prev, newImage]);
      };
      reader.readAsDataURL(file);
    });

    setUploading(false);
  };

  const deleteImage = (imageId) => {
    const imageToDelete = images.find(img => img.id === imageId);
    
    if (imageToDelete && !imageToDelete.isTemporary) {
      const warningNotification = document.createElement('div');
      warningNotification.className = 'fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-md shadow-lg z-50';
      warningNotification.textContent = '⚠️ Mode simulation - Suppression temporaire uniquement';
      document.body.appendChild(warningNotification);
      setTimeout(() => warningNotification.remove(), 3000);
    }
    
    if (confirm('Êtes-vous sûr de vouloir supprimer cette image ?')) {
      setImages(images.filter(img => img.id !== imageId));
    }
  };

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const copyImagePath = (path) => {
    navigator.clipboard.writeText(path);
    
    // Notification moderne
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-md shadow-lg z-50';
    notification.textContent = '📋 Chemin copié !';
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 2000);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getCategoryColor = (category) => {
    const colors = {
      logo: 'bg-blue-100 text-blue-800',
      background: 'bg-green-100 text-green-800',
      gallery: 'bg-purple-100 text-purple-800',
      uploaded: 'bg-orange-100 text-orange-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Gestion des Images</h2>
          <p className="text-gray-600 mt-1">Organisez et gérez vos fichiers multimédias</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
          {/* Filtre par catégorie */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
          >
            <option value="all">Toutes les catégories</option>
            <option value="logo">Logo</option>
            <option value="gallery">Galerie</option>
            <option value="background">Arrière-plans</option>
            <option value="uploaded">Téléversées</option>
          </select>
          
          <label className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer flex items-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span>Ajouter des images</span>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>
        </div>
      </div>

      {uploading && (
        <div className="bg-white rounded-xl border-2 border-dashed border-blue-300 p-8 text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
          <p className="mt-4 text-lg font-semibold text-gray-900">Upload en cours...</p>
          <p className="text-gray-600">Veuillez patienter pendant le traitement de vos fichiers</p>
        </div>
      )}

      {/* Statistiques des images */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-xl">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-3xl font-bold text-gray-900">{images.length}</p>
              <p className="text-sm font-medium text-gray-600">Total images</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-xl">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-3xl font-bold text-gray-900">{images.filter(img => img.category === 'gallery').length}</p>
              <p className="text-sm font-medium text-gray-600">Galerie</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center">
            <div className="bg-purple-100 p-3 rounded-xl">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v3M7 4H5a1 1 0 00-1 1v3m0 0v12a1 1 0 001 1h14a1 1 0 001-1V8M5 8h14M9 12h6" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-3xl font-bold text-gray-900">{images.filter(img => img.category === 'logo').length}</p>
              <p className="text-sm font-medium text-gray-600">Logos</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center">
            <div className="bg-orange-100 p-3 rounded-xl">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-3xl font-bold text-gray-900">{images.filter(img => img.isTemporary).length}</p>
              <p className="text-sm font-medium text-gray-600">Temporaires</p>
            </div>
          </div>
        </div>
      </div>

      {/* Zone de drag & drop pour upload */}
      {!uploading && (
        <div className="bg-white rounded-xl border-2 border-dashed border-gray-300 hover:border-blue-400 transition-all duration-300 p-8 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Glissez-déposez vos images ici</h3>
            <p className="text-gray-600 mb-4">ou cliquez sur le bouton "Ajouter des images" ci-dessus</p>
            <p className="text-sm text-gray-500">Formats supportés: JPG, PNG, GIF • Taille max: 10MB par fichier</p>
          </div>
        </div>
      )}

      {/* Grille des images */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredImages.map((image) => (
          <div key={image.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="aspect-square bg-gray-100 flex items-center justify-center relative overflow-hidden">
              <img
                src={image.path}
                alt={image.name}
                className="max-w-full max-h-full object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="hidden items-center justify-center h-full text-gray-400 bg-gray-50">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
              
              {/* Overlay avec actions */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex space-x-2">
                  <button
                    onClick={() => copyImagePath(image.path)}
                    className="bg-white/90 hover:bg-white text-gray-900 p-2 rounded-lg transition-all duration-200 transform hover:scale-110"
                    title="Copier le chemin"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => deleteImage(image.id)}
                    className="bg-red-500/90 hover:bg-red-500 text-white p-2 rounded-lg transition-all duration-200 transform hover:scale-110"
                    title="Supprimer"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${getCategoryColor(image.category)}`}>
                    {image.category}
                  </span>
                  {image.isTemporary && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      temp
                    </span>
                  )}
                </div>
              </div>
              
              <h3 className="font-semibold text-gray-900 truncate mb-1" title={image.name}>
                {image.name}
              </h3>
              
              {image.size && (
                <p className="text-sm text-gray-500 mb-3">
                  {formatFileSize(image.size)}
                </p>
              )}
              
              <div className="flex space-x-2">
                <button
                  onClick={() => copyImagePath(image.path)}
                  className="flex-1 bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center space-x-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>Copier</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredImages.length === 0 && (
        <div className="text-center py-12">
          <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">
            {selectedCategory === 'all' ? 'Aucune image' : `Aucune image dans la catégorie "${selectedCategory}"`}
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            {selectedCategory === 'all' 
              ? 'Commencez par ajouter des images à votre galerie.'
              : 'Changez de catégorie ou ajoutez des images.'
            }
          </p>
        </div>
      )}

      <div className="mt-8 space-y-4">
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-medium text-blue-800">💡 Conseils pour les images</h3>
          <div className="mt-2 text-sm text-blue-700 space-y-1">
            <p>• Utilisez des formats JPG ou PNG pour une meilleure compatibilité</p>
            <p>• Optimisez vos images (max 1MB) pour améliorer les performances</p>
            <p>• Utilisez des noms de fichiers descriptifs</p>
            <p>• Les images du logo doivent être en format carré de préférence</p>
          </div>
        </div>
        
        <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
          <h3 className="font-medium text-orange-800">⚠️ Mode simulation</h3>
          <div className="mt-2 text-sm text-orange-700 space-y-1">
            <p>• Les images téléversées ne sont pas sauvegardées sur le serveur</p>
            <p>• Les suppressions sont temporaires et disparaissent au rechargement</p>
            <p>• Pour une sauvegarde permanente, un backend est nécessaire</p>
            <p>• Les images listées dans db.json sont chargées automatiquement</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageManager;