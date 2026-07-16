// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['home', 'about', 'projects', 'experience', 'contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold"
        >
          <span className="gradient-text">Priyanshi Joshi</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item}`}
              whileHover={{ scale: 1.1 }}
              className={`text-sm uppercase tracking-wider font-semibold transition-colors duration-300 ${
                active === item 
                  ? 'text-cyan-400' 
                  : 'text-white/70 hover:text-white'
              }`}
              onClick={() => setActive(item)}
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Action Controls (Resume Dropdown) */}
        <div className="flex items-center gap-4">
          {/* Desktop Dropdown */}
          <div 
            className="relative hidden md:block"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <motion.button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold flex items-center gap-1.5 shadow-md shadow-cyan-950/20 cursor-pointer"
            >
              <span>Resume</span>
              <svg 
                className={`w-3.5 h-3.5 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.button>
            
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-56 glass rounded-2xl shadow-xl overflow-hidden border border-white/10 z-50 py-2 bg-black/85 backdrop-blur-md"
                >
                  <a
                    href="/uiux-resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2.5 text-sm text-white/80 hover:text-cyan-400 hover:bg-white/5 transition-all duration-200 text-left font-semibold"
                  >
                    UI/UX Resume
                  </a>
                  <a
                    href="/graphic-resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2.5 text-sm text-white/80 hover:text-cyan-400 hover:bg-white/5 transition-all duration-200 text-left font-semibold"
                  >
                    Graphic Design Resume
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 z-50 p-2 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span 
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} 
              className="block w-6 h-0.5 bg-white" 
            />
            <motion.span 
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} 
              className="block w-6 h-0.5 bg-white" 
            />
            <motion.span 
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} 
              className="block w-6 h-0.5 bg-white" 
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 glass p-6 flex flex-col gap-4 md:hidden shadow-lg border-t border-white/5 bg-black/90 backdrop-blur-md"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`text-sm uppercase tracking-wider font-semibold transition-colors duration-300 ${
                  active === item 
                    ? 'text-cyan-400' 
                    : 'text-white/70'
                }`}
                onClick={() => { setActive(item); setMenuOpen(false); }}
              >
                {item}
              </a>
            ))}
            
            {/* Mobile Resume Options */}
            <div className="border-t border-white/10 pt-4 mt-2 flex flex-col gap-2.5 text-left">
              <span className="text-xs uppercase tracking-widest text-white/40 font-mono font-semibold">Resumes</span>
              <a
                href="/uiux-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm uppercase tracking-wider font-semibold text-white/75 hover:text-cyan-400 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                UI/UX Resume
              </a>
              <a
                href="/graphic-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm uppercase tracking-wider font-semibold text-white/75 hover:text-cyan-400 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Graphic Design Resume
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;