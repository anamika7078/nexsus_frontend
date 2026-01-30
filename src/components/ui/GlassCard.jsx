import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', glowColor = 'rgba(111, 168, 255, 0.2)' }) => {
    return (
        <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            className={`relative p-[1px] rounded-2xl overflow-hidden group ${className}`}
        >
            {/* Animated Border Beam */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/50 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none"
                style={{ animationDuration: '3s' }} />

            <div className="relative h-full w-full bg-[#141E30]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 transition-colors group-hover:bg-[#141E30]/80">
                {/* Internal Glow */}
                <div
                    className="absolute -top-24 -left-24 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ backgroundColor: glowColor }}
                />

                <div className="relative z-10">
                    {children}
                </div>

                {/* Cyber Corners */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent/0 group-hover:border-accent/50 transition-all" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent/0 group-hover:border-accent/50 transition-all" />
            </div>
        </motion.div>
    );
};

export default GlassCard;