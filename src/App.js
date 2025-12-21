import React, { useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/ScrollUp/ScrollUp';
import Work from './components/work/Work';
import Certificaciones from './components/certifications/Certificaciones';

function App() {

  useEffect(() => {
    // Función para manejar enlaces de fragmento
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        // Pequeño retraso para asegurar que todo esté cargado
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };

    // Ejecutar al cargar la página y cuando cambie el hash
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <>
      <Header/>
      <main className='main'>
        <Home/>
        <Work/>
        <Skills/>
        {/* <About/> */}
        <Qualification/>
        <Certificaciones/>
        {/* <Services/> */}
        {/* <Testimonials/> */}
        <Contact/>
      </main>
      <Footer/>
      <ScrollUp/>
    </>
  );
}

export default App;
