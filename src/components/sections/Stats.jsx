import React from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import GlassCard from '../ui/GlassCard';

const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "750+", label: "Clients Secured" },
    { value: "300+", label: "Projects Done" },
    { value: "100%", label: "Satisfaction" },
];

const Stats = () => {
    return (
        <section className="py-12 border-y border-white/10 bg-white/5 backdrop-blur-sm">
            <Container>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            <GlassCard className="text-center py-10 group" glowColor="rgba(111, 168, 255, 0.1)">
                                <motion.h3 
                                    className="text-5xl lg:text-6xl font-black text-white mb-2 tracking-tighter"
                                    whileHover={{ scale: 1.1, color: "#6FA8FF" }}
                                >
                                    {stat.value}
                                </motion.h3>
                                <p className="text-accent text-xs uppercase font-black tracking-[0.2em]">{stat.label}</p>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Stats;
