import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hoverEffect = true, ...props }) => {
    return (
        <motion.div
            whileHover={hoverEffect ? { y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)" } : {}}
            className={`bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl transition-all duration-300 ${className}`}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Card;
