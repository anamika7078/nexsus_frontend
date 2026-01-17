import React from 'react';
import { motion } from 'framer-motion';
import {
    Zap, Shield, Search, BarChart3,
    Lock, Globe, Cpu, Cloud,
    Bell, CheckCircle2, ArrowRight
} from 'lucide-react';
import Container from '../components/layout/Container';
import Button from '../components/ui/Button';

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className="p-8 rounded-3xl bg-secondary/30 border border-white/5 hover:border-accent/30 transition-all duration-300 group"
    >
        <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
            <Icon size={28} />
        </div>
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <p className="text-textSecondary leading-relaxed">{description}</p>
    </motion.div>
);

const Features = () => {
    const mainFeatures = [
        {
            icon: Cpu,
            title: "AI-Powered Analytics",
            description: "Advanced machine learning algorithms that process millions of data points to identify patterns and predict future trends with 99.9% accuracy.",
            delay: 0.1
        },
        {
            icon: Shield,
            title: "Military-Grade Security",
            description: "Zero-trust architecture combined with AES-256 encryption ensuring your sensitive data remains impenetrable to unauthorized access.",
            delay: 0.2
        },
        {
            icon: BarChart3,
            title: "Real-time Monitoring",
            description: "Live interactive dashboards that provide up-to-the-second insights into your system performance and lead conversion rates.",
            delay: 0.3
        },
        {
            icon: Globe,
            title: "Global Infrastructure",
            description: "Strategically located edge nodes worldwide ensure ultra-low latency and high availability for your services, regardless of user location.",
            delay: 0.4
        },
        {
            icon: Lock,
            title: "Threat Detection",
            description: "Proactive threat hunting systems that identify and neutralize potential security vulnerabilities before they can be exploited.",
            delay: 0.5
        },
        {
            icon: Zap,
            title: "Automated Workflows",
            description: "Powerful automation engine that streamlines repetitive tasks, allowing your team to focus on high-value strategic decision making.",
            delay: 0.6
        }
    ];

    return (
        <div className="bg-primary min-h-screen">
            {/* Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-accent/5 to-transparent blur-3xl rounded-full" />

                <Container className="relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-bold mb-8"
                    >
                        <Zap size={16} />
                        <span>NEXT-GEN CAPABILITIES</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter"
                    >
                        Precision Tools for <br />
                        <span className="text-accent underline decoration-indigo-500/30">Modern Intelligence</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-3xl mx-auto text-xl text-textSecondary leading-relaxed mb-12"
                    >
                        Explore the advanced technical features that make Nexsus the leading platform for data analytics
                        and secure digital transformation.
                    </motion.p>
                </Container>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-[#0a0b10]">
                <Container>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {mainFeatures.map((feature, idx) => (
                            <FeatureCard key={idx} {...feature} />
                        ))}
                    </div>
                </Container>
            </section>

            {/* Detailed Section: AI Insights */}
            <section className="py-32 relative overflow-hidden">
                <Container>
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1"
                        >
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                                Deep Dive into <br />
                                <span className="text-accent">Analytical Intelligence</span>
                            </h2>
                            <p className="text-textSecondary text-lg mb-8 leading-relaxed">
                                Our platform doesn't just collect data; it interprets it. By leveraging
                                neural networks and cognitive computing, we provide context that simple
                                charts can't show.
                            </p>

                            <ul className="space-y-4 mb-10">
                                {[
                                    "Automated anomaly detection",
                                    "Predictive behavioral modeling",
                                    "Cross-platform data synchronization",
                                    "Semantic search capabilities"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-white">
                                        <CheckCircle2 className="text-accent" size={20} />
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button icon={ArrowRight}>Request Technical Demo</Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="flex-1 relative"
                        >
                            <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full" />
                            <div className="relative p-8 rounded-[40px] bg-secondary/50 border border-white/5 backdrop-blur-2xl">
                                <div className="space-y-6">
                                    <div className="flex justify-between items-center bg-white/5 p-4 rounded-2xl">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                                                <BarChart3 size={20} />
                                            </div>
                                            <div>
                                                <p className="text-xs text-textSecondary">Data Throughput</p>
                                                <p className="text-lg font-bold text-white">12.4 GB/s</p>
                                            </div>
                                        </div>
                                        <div className="text-emerald-400 font-bold">+24%</div>
                                    </div>
                                    <div className="h-64 rounded-2xl bg-gradient-to-br from-[#12141d] to-[#1e1b4b] border border-white/10 flex items-center justify-center relative overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-48 h-48 rounded-full border border-accent/20 animate-ping" />
                                            <div className="absolute w-32 h-32 rounded-full border border-indigo-500/30 animate-pulse" />
                                            <Cpu className="text-accent relative z-10" size={48} />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white/5 p-4 rounded-2xl">
                                            <p className="text-xs text-textSecondary uppercase tracking-widest font-bold mb-1">Latency</p>
                                            <p className="text-xl font-black text-white">14ms</p>
                                        </div>
                                        <div className="bg-white/5 p-4 rounded-2xl">
                                            <p className="text-xs text-textSecondary uppercase tracking-widest font-bold mb-1">Uptime</p>
                                            <p className="text-xl font-black text-white">99.99%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <Container>
                    <div className="p-12 md:p-20 rounded-[40px] bg-gradient-to-br from-[#1e1b4b] to-[#0a0b10] border border-white/10 text-center relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 blur-[120px] rounded-full group-hover:bg-accent/20 transition-colors duration-500" />

                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter relative z-10">
                            Ready to Upgrade Your <br />
                            <span className="text-accent">Digital Armor?</span>
                        </h2>
                        <p className="text-textSecondary text-xl max-w-2xl mx-auto mb-12 relative z-10 leading-relaxed">
                            Join thousands of enterprises that trust Nexsus for their strategic intelligence and
                            uncompromising security needs.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                            <Button variant="primary" size="lg" className="px-10">Get Started Now</Button>
                            <Button variant="outline" size="lg" className="px-10">Contact Sales</Button>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Features;
