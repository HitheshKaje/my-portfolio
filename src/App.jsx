import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { AnimatePresence } from 'framer-motion';

import Loader from './components/Loader';
import Cursor from './components/Cursor';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Cursor />
      
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" onLoadingComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Background />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Certificates />
            <Timeline />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
