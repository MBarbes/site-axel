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
      className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">Contactez-Nous</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Une question ? Un projet ? Remplissez le formulaire ci-dessous pour obtenir votre devis gratuit.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          {status.message && (
            <div className={`border-l-4 p-4 rounded-md mb-6 ${statusStyles[status.type] || statusStyles.info}`} role="alert">
              <p>{status.message}</p>
            </div>
          )}

          <form action="https://formsubmit.co/farcetohomerenove @gmail.com" method="POST" encType="multipart/form-data" className="space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="_next" value="https://farcetohomerenov.netlify.app/?form-status=success#contact" />
            <input type="text" name="_honey" style={{ display: 'none' }} />
            <input type="hidden" name="_captcha" value="true" />
            <input type="hidden" name="_subject" value="Nouveau message depuis Farceto Home Renov!" />

            <div className="text-sm text-gray-500 dark:text-gray-400">* Champs obligatoires</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative"><input type="text" name="nom_prenom" id="nom_prenom" placeholder=" " required className="input-field peer w-full" /><label htmlFor="nom_prenom" className="floating-label">Nom et prénom*</label></div>
              <div className="relative"><input type="email" name="email" id="email" placeholder=" " required className="input-field peer w-full" /><label htmlFor="email" className="floating-label">E-mail*</label></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative"><input type="tel" name="telephone" id="telephone" placeholder=" " required className="input-field peer w-full" /><label htmlFor="telephone" className="floating-label">Téléphone*</label></div>
              <div className="relative"><input type="text" name="adresse" id="adresse" placeholder=" " className="input-field peer w-full" /><label htmlFor="adresse" className="floating-label">Adresse</label></div>
            </div>
            <div className="relative"><textarea name="message" id="message" rows="4" placeholder=" " required className="input-field peer w-full"></textarea><label htmlFor="message" className="floating-label">Message*</label></div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-grow">
                <input type="file" name="attachment" id="attachment" className="hidden" onChange={handleFileChange} />
                <label htmlFor="attachment" className="inline-flex items-center cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition whitespace-nowrap">
                  <i className="fa-solid fa-paperclip mr-2"></i> Joindre un fichier
                </label>
                <span className="text-sm text-gray-500 ml-3">{fileName}</span>
              </div>
              <div className="flex items-center flex-shrink-0">
                <input type="checkbox" id="rappel" name="demande_rappel" value="Oui" className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
                <label htmlFor="rappel" className="ml-2 text-gray-700 dark:text-gray-300 whitespace-nowrap">Demander à être rappelé</label>
              </div>
            </div>
            <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition text-lg font-semibold focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800">Envoyer le message</button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default ContactForm;
