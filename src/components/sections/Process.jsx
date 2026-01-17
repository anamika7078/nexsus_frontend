import React from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
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
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative z-10"
                        >
                            <div className="bg-primary/90 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:border-accent/40 transition-colors h-full flex flex-col items-center text-center group">
                                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all text-accent border border-white/10 group-hover:border-accent group-hover:shadow-glow">
                                    <step.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-textSecondary text-sm">{step.desc}</p>

                                {/* Number Watermark */}
                                <div className="absolute top-2 right-4 text-6xl font-black text-white/5 -z-10 select-none">
                                    0{index + 1}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Process;
