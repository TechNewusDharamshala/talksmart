
import { useEffect } from 'react';
import './App.css';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  const currentPath = window.location.pathname;

  useEffect(() => {
    if (window.location.hash) {
      const sectionId = window.location.hash.substring(1);

      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: 'smooth',
        });
      }, 100);
    }
  }, []);

  return (
    <>
      {currentPath === '/contact'
        ? <Contact />
        : <Home />
      }
    </>
  );
}

export default App;
