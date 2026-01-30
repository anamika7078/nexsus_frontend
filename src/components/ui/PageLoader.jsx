import React from 'react';
import { motion } from 'framer-motion';

const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-primary/80 backdrop-blur-sm">
      <div className="relative flex flex-col items-center">
        <motion.div
          className="w-16 h-16 border-4 border-accent/20 border-t-accent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-0 w-16 h-16 border-4 border-transparent border-b-secondary rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        <motion.span
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mt-6 text-accent font-mono text-xs uppercase tracking-widest"
        >
          Loading...
        </motion.span>
      </div>
    </div>
  );
};

export default PageLoader;