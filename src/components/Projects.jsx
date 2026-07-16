// src/components/Projects.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPalette, FaUniversity, FaFileInvoiceDollar, FaGraduationCap, FaPaperPlane, FaHome, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [filter, setFilter] = useState('UI/UX Projects');

  const categories = ['UI/UX Projects', 'Graphic Design Projects'];

  const projects = [
    {
      title: 'Canara Bank - Website UI/UX Redesign (Case Study)',
      desc: 'Conducted user surveys, card sorting, and interviews. Translated research into wireframes and interactive prototypes to deliver a redesigned, user-validated UI with clearer information architecture.',
      tags: ['Case Study', 'UI/UX', 'Figma', 'User Research'],
      category: 'UI/UX Projects',
      color: 'from-blue-600 to-cyan-500',
      icon: <FaUniversity />,
      live: null,
    },
    {
      title: 'Complete Billing System UI',
      desc: 'Researched, wireframed, prototyped, and tested a billing interface for invoice management and transaction tracking.',
      tags: ['Billing System', 'UI/UX', 'Figma', 'Prototyping'],
      category: 'UI/UX Projects',
      color: 'from-purple-500 to-indigo-500',
      icon: <FaFileInvoiceDollar />,
      live: 'https://www.figma.com/design/evLXMqXuHG3mUjqIpTmfXp/Untitled?node-id=0-1&p=f&t=utKTYICpQnSqsTMo-0',
    },
    {
      title: 'Digital Learning Platform UI',
      desc: 'Designed and tested an e-learning platform interface focused on intuitive navigation.',
      tags: ['E-Learning', 'UI/UX', 'Figma', 'Usability Testing'],
      category: 'UI/UX Projects',
      color: 'from-cyan-500 to-blue-500',
      icon: <FaGraduationCap />,
      live: 'https://www.figma.com/design/Q9MKrJ3Snit5qVdqoGwypU/Untitled?node-id=0-1&t=TA9rbw5uK8240kPP-1',
    },
    {
      title: 'Athenura Auto DM Tool',
      desc: 'Designed an Instagram automation dashboard for managing auto DMs and lead engagement.',
      tags: ['Automation', 'Instagram Tool', 'UI/UX', 'Dashboard'],
      category: 'UI/UX Projects',
      color: 'from-orange-500 to-pink-500',
      icon: <FaPaperPlane />,
      live: 'https://www.figma.com/design/rfxXH44ul1nUBbHt4sLsTW/Untitled?t=nn9X5X6y66LgQAGm-0',
    },
    {
      title: 'Phenava & Fashion Osis Brand Graphics',
      desc: 'Created ongoing brand graphics and managed social media handles for two fashion clients.',
      tags: ['Freelance', 'Photoshop', 'Canva'],
      category: 'Graphic Design Projects',
      color: 'from-pink-500 to-rose-600',
      icon: <FaPalette />,
      live: null,
    },
    {
      title: 'Real Estate Brand Graphics',
      desc: 'Designed marketing and social media graphics for a real estate client.',
      tags: ['Freelance', 'Photoshop', 'Canva'],
      category: 'Graphic Design Projects',
      color: 'from-yellow-500 to-amber-600',
      icon: <FaHome />,
      live: null,
    },
  ];

  const filteredProjects = projects.filter(p => p.category === filter);

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
                  : 'glass text-slate-700 dark:text-white/70 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid with transition animations */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="glass-card overflow-hidden h-full flex flex-col">
                  {/* Banner / Card Header Icon */}
                  <div className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center text-5xl relative overflow-hidden text-white/90`}>
                    <span className="relative z-10 filter drop-shadow-md">{project.icon}</span>
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Visual pattern accent */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
                  </div>
                  
                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col text-left justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-slate-650 dark:text-white/60 text-sm mb-4 leading-relaxed">
                        {project.desc}
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="text-xs px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/5 text-cyan-600 dark:text-cyan-400/90 border border-black/5 dark:border-white/5 font-semibold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {project.live ? (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-md shadow-cyan-950/20"
                        >
                          <FaExternalLinkAlt className="text-xs" />
                          <span>View Prototype / Case Study</span>
                        </motion.a>
                      ) : (
                        <div className="w-full py-2.5 rounded-xl bg-black/5 dark:bg-white/5 text-slate-400 dark:text-white/40 text-xs font-semibold text-center border border-black/5 dark:border-white/5">
                          Offline Campaign Asset
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;