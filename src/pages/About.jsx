import React from 'react';
import Container from '../components/layout/Container';
import { motion } from 'framer-motion';
import { Shield, Target, Users, Zap } from 'lucide-react';

import SEO from '../components/ui/SEO';

const About = () => {
    return (
        <main className="pt-20 pb-20">
            <SEO title="About Us" description="Learn about Nexsus Cyber Solutions, our mission, and our team of cybersecurity experts." />
            <Container>
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold text-white mb-6"
                    >
                        Defending the Digital <span className="text-accent">Frontier</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-textSecondary max-w-2xl mx-auto text-lg"
                    >
                        Nexsus Cyber Solutions was founded with a single mission: to empower businesses to thrive in the digital age without fear of cyber threats.
                    </motion.p>
                </div>

                {/* Story Section */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
                        <div className="space-y-4 text-textSecondary leading-relaxed">
                            <p>
                                In an era where data is the new oil, protecting it is paramount. We started Nexsus in 2020, assembling a team of elite ethical hackers and security researchers.
                            </p>
                            <p>
                                We recognized that traditional security measures were no longer sufficient against AI-driven attacks. That's why we built Nexsus—to fight AI with AI.
                            </p>
                            <p>
                                Today, we protect over 500 enterprise clients globally, securing billions of dollars in assets and verifying millions of transactions daily.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full"></div>
                        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 relative z-10">
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { number: "24/7", label: "Monitoring" },
                                    { number: "500+", label: "Enterprise Clients" },
                                    { number: "99.9%", label: "Uptime Secured" },
                                    { number: "0", label: "Breaches missed" }
                                ].map((stat, i) => (
                                    <div key={i} className="text-center p-4 bg-primary/50 rounded-lg">
                                        <div className="text-3xl font-bold text-accent mb-1">{stat.number}</div>
                                        <div className="text-xs text-textSecondary uppercase tracking-wider">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Values Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Core Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Shield, title: "Uncompromised Security", desc: "We believe security allows for no shortcuts. Every line of code, every endpoint is rigorously tested." },
                            { icon: Target, title: "Proactive Defense", desc: "We don't wait for attacks. We hunt them. Our offensive security team constantly tests our own defenses." },
                            { icon: Users, title: "Client Partnership", desc: "We are not just vendors; we are your security partners, available whenever you need us." }
                        ].map((val, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors"
                            >
                                <val.icon className="w-10 h-10 text-accent mb-6" />
                                <h3 className="text-xl font-bold text-white mb-4">{val.title}</h3>
                                <p className="text-textSecondary text-sm leading-relaxed">{val.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </main>
    );
};

export default About;
