// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

const Navbar = ({ theme, setTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

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
                  ? 'text-cyan-600 dark:text-cyan-400' 
                  : 'text-slate-600 hover:text-slate-900 dark:text-white/70 dark:hover:text-white'
              }`}
              onClick={() => setActive(item)}
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Action Controls (Toggle & Resume) */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2.5 rounded-full glass text-slate-800 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300 cursor-pointer flex items-center justify-center border border-black/10 dark:border-white/10"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <FiSun className="text-lg text-yellow-400" />
            ) : (
              <FiMoon className="text-lg text-indigo-600" />
            )}
          </button>

          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold text-center shadow-md shadow-cyan-950/10 dark:shadow-none"
          >
            Resume
          </motion.a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 z-50 p-2 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span 
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} 
              className="block w-6 h-0.5 bg-slate-850 dark:bg-white" 
            />
            <motion.span 
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} 
              className="block w-6 h-0.5 bg-slate-850 dark:bg-white" 
            />
            <motion.span 
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} 
              className="block w-6 h-0.5 bg-slate-850 dark:bg-white" 
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 glass p-6 flex flex-col gap-4 md:hidden shadow-lg border-t border-black/5 dark:border-white/5"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`text-sm uppercase tracking-wider font-semibold transition-colors duration-300 ${
                  active === item 
                    ? 'text-cyan-600 dark:text-cyan-400' 
                    : 'text-slate-600 dark:text-white/70'
                }`}
                onClick={() => { setActive(item); setMenuOpen(false); }}
              >
                {item}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm uppercase tracking-wider font-semibold text-slate-600 dark:text-white/70 hover:text-cyan-600 dark:hover:text-white mt-2 border-t border-black/10 dark:border-white/10 pt-4"
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;