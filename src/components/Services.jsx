import React from 'react';

const ServiceCard = ({ icon, text, delay }) => (
  <li 
    className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-center hover:shadow-lg transition-shadow"
  >
    <i className={`${icon} text-3xl text-green-600 mr-4 flex-shrink-0 w-8 text-center`}></i>
    <span className="text-gray-700 dark:text-gray-300">{text}</span>
  </li>
);

const Services = () => {
    const plaquisterieServices = [
    { icon: 'fa-solid fa-hammer', text: 'Installation de plaques de placo' },
    { icon: 'fa-solid fa-wrench', text: 'Réparation et entretien de placo' },
    { icon: 'fa-solid fa-snowflake', text: 'Isolation acoustique et thermique' },
    { icon: 'fa-solid fa-border-all', text: 'Faux plafond (dalle et standard)' },
    { icon: 'fa-solid fa-border-style', text: 'Cloison sèche et contre-cloison' },
    { icon: 'fa-solid fa-temperature-low', text: 'Isolation de comble en laine soufflée' },
  ];

  const otherServices = [
    { icon: 'fa-solid fa-door-open', text: 'Pose de menuiserie intérieure' },
    { icon: 'fa-solid fa-paint-roller', text: 'Enduits, bandes et ratissage' },
  ];

  return (
    <section id="combined-services" className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          
          <div className="lg:col-span-2 space-y-12">
            <div
            >
              <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">Nos Services</h2>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                De la base de votre projet à la touche finale, nous offrons une gamme complète de prestations pour transformer votre intérieur.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">Plaquisterie & Isolation</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {plaquisterieServices.map((service, index) => (
                  <ServiceCard key={index} {...service} delay={index} />
                ))}
              </ul>
            </div>
            
            <div
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">Finitions & Aménagement</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {otherServices.map((service, index) => (
                  <ServiceCard key={index} {...service} delay={index} />
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <div 
              className="bg-gradient-to-br from-green-600 to-green-700 text-white text-center p-8 rounded-lg h-full flex flex-col justify-center shadow-xl sticky top-24"
            >
              <h3 className="text-2xl font-bold mb-4">Un besoin particulier ?</h3>
              <p className="mb-6">Contactez-nous pour une demande personnalisée et recevez un devis gratuit, adapté à votre projet.</p>
              <a href="#contact" className="inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-transform hover:scale-105">
                Obtenir mon devis
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
