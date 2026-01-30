import React from 'react';
import { motion } from 'framer-motion';

const GlowText = ({ children, className = '', as: Component = 'span' }) => {
  return (
    <Component 
      className={`relative inline-block ${className}`}
      style={{
        textShadow: '0 0 20px rgba(111, 168, 255, 0.5), 0 0 40px rgba(111, 168, 255, 0.3)',
      }}
    >
      {children}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent -translate-x-full"
        animate={{ translateX: ['0%', '200%'] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ mixBlendMode: 'screen' }}
      />
    </Component>
  );
};

export default GlowText;
