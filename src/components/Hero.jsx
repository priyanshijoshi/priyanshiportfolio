// src/components/Hero.jsx
import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaPalette, FaMobileAlt, FaBolt, FaBullseye, FaGem } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const Hero = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const smoothX = useSpring(mouseX, { damping: 30, stiffness: 200 });
    const smoothY = useSpring(mouseY, { damping: 30, stiffness: 200 });
    const rotateX = useTransform(smoothY, [-300, 300], [15, -15]);
    const rotateY = useTransform(smoothX, [-300, 300], [-15, 15]);

    const containerRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const rect = containerRef.current?.getBoundingClientRect();
            if (rect) {
                mouseX.set(e.clientX - rect.left - rect.width / 2);
                mouseY.set(e.clientY - rect.top - rect.height / 2);
            }
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    const floatingIcons = [
        { icon: <FaPalette />, x: -200, y: -100, delay: 0, color: '#ff6b9d' },
        { icon: <FaMobileAlt />, x: 250, y: -150, delay: 0.2, color: '#c084fc' },
        { icon: <FaBolt />, x: -150, y: 200, delay: 0.4, color: '#fbbf24' },
        { icon: <HiSparkles />, x: 200, y: 180, delay: 0.6, color: '#22d3ee' },
        { icon: <FaBullseye />, x: -280, y: 50, delay: 0.1, color: '#fb7185' },
        { icon: <FaGem />, x: 280, y: -50, delay: 0.3, color: '#a78bfa' },
    ];

    return (
        <section
            id="home"
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-cyan-900/20 animate-gradient" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* Left - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center lg:text-left"
                        style={{ perspective: 1000 }}
                    >
                        <motion.div
                            style={{ rotateX, rotateY }}
                            className="inline-block"
                        >
                            <motion.div
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="mb-6 text-cyan-400 font-mono text-sm tracking-wider flex items-center gap-2 justify-center lg:justify-start"
                            >
                                <HiSparkles className="text-cyan-400" />
                                GRAPHIC & UI/UX DESIGNER
                                <HiSparkles className="text-cyan-400" />
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
                            >
                                <span className="gradient-text">Creating Modern</span>
                                <br />
                                <span className="gradient-text">Digital Journeys</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-xl text-white/70 max-w-2xl mb-10"
                            >
                                Graphic Designer and UI/UX Designer with hands-on experience across the full UX process (user research, wireframing, prototyping, usability testing) and 1+ year of experience creating brand and social media graphics. Currently designing product interfaces in Figma, building design systems, and leading a 20-member design team at Athenura, while delivering freelance graphic campaigns across fashion, tech, real estate, and travel industries.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7 }}
                                className="flex gap-4 justify-center lg:justify-start"
                            >
                                <motion.a
                                    href="#projects"
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px cyan" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold"
                                >
                                    View Projects
                                </motion.a>
                                <motion.a
                                    href="#contact"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-3 rounded-full border border-cyan-500/50 text-cyan-400 font-semibold backdrop-blur-sm"
                                >
                                    Let's Talk
                                </motion.a>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right - Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex-shrink-0 relative"
                    >
                        <div className="relative w-72 h-72 md:w-96 md:h-96">
                            {/* Glowing ring behind image */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-[-8px] rounded-full"
                                style={{
                                    background: 'conic-gradient(from 0deg, #06b6d4, #a855f7, #ec4899, #06b6d4)',
                                    padding: '3px',
                                }}
                            />
                            <div className="absolute inset-[-10px] rounded-full bg-black" />

                            {/* Outer glow */}
                            <div className="absolute inset-[-40px] bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse" />

                            {/* Profile image */}
                            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10">
                                <img
                                    src="/Image.png"
                                    alt="UI/UX Designer Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Status badge */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute -bottom-2 left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-full text-sm text-cyan-400 font-medium whitespace-nowrap"
                            >
                                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                                Available for hire
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Floating Icons */}
                {floatingIcons.map((item, index) => (
                    <motion.div
                        key={index}
                        className="absolute glass-card p-4 text-2xl hidden md:flex items-center justify-center"
                        initial={{ opacity: 0, x: item.x, y: item.y }}
                        animate={{
                            opacity: 1,
                            y: [item.y, item.y - 20, item.y],
                            rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                            opacity: { delay: 0.5 + index * 0.1 },
                            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                            rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                        }}
                        style={{ left: "40%", top: "20%", transform: "translate(-50%, -50%)", color: item.color }}
                    >
                        {item.icon}
                    </motion.div>
                ))}

                {/* Floating Mockup Cards */}
                <motion.div
                    className="absolute left-[-20%] top-1/1 hidden lg:block"
                    animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                >
                    <div className="glass-card p-3 w-48">
                        <div className="bg-gradient-to-br from-purple-500 to-pink-500 h-32 rounded-lg mb-2" />
                        <div className="h-2 bg-white/20 rounded w-3/4 mb-1" />
                        <div className="h-2 bg-white/10 rounded w-1/2" />
                    </div>
                </motion.div>

                <motion.div
                    className="absolute right-[-15%] top-1/2 hidden lg:block"
                    animate={{ y: [0, -40, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                >
                    <div className="glass-card p-3 w-56">
                        <div className="flex gap-2 mb-3">
                            <div className="w-8 h-8 rounded-full bg-cyan-500" />
                            <div className="flex-1">
                                <div className="h-2 bg-white/20 rounded w-full mb-1" />
                                <div className="h-2 bg-white/10 rounded w-3/4" />
                            </div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-2">
                            <div className="h-20 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded" />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
            </motion.div>
        </section>
    );
};

export default Hero;