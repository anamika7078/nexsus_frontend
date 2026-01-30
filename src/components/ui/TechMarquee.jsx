import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Cpu, Server, Cloud, Database, Wifi, Terminal } from 'lucide-react';

const TechMarquee = () => {
    const technologies = [
        { icon: Shield, name: 'AI-Powered Defense' },
        { icon: Lock, name: 'Zero-Trust Architecture' },
        { icon: Cpu, name: 'Machine Learning' },
        { icon: Server, name: 'Cloud Infrastructure' },
        { icon: Cloud, name: 'Multi-Cloud Security' },
        { icon: Database, name: 'Data Encryption' },
        { icon: Wifi, name: 'Network Protection' },
        { icon: Terminal, name: 'Threat Intelligence' },
    ];

    // Duplicate for seamless loop
    const duplicatedTech = [...technologies, ...technologies];

    return (
        <div className="relative overflow-hidden py-8 border-y border-white/10 bg-white/5 backdrop-blur-sm">
            <motion.div
                className="flex gap-12 items-center"
                animate={{
                    x: [0, -1920],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            >
                {duplicatedTech.map((tech, index) => (
                    <motion.div
                        key={index}
                        className="flex items-center gap-3 px-6 py-3 bg-secondary/30 border border-white/10 rounded-full whitespace-nowrap group hover:border-accent/50 transition-all"
                        whileHover={{ scale: 1.05, y: -5 }}
                    >
                        <tech.icon className="w-5 h-5 text-accent group-hover:rotate-12 transition-transform" />
                        <span className="text-white font-semibold text-sm">{tech.name}</span>
                    </motion.div>
                ))}
            </motion.div>

            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />
        </div>
    );
};

export default TechMarquee;
