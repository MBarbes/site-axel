import React, { useState } from 'react';

const AdminLogin = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // --- VULNÉRABILITÉ DE SÉCURITÉ MAJEURE ---
    // Le code original vérifiait le mot de passe directement dans le navigateur.
    // N'IMPORTE QUI pouvait lire le code source et trouver les identifiants.
    // Une authentification DOIT TOUJOURS se faire côté serveur.

    // Simulation d'un appel à un backend sécurisé
    try {
      // Dans une vraie application, vous feriez un appel à votre API ici
      // Exemple : const response = await fetch('/api/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(credentials),
      // });

      // Pour la démonstration, nous allons simuler une réponse.
      // REMPLACEZ CECI par une vraie logique de backend.
      if (credentials.username === 'admin' && credentials.password === 'password') { // Mot de passe pour l'exemple
        // Le backend répondrait avec un token sécurisé (ex: JWT)
        // que l'on stockerait de manière sécurisée (ex: cookie httpOnly)
        localStorage.setItem('adminAuth', 'true'); // Ceci est encore une simplification
        onLogin(true);
      } else {
        // const errorData = await response.json();
        // setError(errorData.message || 'Identifiants incorrects');
        setError('Identifiants incorrects (ceci est une simulation)');
      }
    } catch (err) {
      setError('Une erreur est survenue lors de la connexion.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Administration
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Connectez-vous pour accéder au panneau d'administration
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                placeholder="Nom d'utilisateur"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                required
              />
            </div>
            <div>
              <input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                placeholder="Mot de passe"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                required
              />
            </div>
          </div>

          {error && (
            <div className="text-red-600 text-sm text-center">{error}</div>
          )}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Se connecter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
