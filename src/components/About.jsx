// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiSparkles } from 'react-icons/hi';

const About = () => {
    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

    const skills = [
        { name: 'Figma', level: 95, color: 'from-purple-500 to-pink-500' },
        { name: 'Canva', level: 95, color: 'from-cyan-500 to-teal-500' },
        { name: 'Photoshop', level: 80, color: 'from-blue-500 to-cyan-500' },
        { name: 'Adobe XD', level: 70, color: 'from-pink-500 to-orange-500' },
    ];

    const designExpertise = ['Branding', 'Typography', 'Layout Design', 'UI/UX Design', 'Print Design', 'Motion Graphics (learning)'];
    const softSkills = ['Communication', 'Collaboration', 'Time Management', 'Team Leadership'];

    return (
        <section id="about" className="py-28 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">About Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Left - Avatar/Image Area */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative flex flex-col items-center"
                    >
                        <div className="relative aspect-square w-full max-w-sm mx-auto mb-10">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full opacity-20 blur-2xl animate-pulse" />
                            <div className="relative glass-card p-2 rounded-full overflow-hidden shadow-lg">
                                <img
                                    src="/assets/profile.png"
                                    alt="Graphic and UI UX Designer"
                                    className="w-full h-full object-cover rounded-full aspect-square"
                                />
                            </div>
                            {/* Floating badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass px-4 py-1.5 rounded-full text-sm flex items-center gap-1 font-semibold text-cyan-600 dark:text-cyan-400 shadow-md"
                            >
                                <HiSparkles className="text-cyan-550 dark:text-cyan-400" /> 25+ Projects
                            </motion.div>
                        </div>

                        {/* Education & Languages Cards */}
                        <div className="w-full max-w-sm space-y-4">
                            <div className="glass-card p-5 relative overflow-hidden text-left">
                                <h3 className="text-slate-800 dark:text-white font-bold mb-2 flex items-center gap-2">
                                    <HiSparkles className="text-cyan-550 dark:text-cyan-400" /> Education
                                </h3>
                                <p className="text-slate-700 dark:text-white/80 font-medium">Avantika University</p>
                                <p className="text-slate-500 dark:text-white/50 text-sm">Indore, India</p>
                                <p className="text-cyan-600 dark:text-cyan-400 text-xs mt-1 font-mono">Class of 2026</p>
                            </div>

                            <div className="glass-card p-5 relative overflow-hidden text-left">
                                <h3 className="text-slate-800 dark:text-white font-bold mb-2 flex items-center gap-2">
                                    <HiSparkles className="text-cyan-550 dark:text-cyan-400" /> Languages
                                </h3>
                                <div className="flex gap-4 text-sm text-slate-700 dark:text-white/80">
                                    <div>
                                        <span className="font-semibold text-cyan-600 dark:text-cyan-400">Hindi:</span> Native
                                    </div>
                                    <div>
                                        <span className="font-semibold text-cyan-600 dark:text-cyan-400">English:</span> Professional
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Bio & Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-left"
                    >
                        <p className="text-slate-700 dark:text-white/80 text-lg leading-relaxed mb-6 font-medium">
                            Graphic Designer and UI/UX Designer with hands-on experience across the full UX process (user research, wireframing, prototyping, usability testing) and 1+ year of experience creating brand and social media graphics.
                        </p>

                        <p className="text-slate-500 dark:text-white/60 mb-8 leading-relaxed">
                            Currently designing product interfaces in Figma, building design systems, and leading a 20-member design team at Athenura, while delivering freelance graphic campaigns across fashion, tech, real estate, and travel industries.
                        </p>

                        {/* Skills with animated bars */}
                        <div className="space-y-4">
                            <h3 className="text-slate-800 dark:text-white font-bold mb-3">Software Skills</h3>
                            {skills.map((skill, idx) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.4 + idx * 0.1 }}
                                >
                                    <div className="flex justify-between mb-1">
                                        <span className="text-slate-700 dark:text-white/80 font-medium">{skill.name}</span>
                                        <span className="text-cyan-600 dark:text-cyan-400 font-bold font-mono">{skill.level}%</span>
                                    </div>
                                    <div className="h-2 bg-black/5 dark:bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={inView ? { width: `${skill.level}%` } : {}}
                                            transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                                            className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Design Expertise Grid */}
                        <div className="mt-8">
                            <h3 className="text-slate-800 dark:text-white font-bold mb-3">Design Expertise</h3>
                            <div className="flex flex-wrap gap-2">
                                {designExpertise.map((exp, idx) => (
                                    <motion.span
                                        key={exp}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ delay: 0.8 + idx * 0.05 }}
                                        whileHover={{ scale: 1.05, backgroundColor: "rgba(6,182,212,0.15)" }}
                                        className="px-3.5 py-1.5 rounded-full glass text-sm font-semibold text-cyan-600 dark:text-cyan-400 cursor-pointer border border-black/5 dark:border-white/5"
                                    >
                                        {exp}
                                    </motion.span>
                                ))}
                            </div>
                        </div>

                        {/* Soft Skills Grid */}
                        <div className="mt-8">
                            <h3 className="text-slate-800 dark:text-white font-bold mb-3">Soft Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {softSkills.map((skill, idx) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ delay: 0.9 + idx * 0.05 }}
                                        whileHover={{ scale: 1.05, backgroundColor: "rgba(168,85,247,0.15)" }}
                                        className="px-3.5 py-1.5 rounded-full glass text-sm font-semibold text-purple-600 dark:text-purple-400 cursor-pointer border border-black/5 dark:border-white/5"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;