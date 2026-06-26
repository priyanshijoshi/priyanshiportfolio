// src/components/LoadingScreen.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { HiSparkles } from 'react-icons/hi';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="text-5xl mb-4 text-cyan-400 inline-block"
        >
          <HiSparkles />
        </motion.div>
        <motion.div
          animate={{ width: ["0%", "100%"] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
          style={{ width: 200 }}
        />
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="mt-4 text-white/50 text-sm"
        >
          Loading experience...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;