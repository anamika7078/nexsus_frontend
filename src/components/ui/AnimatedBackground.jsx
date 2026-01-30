import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = ({ showMatrix = false }) => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* 3D Grid Background */}
      <div className="absolute inset-0 bg-3d-grid opacity-20"></div>

      {/* Enhanced Floating 3D Elements with Framer Motion */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-accent/20 rounded-full blur-xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-40 right-32 w-24 h-24 bg-secondary/20 rounded-full blur-lg"
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <motion.div
        className="absolute bottom-32 left-40 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl"
        animate={{
          y: [0, -50, 0],
          x: [0, 30, 0],
          scale: [1, 1.15, 1],
          rotate: [0, -360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <motion.div
        className="absolute bottom-20 right-20 w-28 h-28 bg-blue-500/20 rounded-full blur-xl"
        animate={{
          y: [0, 30, 0],
          x: [0, -25, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />

      {/* Additional smaller floating orbs */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-16 h-16 bg-accent/10 rounded-full blur-md"
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
          }}
          animate={{
            y: [0, Math.random() * 50 - 25, 0],
            x: [0, Math.random() * 50 - 25, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2
          }}
        />
      ))}

      {/* 3D Particles */}
      <div className="absolute inset-0 bg-3d-particles"></div>

      {/* Enhanced Geometric 3D Shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-accent/30"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
          z: [0, 100, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ transformStyle: 'preserve-3d' }}
      />

      {/* Floating Wireframe Cube Decor */}
      <div className="absolute top-1/3 right-10 perspective-1000 opacity-20">
        <motion.div
          className="w-32 h-32 border border-accent/40 preserve-3d"
          animate={{ rotateX: 360, rotateY: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <motion.div
        className="absolute top-3/4 right-1/4 w-12 h-12 border-2 border-secondary/30 rounded-lg"
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ transformStyle: 'preserve-3d' }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-20 h-20 border-2 border-purple-500/30 rounded-xl"
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 1.15, 1],
          borderRadius: ['20px', '50%', '20px'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Animated scan lines */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent h-32"
        animate={{
          y: ['-100%', '200%'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
