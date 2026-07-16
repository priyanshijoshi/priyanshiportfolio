// src/App.jsx
import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import ParticlesBackground from './components/ParticlesBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scrollProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500);
  }, []);

  // Custom cursor logic
  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Dot follows instantly
      dot.style.left = `${mouseX - 4}px`;
      dot.style.top = `${mouseY - 4}px`;
    };

    // Smooth follow for the outer cursor ring
    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      cursor.style.left = `${cursorX - 16}px`;
      cursor.style.top = `${cursorY - 16}px`;
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    const frameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, [loading]);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>
      
      <div className="relative bg-black">
        <ParticlesBackground />
        <Navbar />
        
        {/* Scroll Progress Bar */}
        <motion.div
          className="scroll-progress"
          style={{ width: `${scrollProgress}%` }}
        />
        
        {/* Custom Cursor */}
        <div ref={cursorRef} className="custom-cursor hidden md:block" />
        <div ref={dotRef} className="cursor-dot hidden md:block" />
        
        <main>
          <Hero />
          <About />
          <Projects />
          <Timeline />
          <Contact />
        </main>
        
        {/* Footer */}
        <footer className="py-12 text-center border-t border-white/10 glass mt-20">
          <p className="text-white/50">&copy; 2026 Priyanshi Joshi. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;