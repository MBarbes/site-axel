import React from 'react';

const Calculator = () => {
  return (
    <section id="calculator" className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Estimation de Projet</h2>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md max-w-2xl mx-auto">
          <p className="text-gray-600 dark:text-gray-400">
            Le calculateur d'estimation sera bientôt disponible ici pour vous aider à chiffrer rapidement vos projets.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
