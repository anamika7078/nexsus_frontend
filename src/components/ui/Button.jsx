import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyle = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer";
    const variants = {
        primary: "bg-secondary hover:bg-accent text-white shadow-glow hover:shadow-[0_0_35px_rgba(111,168,255,0.6)]",
        secondary: "border border-secondary text-secondary hover:bg-secondary/10 hover:text-white hover:border-accent",
        outline: "border border-white/20 text-white hover:bg-white/10"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseStyle} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
