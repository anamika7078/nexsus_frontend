import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SplashScreen = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timeout = setTimeout(() => finishLoading(), 3500);
    return () => clearTimeout(timeout);
  }, [finishLoading]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-primary overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px]" />
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[100px]" />

      <div className="relative perspective-1000 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateX: -45, z: -500 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0, z: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="preserve-3d"
        >
          <h1 className="text-8xl md:text-9xl font-black text-white tracking-[0.2em] text-3d select-none">
            NEXSUS
          </h1>
        </motion.div>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent mt-8 w-64 shadow-glow"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="text-accent mt-4 font-mono tracking-widest text-sm uppercase"
        >
          Initializing Cyber Systems
        </motion.p>
      </div>

      {/* Decorative Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-accent/40 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0
          }}
          animate={{
            y: [null, Math.random() * -100],
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0]
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}
    </motion.div>
  );
};

export default SplashScreen;