import React, { useState } from 'react';

const ContactForm = () => {
  const [status, setStatus] = useState({ message: '', type: '' });
  const [fileName, setFileName] = useState('Aucun fichier choisi');

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName('Aucun fichier choisi');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: 'Envoi en cours...', type: 'info' });

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setStatus({ message: 'Message envoyé avec succès !', type: 'success' });
        form.reset();
        setFileName('Aucun fichier choisi');
      } else {
        const data = await response.json();
        const errorMessage = data.errors ? data.errors.map(error => error.message).join(", ") : 'Une erreur est survenue.';
        setStatus({ message: `Erreur: ${errorMessage}`, type: 'error' });
      }
    } catch (error) {
      setStatus({ message: 'Oops! Impossible de soumettre le formulaire.', type: 'error' });
    }
  };

  const statusStyles = {
    success: 'bg-green-100 border-green-500 text-green-700',
    error: 'bg-red-100 border-red-500 text-red-700',
    info: 'bg-blue-100 border-blue-500 text-blue-700',
  };

  return (
    <section 
      id="contact" 
      className="py-20 lg:py-32 bg-gradient-to-br from-stone-50 via-emerald-50 to-amber-50 relative overflow-hidden"
    >
      {/* Éléments décoratifs 2025 */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-emerald-200/30 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-amber-200/30 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-stone-300/30 rounded-full blur-xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header moderne */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-100 to-amber-100 rounded-full mb-8 border border-emerald-200/50">
            <svg className="w-5 h-5 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Contactez-nous
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-stone-800 mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-stone-700 to-amber-600">
              Votre Projet
            </span>
            <br />
            <span className="text-stone-700">Nous Intéresse</span>
          </h2>
          
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Une question ? Un projet ? Contactez votre plaquiste de confiance à Longvilliers
          </p>

          {/* Informations de contact modernes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a href="tel:0650522012" className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-stone-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-sm text-stone-600 font-medium">Appelez-nous</div>
                  <div className="text-lg font-bold text-stone-800">06 50 52 20 12</div>
                </div>
              </div>
            </a>

            <a href="mailto:farcetohomerenove@gmail.com" className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-stone-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-sm text-stone-600 font-medium">Écrivez-nous</div>
                  <div className="text-lg font-bold text-stone-800">Email</div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Layout bento moderne */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Formulaire principal */}
          <div className="lg:col-span-2">
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 lg:p-12 shadow-xl border border-stone-200">
              
              {/* Status message moderne */}
              {status.message && (
                <div className={`rounded-2xl p-6 mb-8 border-l-4 ${
                  status.type === 'success' ? 'bg-emerald-50 border-emerald-500 text-emerald-700' :
                  status.type === 'error' ? 'bg-red-50 border-red-500 text-red-700' :
                  'bg-blue-50 border-blue-500 text-blue-700'
                }`} role="alert">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${
                      status.type === 'success' ? 'bg-emerald-100' :
                      status.type === 'error' ? 'bg-red-100' : 'bg-blue-100'
                    }`}>
                      <svg className={`w-6 h-6 ${
                        status.type === 'success' ? 'text-emerald-600' :
                        status.type === 'error' ? 'text-red-600' : 'text-blue-600'
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {status.type === 'success' ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        ) : status.type === 'error' ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        )}
                      </svg>
                    </div>
                    <p className="font-medium">{status.message}</p>
                  </div>
                </div>
              )}

              <form action="https://formsubmit.co/farcetohomerenove @gmail.com" method="POST" encType="multipart/form-data" className="space-y-8" onSubmit={handleSubmit}>
                <input type="hidden" name="_next" value="https://farcetohomerenov.netlify.app/?form-status=success#contact" />
                <input type="text" name="_honey" style={{ display: 'none' }} />
                <input type="hidden" name="_captcha" value="true" />
                <input type="hidden" name="_subject" value="Nouveau message depuis Farceto Home Renov!" />

                {/* Instructions */}
                <div className="bg-gradient-to-r from-emerald-50 to-amber-50 rounded-2xl p-6 border border-emerald-200/50">
                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-100 p-3 rounded-xl">
                      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-emerald-800 mb-2">💬 Comment nous joindre</h3>
                      <p className="text-emerald-700 text-sm leading-relaxed">
                        Remplissez ce formulaire pour obtenir un devis gratuit sous 24h. Les champs marqués d'un astérisque (*) sont obligatoires.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Champs de contact */}
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-stone-700">
                        👤 Nom et prénom *
                      </label>
                      <input 
                        type="text" 
                        name="nom_prenom" 
                        required 
                        className="w-full px-4 py-4 border border-stone-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 text-lg bg-white/70 backdrop-blur-sm" 
                        placeholder="Ex: Jean Dupont"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-stone-700">
                        📧 Adresse email *
                      </label>
                      <input 
                        type="email" 
                        name="email" 
                        required 
                        className="w-full px-4 py-4 border border-stone-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 text-lg bg-white/70 backdrop-blur-sm" 
                        placeholder="Ex: jean.dupont@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-stone-700">
                        📞 Téléphone *
                      </label>
                      <input 
                        type="tel" 
                        name="telephone" 
                        required 
                        className="w-full px-4 py-4 border border-stone-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 text-lg bg-white/70 backdrop-blur-sm" 
                        placeholder="Ex: 06 12 34 56 78"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-stone-700">
                        📍 Adresse du projet
                      </label>
                      <input 
                        type="text" 
                        name="adresse" 
                        className="w-full px-4 py-4 border border-stone-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 text-lg bg-white/70 backdrop-blur-sm" 
                        placeholder="Ex: 123 rue de la République"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-stone-700">
                      💬 Décrivez votre projet *
                    </label>
                    <textarea 
                      name="message" 
                      rows="5" 
                      required 
                      className="w-full px-4 py-4 border border-stone-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 text-lg bg-white/70 backdrop-blur-sm resize-none" 
                      placeholder="Décrivez votre projet de plaquisterie, isolation, cloisons..."
                    ></textarea>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-stone-700">
                      📊 Détails de l'estimation (optionnel)
                    </label>
                    <textarea 
                      name="estimation_details" 
                      rows="3" 
                      className="w-full px-4 py-4 border border-stone-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 text-lg bg-white/70 backdrop-blur-sm resize-none" 
                      placeholder="Si vous avez utilisé notre calculateur, détaillez ici..."
                    ></textarea>
                    <p className="text-xs text-stone-500">
                      💡 Si vous avez utilisé notre outil d'estimation, incluez ces informations pour un devis plus précis
                    </p>
                  </div>
                </div>

                {/* Options supplémentaires */}
                <div className="bg-stone-50 rounded-2xl p-6 space-y-4">
                  <h4 className="font-bold text-stone-800 mb-4">🔧 Options supplémentaires</h4>
                  
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex-1">
                      <input type="file" name="attachment" id="attachment" className="hidden" onChange={handleFileChange} />
                      <label htmlFor="attachment" className="inline-flex items-center cursor-pointer bg-gradient-to-r from-stone-100 to-stone-200 hover:from-stone-200 hover:to-stone-300 text-stone-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                        </svg>
                        Joindre un fichier
                      </label>
                      <span className="text-sm text-stone-500 ml-3">{fileName}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <input type="checkbox" id="rappel" name="demande_rappel" value="Oui" className="h-5 w-5 text-emerald-600 focus:ring-emerald-500 border-stone-300 rounded" />
                      <label htmlFor="rappel" className="ml-3 text-stone-700 font-medium">
                        📞 Demander à être rappelé
                      </label>
                    </div>
                  </div>
                </div>

                {/* Boutons d'action */}
                <div className="flex flex-col lg:flex-row gap-4 pt-6">
                  <button 
                    type="submit" 
                    className="flex-1 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-4 px-8 rounded-2xl text-lg font-bold hover:from-emerald-500 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <span>Envoyer le message</span>
                  </button>
                  
                  <button 
                    type="submit" 
                    className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 text-white py-4 px-8 rounded-2xl text-lg font-bold hover:from-amber-500 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3"
                    onClick={(e) => {
                      e.target.form.querySelector('input[name="_subject"]').value = 'Demande de devis détaillé depuis Farceto Home Renov!';
                      return true;
                    }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Demander un devis</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar informations */}
          <div className="space-y-8">
            
            {/* Avantages */}
            <div className="bg-gradient-to-br from-emerald-600 via-stone-700 to-amber-700 rounded-3xl p-8 text-white shadow-xl">
              <div className="bg-white/20 p-4 rounded-2xl mb-6 inline-block">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold mb-6">Pourquoi nous choisir ?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 p-2 rounded-lg mt-1">
                    <svg className="w-5 h-5 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Devis gratuit sous 24h</h4>
                    <p className="text-white/80 text-sm">Réponse rapide et sans engagement</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 p-2 rounded-lg mt-1">
                    <svg className="w-5 h-5 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">10+ ans d'expérience</h4>
                    <p className="text-white/80 text-sm">Expertise reconnue en plaquisterie</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 p-2 rounded-lg mt-1">
                    <svg className="w-5 h-5 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Artisan local</h4>
                    <p className="text-white/80 text-sm">Basé à Longvilliers, Pas-de-Calais</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 p-2 rounded-lg mt-1">
                    <svg className="w-5 h-5 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Garantie décennale</h4>
                    <p className="text-white/80 text-sm">Travaux assurés et certifiés</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Horaires et infos */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-stone-200">
              <h4 className="text-xl font-bold text-stone-800 mb-6">📅 Nos horaires</h4>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-stone-100">
                  <span className="font-medium text-stone-700">Lundi - Vendredi</span>
                  <span className="text-stone-600">8h - 18h</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-stone-100">
                  <span className="font-medium text-stone-700">Samedi</span>
                  <span className="text-stone-600">9h - 16h</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-stone-700">Dimanche</span>
                  <span className="text-red-600">Fermé</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-stone-200">
                <div className="bg-emerald-50 rounded-2xl p-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-emerald-100 p-2 rounded-lg">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-emerald-800 font-semibold text-sm">Urgences</p>
                      <p className="text-emerald-600 text-xs">Interventions d'urgence possibles</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactForm;
