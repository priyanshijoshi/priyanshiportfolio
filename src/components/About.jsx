// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPalette } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const About = () => {
    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

    const skills = [
        { name: 'Figma', level: 95, color: 'from-purple-500 to-pink-500' },
        { name: 'Adobe XD', level: 88, color: 'from-pink-500 to-orange-500' },
        { name: 'Photoshop', level: 85, color: 'from-blue-500 to-cyan-500' },
        { name: 'Framer', level: 90, color: 'from-cyan-500 to-teal-500' },
        { name: 'Webflow', level: 82, color: 'from-indigo-500 to-purple-500' },
    ];

    const tools = ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Framer', 'Webflow', 'After Effects', 'Protopie'];

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
                        className="relative"
                    >
                        <div className="relative aspect-square max-w-md mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full opacity-20 blur-2xl animate-pulse" />
                            <div className="relative glass-card p-2 rounded-full overflow-hidden">
                                <img
                                    src="/Image.png"
                                    alt="UI UX Designer"
                                    className="w-full h-full object-cover rounded-full aspect-square"
                                />
                            </div>
                            {/* Floating badges */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute -top-4 -right-4 glass px-3 py-1 rounded-full text-sm"
                            >
                                5+ Years
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute -bottom-4 -left-4 glass px-3 py-1 rounded-full text-sm flex items-center gap-1"
                            >
                                <HiSparkles className="text-cyan-400" /> 50+ Projects
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right - Bio & Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <p className="text-white/80 text-lg leading-relaxed mb-6">
                            I'm a passionate UI/UX Designer and Computer Science student focused on creating intuitive,
                            user-centered digital experiences that blend creativity with functionality. My expertise spans
                            UI/UX design, wireframing, prototyping, and product strategy, combined with technical knowledge
                            in full-stack development using Python, Django, and SQL.
                        </p>

                        <p className="text-white/60 mb-8">
                            Currently working as a UI/UX Designer at Athenura, I specialize in designing scalable dashboards,
                            immersive digital platforms, and modern user interfaces that enhance engagement and simplify
                            complex workflows. From music streaming experiences to AI-powered platforms, I love building
                            aesthetically driven products that solve real-world problems through clean design and seamless
                            user experiences.
                        </p>

                        {/* Skills with animated bars */}
                        <div className="space-y-4">
                            {skills.map((skill, idx) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.4 + idx * 0.1 }}
                                >
                                    <div className="flex justify-between mb-1">
                                        <span className="text-white/80">{skill.name}</span>
                                        <span className="text-cyan-400">{skill.level}%</span>
                                    </div>
                                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
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

                        {/* Tools Grid */}
                        <div className="mt-8">
                            <h3 className="text-white font-semibold mb-3">Tools I Master</h3>
                            <div className="flex flex-wrap gap-2">
                                {tools.map((tool, idx) => (
                                    <motion.span
                                        key={tool}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ delay: 0.8 + idx * 0.05 }}
                                        whileHover={{ scale: 1.05, backgroundColor: "rgba(0,255,255,0.2)" }}
                                        className="px-3 py-1 rounded-full glass text-sm text-cyan-400 cursor-pointer"
                                    >
                                        {tool}
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