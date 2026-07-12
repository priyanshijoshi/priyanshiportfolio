// src/components/Projects.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaWater, FaDumbbell, FaPalette } from 'react-icons/fa';
import { HiSparkles, HiShoppingBag } from 'react-icons/hi';

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'UI/UX', 'Graphic Design', 'Branding', 'Web Design', 'Mobile App'];

  const projects = [
    {
      title: 'Digital Learning Platform UI',
      desc: 'A modern and engaging e-learning e-learning platform UI designed to deliver seamless learning experiences with intuitive navigation and immersive visuals.',
      tags: ['UI/UX', 'Figma', 'EdTech'],
      category: 'UI/UX',
      color: 'from-cyan-500 to-blue-500',
      icon: <FaWater />,
      live: 'https://www.figma.com/design/Q9MKrJ3Snit5qVdqoGwypU/Untitled?node-id=0-1&t=TA9rbw5uK8240kPP-1',
    },
    {
      title: 'Complete Billing System UI',
      desc: 'A smart and efficient billing system interface designed for seamless invoice management, transaction tracking, and user-friendly business operations.',
      tags: ['Billing System', 'UI/UX', 'Figma'],
      category: 'Mobile App',
      color: 'from-purple-500 to-pink-500',
      icon: <HiSparkles />,
      live: 'https://www.figma.com/design/evLXMqXuHG3mUjqIpTmfXp/Untitled?node-id=0-1&p=f&t=utKTYICpQnSqsTMo-0',
    },
    {
      title: 'Athenura Auto DM Tool',
      desc: 'An intelligent Instagram automation dashboard designed for managing auto DMs, lead engagement, instant replies, and audience interaction with a modern user experience.',
      tags: ['Automation', 'Instagram Tool', 'UI/UX'],
      category: 'Web Design',
      color: 'from-orange-500 to-pink-500',
      icon: <HiShoppingBag />,
      live: 'https://www.figma.com/design/rfxXH44ul1nUBbHt4sLsTW/Untitled?t=nn9X5X6y66LgQAGm-0',
    },
    {
      title: 'Phenava & Fashion Osis Brand Graphics',
      desc: 'Created ongoing brand graphics and managed social media handles for two fashion clients using Photoshop and Canva.',
      tags: ['Freelance', 'Photoshop', 'Canva', 'Branding', 'Fashion'],
      category: 'Graphic Design',
      color: 'from-pink-500 to-rose-600',
      icon: <FaPalette />,
      live: null,
    },
    {
      title: 'Real Estate Brand Graphics',
      desc: 'Designed marketing and social media graphics for a real estate client using Photoshop and Canva.',
      tags: ['Freelance', 'Photoshop', 'Canva', 'Branding', 'Real Estate'],
      category: 'Graphic Design',
      color: 'from-yellow-500 to-amber-600',
      icon: <FaPalette />,
      live: null,
    },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

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

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                : 'glass text-white/70 hover:text-white'
                }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="glass-card overflow-hidden h-full">
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-5xl relative overflow-hidden text-white/90`}>
                  <span className="relative z-10">{project.icon}</span>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6 text-left">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                  <p className="text-white/60 text-sm mb-3">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/5 text-cyan-400">{tag}</span>
                    ))}
                  </div>
                  {project.live && (
                    <div className="flex gap-3">
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-medium text-center"
                      >
                        Live Preview
                      </motion.a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;