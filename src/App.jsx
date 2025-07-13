import React, { Suspense, lazy, useState, useEffect } from 'react';
import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/Navbar';
import Hero from './components/layout/Hero';
import Footer from './components/layout/Footer';
import BackToTopButton from './components/common/BackToTopButton';

const Services = lazy(() => import('./components/sections/Services'));
const About = lazy(() => import('./components/sections/About'));
const Carousel = lazy(() => import('./components/sections/Carousel'));
const Calculator = lazy(() => import('./components/sections/Calculator'));
const MapSection = lazy(() => import('./components/sections/MapSection'));
const ContactForm = lazy(() => import('./components/sections/ContactForm'));
const AdminApp = lazy(() => import('./components/admin/AdminApp'));

const Preloader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-300 z-[100]">
    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-green-600"></div>
  </div>
);

function App() {
  const [showAdmin, setShowAdmin] = useState(false);

  useEffect(() => {
    // Vérifier si on doit afficher l'admin via l'URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('admin') === 'true' || window.location.pathname === '/admin') {
      setShowAdmin(true);
    }
  }, []);

  // Si l'admin est demandé, afficher seulement l'interface d'administration
  if (showAdmin) {
    return (
      <Suspense fallback={<Preloader />}>
        <AdminApp />
      </Suspense>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 antialiased">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<Preloader />}>
          <Services />
          <Carousel />
          <About />
          <Calculator />
          <MapSection />
          <ContactForm />
        </Suspense>
      </main>
      <Footer />
      <BackToTopButton />
      
      {/* Lien discret vers l'administration */}
      <div className="fixed bottom-4 left-4 opacity-10 hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => setShowAdmin(true)}
          className="text-xs text-gray-400 hover:text-gray-600 bg-white px-2 py-1 rounded shadow"
        >
          Admin
        </button>
      </div>
    </div>
  );
}

export default App;
