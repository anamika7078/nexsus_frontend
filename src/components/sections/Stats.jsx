import React from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';

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
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            className="text-center"
                        >
                            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</h3>
                            <p className="text-textSecondary text-sm uppercase tracking-wider">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Stats;
