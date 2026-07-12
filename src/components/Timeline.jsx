// src/components/Timeline.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiSparkles } from 'react-icons/hi';

const Timeline = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const experiences = [
    {
      company: 'Athenura',
      role: 'Graphic Designer & UI/UX Designer',
      duration: '2025 - Present',
      achievements: [
        'Design UI/UX for company products in Figma, including a billing system dashboard, a digital learning platform, and an Instagram auto-DM automation tool.',
        'Design and manage visual content for Athenura\'s social media pages, maintaining consistent brand identity.',
        'Lead and mentor a team of 20+ designers, guiding design standards, workflows, and quality of output.',
      ],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      company: 'Glide.in Studios',
      role: 'Freelance Graphic Designer',
      duration: '2024 - Present',
      achievements: [
        'Deliver end-to-end graphic design for multiple client brands spanning fashion, tech, real estate, and travel.',
        'Designed 20+ social media campaigns and marketing assets, contributing to increased brand engagement.',
        'Managed design and social media handles for fashion clients including Phenava and Fashion Osis, using Photoshop and Canva.',
      ],
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="experience" className="py-28 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: idx * 0.2 + 0.3 }}
                className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 shadow-lg shadow-cyan-500/50 z-10"
              />

              {/* Content */}
              <div className="md:w-1/2 pl-16 md:pl-0 md:pr-12">
                <motion.div
                  whileHover={{ scale: 1.02, rotateX: 5 }}
                  className="glass-card p-6 relative overflow-hidden group"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <p className="text-cyan-400 text-sm mb-2">{exp.company}</p>
                    <span className="inline-block text-xs px-2 py-1 rounded-full glass text-white/60 mb-3">
                      {exp.duration}
                    </span>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: idx * 0.2 + 0.5 + i * 0.1 }}
                          className="text-white/60 text-sm flex items-start gap-2"
                        >
                          <HiSparkles className="text-cyan-400 mt-0.5 flex-shrink-0" />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>

              {/* Empty spacer for alternating layout */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;