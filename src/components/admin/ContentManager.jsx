import React, { useState, useEffect } from 'react';

const ContentManager = () => {
  const [content, setContent] = useState({
    hero: {
      title: "Rénovation et Plaquisterie à Longvilliers",
      subtitle: "Votre expert en travaux de rénovation intérieure",
      description: "Spécialiste en plaquisterie, isolation et cloisons. Service de qualité et devis gratuit."
    },
    about: {
      title: "À propos de nous",
      description: "Entreprise familiale spécialisée dans la rénovation intérieure depuis plus de 10 ans."
    },
    services: {
      title: "Nos Services",
      description: "Découvrez notre gamme complète de services de rénovation"
    },
    contact: {
      title: "Contactez-nous",
      address: "Longvilliers, France",
      phone: "01 23 45 67 89",
      email: "contact@renovation-longvilliers.fr"
    }
  });

  const [editingSection, setEditingSection] = useState(null);
  const [tempContent, setTempContent] = useState({});

  useEffect(() => {
    // Charger le contenu depuis le localStorage
    const savedContent = localStorage.getItem('adminContent');
    if (savedContent) {
      setContent(JSON.parse(savedContent));
    }
  }, []);

  const saveContent = () => {
    localStorage.setItem('adminContent', JSON.stringify(content));
    
    // Notification moderne au lieu d'alert
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg z-50';
    notification.textContent = '✓ Tout le contenu sauvegardé !';
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
  };

  const startEdit = (section) => {
    setEditingSection(section);
    setTempContent({ ...content[section] });
  };

  const cancelEdit = () => {
    setEditingSection(null);
    setTempContent({});
  };

  const saveEdit = () => {
    const updatedContent = {
      ...content,
      [editingSection]: tempContent
    };
    setContent(updatedContent);
    // Sauvegarder immédiatement dans localStorage
    localStorage.setItem('adminContent', JSON.stringify(updatedContent));
    setEditingSection(null);
    setTempContent({});
    
    // Notification de succès
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg z-50';
    notification.textContent = '✓ Contenu sauvegardé avec succès !';
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
  };

  const updateTempContent = (field, value) => {
    setTempContent({
      ...tempContent,
      [field]: value
    });
  };

  const sections = [
    { id: 'hero', name: 'Section Hero (Accueil)', icon: '🏠' },
    { id: 'about', name: 'À propos', icon: '👥' },
    { id: 'services', name: 'Services', icon: '🔧' },
    { id: 'contact', name: 'Contact', icon: '📞' }
  ];

  return (
    <div className="space-y-8">
      {/* Header avec actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Gestion du Contenu</h2>
          <p className="text-gray-600 mt-1">Modifiez le contenu affiché sur votre site web</p>
        </div>
        <button
          onClick={saveContent}
          className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Sauvegarder tout le contenu</span>
        </button>
      </div>

      {/* Sections de contenu */}
      <div className="grid gap-8">
        {sections.map((section) => (
          <div key={section.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
            {editingSection === section.id ? (
              // Mode édition
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center">
                    <span className="mr-3 text-2xl">{section.icon}</span>
                    Modifier {section.name}
                  </h3>
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    En cours d'édition
                  </div>
                </div>
                
                <div className="space-y-6">
                  {Object.entries(tempContent).map(([field, value]) => (
                    <div key={field}>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {field === 'title' ? '📝 Titre principal' :
                         field === 'subtitle' ? '📋 Sous-titre' :
                         field === 'description' ? '📄 Description' :
                         field === 'address' ? '📍 Adresse' :
                         field === 'phone' ? '📞 Téléphone' :
                         field === 'email' ? '📧 Email' :
                         field === 'hours' ? '🕒 Horaires' :
                         field === 'ctaText' ? '🔘 Texte du bouton' : field}
                      </label>
                      {field === 'description' ? (
                        <textarea
                          value={value}
                          onChange={(e) => updateTempContent(field, e.target.value)}
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                          placeholder={`Saisissez ${field === 'description' ? 'la description' : 'le contenu'}...`}
                        />
                      ) : (
                        <input
                          type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                          value={value}
                          onChange={(e) => updateTempContent(field, e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder={`Saisissez ${field === 'title' ? 'le titre' : field === 'phone' ? 'le numéro' : 'le texte'}...`}
                        />
                      )}
                    </div>
                  ))}
                  
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                    <button
                      onClick={saveEdit}
                      className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Sauvegarder les modifications</span>
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
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-br from-purple-500 to-blue-600 p-3 rounded-xl mr-4">
                        <span className="text-2xl text-white">{section.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{section.name}</h3>
                        <p className="text-gray-600">Section de votre site web</p>
                      </div>
                    </div>
                    
                    <div className="grid gap-4">
                      {Object.entries(content[section.id]).map(([field, value]) => (
                        <div key={field} className="bg-gray-50 rounded-lg p-4">
                          <div className="flex items-start">
                            <span className="inline-block min-w-[100px] text-sm font-semibold text-gray-600 mr-4">
                              {field === 'title' ? '📝 Titre:' :
                               field === 'subtitle' ? '📋 Sous-titre:' :
                               field === 'description' ? '📄 Description:' :
                               field === 'address' ? '📍 Adresse:' :
                               field === 'phone' ? '📞 Téléphone:' :
                               field === 'email' ? '📧 Email:' :
                               field === 'hours' ? '🕒 Horaires:' :
                               field === 'ctaText' ? '🔘 Bouton:' : field + ':'}
                            </span>
                            <span className="text-gray-900 flex-1 leading-relaxed">{value}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                    <button
                      onClick={() => startEdit(section.id)}
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

      {/* Conseils et informations */}
      <div className="bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 rounded-xl p-6">
        <div className="flex items-start space-x-4">
          <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-green-800 mb-3">💡 Bonnes pratiques pour le contenu</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-green-700">
              <div className="space-y-2">
                <p>• <strong>Titres :</strong> Utilisez des mots-clés pertinents</p>
                <p>• <strong>Descriptions :</strong> Soyez concis mais informatif</p>
                <p>• <strong>Contact :</strong> Vérifiez la validité des informations</p>
              </div>
              <div className="space-y-2">
                <p>• <strong>SEO :</strong> Intégrez des termes de recherche</p>
                <p>• <strong>Lisibilité :</strong> Évitez les phrases trop longues</p>
                <p>• <strong>Cohérence :</strong> Gardez un ton professionnel</p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-white/60 rounded-lg">
              <p className="text-sm text-green-600 italic">
                <strong>💾 Sauvegarde automatique :</strong> Vos modifications sont sauvegardées automatiquement à chaque validation individuelle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentManager;