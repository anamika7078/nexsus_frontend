import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', icon: Icon, ...props }) => {
    const baseStyle = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer relative overflow-hidden group";
    const variants = {
        primary: "bg-secondary hover:bg-accent text-white shadow-glow hover:shadow-[0_0_35px_rgba(111,168,255,0.6)]",
        secondary: "border border-secondary text-secondary hover:bg-secondary/10 hover:text-white hover:border-accent",
        outline: "border border-white/20 text-white hover:bg-white/10"
    };

    return (
        <motion.button
            whileHover={{
                scale: 1.05,
                transition: { duration: 0.2, type: "spring", stiffness: 400 }
            }}
            whileTap={{
                scale: 0.95,
                transition: { duration: 0.1 }
            }}
            className={`${baseStyle} ${variants[variant]} ${className}`}
            {...props}
        >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>

            {/* Ripple effect on hover */}
            <motion.div
                className="absolute inset-0 bg-white/10 rounded-lg"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{
                    scale: 1,
                    opacity: [0, 0.3, 0],
                    transition: { duration: 0.6 }
                }}
            />

            {/* Button content */}
            <span className="relative z-10 flex items-center gap-2">
                {Icon && <Icon className="w-4 h-4 group-hover:animate-pulse" />}
                {children}
            </span>

            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
            </div>
        </motion.button>
    );
};

export default Button;
