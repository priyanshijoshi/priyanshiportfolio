// src/components/Projects.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPalette, FaUniversity, FaFileInvoiceDollar, FaGraduationCap, FaPaperPlane, FaExternalLinkAlt } from 'react-icons/fa';

// Separate Carousel Component for each Graphic Design card to manage local page index cleanly
const GraphicCard = ({ project, setLightbox }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  return (
    <motion.div
      layout
      whileHover={{ y: -8 }}
      className="group relative h-full flex flex-col"
    >
      <div className="glass-card overflow-hidden h-full flex flex-col bg-black/45 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
        {/* Carousel Image container */}
        <div className="relative h-64 overflow-hidden bg-black/50 flex items-center justify-center group/img select-none border-b border-white/5">
          <img 
            src={project.images[currentIdx]} 
            alt={`${project.title} - page ${currentIdx + 1}`}
            className="h-full w-full object-contain cursor-zoom-in transition-all duration-300 hover:scale-[1.02]"
            onClick={() => setLightbox({ isOpen: true, images: project.images, index: currentIdx })}
          />
          
          {/* Navigation Arrows */}
          {project.images.length > 1 && (
            <>
              <button 
                onClick={prevSlide}
                className="absolute left-3 p-2 rounded-full bg-black/75 text-white hover:bg-cyan-500/90 transition-colors cursor-pointer opacity-0 group-hover/img:opacity-100 flex items-center justify-center border border-white/10 z-10"
                aria-label="Previous slide"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-3 p-2 rounded-full bg-black/75 text-white hover:bg-cyan-500/90 transition-colors cursor-pointer opacity-0 group-hover/img:opacity-100 flex items-center justify-center border border-white/10 z-10"
                aria-label="Next slide"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Page Counter Pill */}
          <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/75 text-white/95 text-[10px] font-mono border border-white/10 z-10">
            {currentIdx + 1} / {project.images.length}
          </div>

          {/* Dots Indicator */}
          {project.images.length > 1 && (
            <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {project.images.map((_, dotIdx) => (
                <span 
                  key={dotIdx} 
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${dotIdx === currentIdx ? 'bg-cyan-400 w-3' : 'bg-white/40'}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Card Body */}
        <div className="p-6 flex-1 flex flex-col text-left justify-between">
          <div>
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-white/60 text-sm mb-5 leading-relaxed">
              {project.desc}
            </p>
          </div>

          <div>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-cyan-400 border border-white/5 font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>

            <button
              onClick={() => setLightbox({ isOpen: true, images: project.images, index: currentIdx })}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-md shadow-cyan-950/20 cursor-pointer hover:shadow-cyan-400/20 transition-all"
            >
              <span>View Gallery</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [filter, setFilter] = useState('UI/UX Projects');
  const [lightbox, setLightbox] = useState({ isOpen: false, images: [], index: 0 });

  const categories = ['UI/UX Projects', 'Graphic Design Projects'];

  const uiuxProjects = [
    {
      title: 'Canara Bank Redesign',
      desc: 'Conducted user surveys, card sorting, and interviews. Translated research into wireframes and interactive prototypes to deliver a redesigned, user-validated UI with clearer information architecture.',
      tags: ['Case Study', 'UI/UX', 'Figma', 'Research'],
      color: 'from-blue-600 to-cyan-500',
      icon: <FaUniversity />,
      live: 'https://www.figma.com/proto/daGz0qZHR70oDbTgkQ4moQ/UX-Cp?node-id=1-3&p=f&t=AMyet58fFQkewFH2-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3',
    },
    {
      title: 'Complete Billing System UI',
      desc: 'Researched, wireframed, prototyped, and tested a billing interface for invoice management and transaction tracking.',
      tags: ['Billing System', 'UI/UX', 'Figma', 'Prototyping'],
      color: 'from-purple-500 to-indigo-500',
      icon: <FaFileInvoiceDollar />,
      live: 'https://www.figma.com/design/evLXMqXuHG3mUjqIpTmfXp/Untitled?node-id=0-1&p=f&t=utKTYICpQnSqsTMo-0',
    },
    {
      title: 'Digital Learning Platform UI',
      desc: 'Designed and tested an e-learning platform interface focused on intuitive navigation.',
      tags: ['E-Learning', 'UI/UX', 'Figma', 'Usability Testing'],
      color: 'from-cyan-500 to-blue-500',
      icon: <FaGraduationCap />,
      live: 'https://www.figma.com/design/Q9MKrJ3Snit5qVdqoGwypU/Untitled?node-id=0-1&t=TA9rbw5uK8240kPP-1',
    },
    {
      title: 'Athenura Auto DM Tool',
      desc: 'Designed an Instagram automation dashboard for managing auto DMs and lead engagement.',
      tags: ['Automation', 'Instagram Tool', 'UI/UX', 'Dashboard'],
      color: 'from-orange-500 to-pink-500',
      icon: <FaPaperPlane />,
      live: 'https://www.figma.com/design/rfxXH44ul1nUBbHt4sLsTW/Untitled?t=nn9X5X6y66LgQAGm-0',
    },
  ];

  const graphicProjects = [
    {
      title: 'Fashionosis Campaign',
      desc: 'A 4-page branding and marketing graphics campaign showcasing premium fashion designs.',
      tags: ['Freelance', 'Canva', 'Branding', 'Fashion'],
      images: [
        '/Fashionosis%201.png',
        '/Fashionosis%202.png',
        '/Fashionosis%203.png',
        '/Fashionosis%204.png'
      ],
    },
    {
      title: 'Athenura Campaign Posters',
      desc: 'Marketing campaign and branding posters designed for Athenura\'s products.',
      tags: ['Athenura', 'Photoshop', 'Branding'],
      images: [
        '/Athenura%201.png',
        '/Athenura%202.png'
      ],
    },
    {
      title: 'Athenura Burger Product Campaign',
      desc: 'A 4-page product campaign and social media graphics designed for Athenura\'s culinary features.',
      tags: ['Athenura', 'Photoshop', 'Canva', 'Social Media'],
      images: [
        '/burger%20carousel%201.png',
        '/burger%20carousel%202.png',
        '/burger%20carousel%203.png',
        '/burger%20carousel%204.png'
      ],
    },
    {
      title: 'Real Estate Campaign',
      desc: 'A 4-page marketing campaign with social media assets designed for real estate promotions.',
      tags: ['Freelance', 'Canva', 'Real Estate'],
      images: [
        '/Real%20State1.png',
        '/Real%20State2.png',
        '/Real%20State3.png',
        '/Real%20State4.png'
      ],
    },
    {
      title: 'Phenava Campaign Posters',
      desc: 'An 8-poster branding and visual marketing package designed for Phenava fashion client.',
      tags: ['Freelance', 'Photoshop', 'Canva', 'Fashion'],
      images: [
        '/Phenva%201.png',
        '/Phenva%202.png',
        '/Phenva%203.png',
        '/Phenva%204.png',
        '/Phenva%205.png',
        '/Phenva%206.png',
        '/Phenva%207.png',
        '/Phenva%208.png'
      ],
    }
  ];

  return (
    <section id="projects" className="py-28 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-8" />
        </motion.div>

        {/* Categories Tab Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="flex justify-center gap-4 mb-16"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                filter === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'glass text-white/70 hover:text-white'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid Container */}
        <div className="max-w-6xl mx-auto">
          {filter === 'UI/UX Projects' ? (
            <motion.div 
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {uiuxProjects.map((project, idx) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <div className="glass-card overflow-hidden h-full flex flex-col bg-black/45 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                    {/* Header Banner */}
                    <div className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center text-5xl relative overflow-hidden text-white/90`}>
                      <span className="relative z-10 filter drop-shadow-md">{project.icon}</span>
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col text-left justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-white/60 text-sm mb-4 leading-relaxed">
                          {project.desc}
                        </p>
                      </div>

                      <div>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag) => (
                            <span 
                              key={tag} 
                              className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-cyan-400 border border-white/5 font-semibold"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {project.live && (
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-md shadow-cyan-950/20 cursor-pointer"
                          >
                            <FaExternalLinkAlt className="text-xs" />
                            <span>View Figma Prototype</span>
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {graphicProjects.map((project, idx) => (
                <GraphicCard 
                  key={project.title} 
                  project={project} 
                  setLightbox={setLightbox} 
                />
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightbox.isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox({ ...lightbox, isOpen: false })}
            className="fixed inset-0 bg-black/95 z-[9999] flex flex-col items-center justify-center p-4 backdrop-blur-md select-none"
          >
            {/* Top Navigation / Controls */}
            <div className="absolute top-6 left-6 right-6 flex justify-between items-center text-white z-[10000]">
              <span className="text-sm font-mono tracking-wider font-semibold">
                PAGE {lightbox.index + 1} OF {lightbox.images.length}
              </span>
              <button
                onClick={() => setLightbox({ ...lightbox, isOpen: false })}
                className="p-2.5 rounded-full bg-white/10 hover:bg-cyan-500/80 transition-colors cursor-pointer flex items-center justify-center border border-white/10 text-white text-lg z-50"
                aria-label="Close fullscreen modal"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Lightbox Slider */}
            <div className="relative w-full max-w-5xl max-h-[80vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <motion.img
                key={lightbox.index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                src={lightbox.images[lightbox.index]}
                alt="Campaign Artwork Full View"
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />

              {lightbox.images.length > 1 && (
                <>
                  <button
                    onClick={() => setLightbox({ ...lightbox, index: lightbox.index === 0 ? lightbox.images.length - 1 : lightbox.index - 1 })}
                    className="absolute left-[-20px] md:left-4 p-3.5 rounded-full bg-white/10 hover:bg-cyan-500/85 transition-colors cursor-pointer text-white flex items-center justify-center border border-white/10 text-xl z-50"
                    aria-label="Previous artwork"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setLightbox({ ...lightbox, index: lightbox.index === lightbox.images.length - 1 ? 0 : lightbox.index + 1 })}
                    className="absolute right-[-20px] md:right-4 p-3.5 rounded-full bg-white/10 hover:bg-cyan-500/85 transition-colors cursor-pointer text-white flex items-center justify-center border border-white/10 text-xl z-50"
                    aria-label="Next artwork"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;