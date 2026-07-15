// src/components/Timeline.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiSparkles } from 'react-icons/hi';

const Timeline = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [filter, setFilter] = useState('all');

  const experiences = [
    {
      company: 'Athenura',
      role: 'Graphic Designer & UI/UX Designer',
      duration: '2025 - Present',
      categories: ['ui-ux', 'graphic'],
      achievementsGrouped: [
        {
          groupName: 'UI/UX Design Achievements',
          items: [
            'Conducted user research, surveys, interviews, and usability testing across 4-5 products. Followed the full UX process to design a Billing System UI, Digital Learning Platform UI, and an Instagram Auto-DM tool.',
            'Built and maintained a Figma design system/component library for consistent UI across products.'
          ]
        },
        {
          groupName: 'Graphic Design Achievements',
          items: [
            'Design and manage visual content for Athenura\'s social media pages, maintaining consistent brand identity.'
          ]
        },
        {
          groupName: 'Team Leadership',
          items: [
            'Lead and mentor a team of 20+ designers, guiding design standards, workflows, and quality of output.'
          ]
        }
      ],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      company: 'Glide.in Studios',
      role: 'Freelance Graphic Designer',
      duration: '2024 - Present',
      categories: ['graphic'],
      achievementsGrouped: [
        {
          groupName: 'Graphic Design Achievements',
          items: [
            'Deliver end-to-end graphic design for multiple client brands spanning fashion, tech, real estate, and travel.',
            'Designed 20+ social media campaigns and marketing assets, contributing to increased brand engagement.',
            'Managed design and social media handles for fashion clients including Phenava and Fashion Osis, using Photoshop and Canva.'
          ]
        }
      ],
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const filteredExperiences = experiences.filter(exp => {
    if (filter === 'all') return true;
    if (filter === 'ui-ux') return exp.categories.includes('ui-ux');
    if (filter === 'graphic') return exp.categories.includes('graphic');
    return true;
  });

  return (
    <section id="experience" className="py-28 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-8" />
        </motion.div>

        {/* Experience Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="flex justify-center gap-3 mb-16"
        >
          {[
            { id: 'all', label: 'All Experience' },
            { id: 'ui-ux', label: 'UI/UX Design' },
            { id: 'graphic', label: 'Graphic Design' },
          ].map((btn) => (
            <motion.button
              key={btn.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(btn.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                filter === btn.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'glass text-white/70 hover:text-white'
              }`}
            >
              {btn.label}
            </motion.button>
          ))}
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500" />

          {filteredExperiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: idx * 0.2 + 0.3 }}
                className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 shadow-lg shadow-cyan-500/50 z-10"
              />

              {/* Content Card */}
              <div className="md:w-1/2 pl-16 md:pl-0 md:px-6">
                <motion.div
                  whileHover={{ scale: 1.02, rotateX: 2 }}
                  className="glass-card p-6 relative overflow-hidden group"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <p className="text-cyan-400 text-sm mb-2">{exp.company}</p>
                    <span className="inline-block text-xs px-2.5 py-1 rounded-full glass text-white/60 mb-4 font-mono">
                      {exp.duration}
                    </span>

                    <div className="space-y-4 text-left">
                      {exp.achievementsGrouped.map((group, groupIdx) => (
                        <div key={groupIdx} className="border-l border-white/10 pl-3">
                          <h4 className={`text-xs font-bold tracking-wider uppercase mb-1.5 ${
                            group.groupName.includes('UI/UX') ? 'text-cyan-400' :
                            group.groupName.includes('Graphic') ? 'text-purple-400' : 'text-pink-400'
                          }`}>
                            {group.groupName}
                          </h4>
                          <ul className="space-y-2">
                            {group.items.map((item, itemIdx) => (
                              <motion.li
                                key={itemIdx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: idx * 0.2 + 0.4 + groupIdx * 0.1 + itemIdx * 0.05 }}
                                className="text-white/70 text-sm flex items-start gap-2 leading-relaxed"
                              >
                                <HiSparkles className="text-cyan-400/70 mt-1 flex-shrink-0 text-[10px]" />
                                <span>{item}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
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