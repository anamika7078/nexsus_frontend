import React from 'react';
import { motion } from 'framer-motion';

const FloatingCard3D = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div 
      className={`perspective-1000 ${className}`}
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        duration: 0.8, 
        delay,
        type: 'spring',
        stiffness: 100 
      }}
    >
      <motion.div 
        className="card-3d-hover preserve-3d bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-glow"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay * 0.5,
        }}
        whileHover={{
          scale: 1.05,
          rotateY: 10,
          rotateX: -5,
          transition: { duration: 0.3 }
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const Text3D = ({ children, className = '', tag: Tag = 'h2' }) => {
  return (
    <Tag className={`text-3d ${className}`}>
      {children}
    </Tag>
  );
};

const GlowBox3D = ({ children, className = '' }) => {
  return (
    <div className={`glow-3d preserve-3d ${className}`}>
      {children}
    </div>
  );
};

const MorphingShape = ({ className = '' }) => {
  return (
    <motion.div 
      className={`w-32 h-32 bg-gradient-to-br from-accent to-secondary ${className}`}
      animate={{
        borderRadius: ['20px', '50%', '10px', '20px'],
        rotate: [0, 180, 360],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
};

const RotatingCube = ({ className = '' }) => {
  return (
    <motion.div 
      className={`cube-3d w-24 h-24 preserve-3d ${className}`}
      animate={{
        rotateX: [0, 360],
        rotateY: [0, 360],
        rotateZ: [0, 360],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <div className="w-full h-full bg-accent/30 border border-accent/50 rounded-lg"></div>
    </motion.div>
  );
};

export { FloatingCard3D, Text3D, GlowBox3D, MorphingShape, RotatingCube };
