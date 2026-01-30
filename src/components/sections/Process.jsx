import React from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import SpotlightCard from "../ui/SpotlightCard.jsx";
import { Search, ShieldCheck, Zap, BarChart } from 'lucide-react';

const steps = [
    { icon: Search, title: "Risk Assessment", desc: "We analyze your current infrastructure to identify vulnerabilities." },
    { icon: ShieldCheck, title: "Security Planning", desc: "Developing a tailored security strategy aligned with your business goals." },
    { icon: Zap, title: "Implementation", desc: "Deploying advanced protocols and AI-driven defense mechanisms." },
    { icon: BarChart, title: "Monitoring & Support", desc: "24/7 surveillance and rapid response to potential threats." },
];

const Process = () => {
    return (
        <section className="py-24 bg-primary relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent hidden lg:block" />

            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">How We Secure Your Business</h2>
                    <p className="text-textSecondary max-w-2xl mx-auto">From analysis to deployment, our 4-step process ensures complete protection.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="relative z-10"
                        >
                            <SpotlightCard className="p-8 h-full flex flex-col items-center text-center group border-white/5">
                                <motion.div
                                    className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 relative z-10 text-accent border border-accent/20"
                                    whileHover={{ rotateY: 180, scale: 1.1 }}
                                >
                                    <step.icon className="w-10 h-10" />
                                    <div className="absolute inset-0 bg-accent/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                </motion.div>
                                <h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-accent transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-textSecondary text-sm leading-relaxed mb-6">
                                    {step.desc}
                                </p>

                                {/* Number Watermark */}
                                <div className="absolute -top-4 -right-2 text-8xl font-black text-white/[0.03] -z-10 select-none group-hover:text-accent/5 transition-colors">
                                    0{index + 1}
                                </div>

                                <div className="mt-auto pt-4 w-full">
                                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-accent"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "100%" }}
                                            transition={{ duration: 1, delay: index * 0.2 }}
                                        />
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Process;
