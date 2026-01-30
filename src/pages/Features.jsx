import React from 'react';
import { motion } from 'framer-motion';
import {
    Zap, Shield, Search, BarChart3,
    Lock, Globe, Cpu, Cloud,
    Bell, CheckCircle2, ArrowRight
} from 'lucide-react';
import Container from '../components/layout/Container';
import Button from '../components/ui/Button';
import PageTransition from '../components/ui/PageTransition';
import MatrixRain from '../components/ui/MatrixRain';
import AnimatedBackground from '../components/ui/AnimatedBackground';
import Tilt3DCard from '../components/ui/Tilt3DCard';

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
    <Tilt3DCard
        tiltAmount={15}
        scale={1.03}
        className="p-8 rounded-3xl bg-secondary/30 border border-white/5 hover:border-accent/30 transition-all duration-300 group cursor-pointer"
    >
        {/* Animated background glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/0 via-accent/0 to-accent/10 group-hover:from-accent/5 group-hover:via-accent/10 group-hover:to-accent/20 transition-all duration-500"></div>

        {/* Icon container with enhanced 3D animation */}
        <motion.div
            className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 preserve-3d rotate-3d-simple"
            whileHover={{
                rotateZ: 360,
                scale: 1.1,
                transition: { duration: 0.6, type: "spring" }
            }}
        >
            <Icon size={28} />
        </motion.div>

        {/* Title with 3D text effect */}
        <motion.h3
            className="text-xl font-bold text-white mb-4 relative"
            whileHover={{
                translateZ: 20,
                textShadow: "0 2px 4px rgba(96, 165, 250, 0.3)",
                transition: { duration: 0.3 }
            }}
        >
            {title}
            {/* Underline animation */}
            <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-accent"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
            />
        </motion.h3>

        {/* Description with subtle animation */}
        <motion.p
            className="text-textSecondary leading-relaxed relative"
            whileHover={{
                translateZ: 10,
                color: "#e2e8f0",
                transition: { duration: 0.3 }
            }}
        >
            {description}
        </motion.p>

        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-accent/50 rounded-full"
                    animate={{
                        x: [0, Math.random() * 100 - 50],
                        y: [0, -20],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeOut"
                    }}
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                />
            ))}
        </div>

        {/* Corner decorations */}
        <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-accent/50 group-hover:border-accent transition-colors duration-300"></div>
        <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-accent/50 group-hover:border-accent transition-colors duration-300"></div>
        <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-accent/50 group-hover:border-accent transition-colors duration-300"></div>
        <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-accent/50 group-hover:border-accent transition-colors duration-300"></div>
    </Tilt3DCard>
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
        <PageTransition>
            <div className="bg-primary min-h-screen relative">
                <MatrixRain opacity={0.1} speed={70} />
                <AnimatedBackground />
                {/* Hero Section */}
                <section className="pt-32 pb-20 relative overflow-hidden z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-accent/5 to-transparent blur-3xl rounded-full" />

                <Container className="relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50, rotateX: -10 }}
                        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, type: "spring", stiffness: 100 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-bold mb-8 float-3d-simple"
                    >
                        <Zap size={16} />
                        <span>NEXT-GEN CAPABILITIES</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 80, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.2, duration: 1, type: "spring", stiffness: 100 }}
                        className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter"
                    >
                        Precision Tools for <br />
                        <motion.span
                            className="text-accent underline decoration-indigo-500/30 depth-3d inline-block"
                            whileHover={{
                                translateZ: 20,
                                textShadow: "0 8px 20px rgba(96, 165, 250, 0.4)",
                                transition: { duration: 0.3 }
                            }}
                        >
                            Modern Intelligence
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
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
                    <motion.div
                        initial={{ opacity: 0, x: -200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.8 }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {mainFeatures.map((feature, idx) => (
                            <FeatureCard key={idx} {...feature} />
                        ))}
                    </motion.div>
                </Container>
            </section>

            {/* Detailed Section: AI Insights */}
            <section className="py-32 relative overflow-hidden">
                <Container>
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -200, rotateY: -10 }}
                            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 1, type: "spring", stiffness: 100 }}
                            className="flex-1"
                        >
                            <motion.h2
                                className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight"
                                whileHover={{
                                    translateZ: 15,
                                    textShadow: "0 4px 12px rgba(96, 165, 250, 0.3)",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                Deep Dive into <br />
                                <span className="text-accent">Analytical Intelligence</span>
                            </motion.h2>
                            <motion.p
                                className="text-textSecondary text-lg mb-8 leading-relaxed"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            >
                                Our platform doesn't just collect data; it interprets it. By leveraging
                                neural networks and cognitive computing, we provide context that simple
                                charts can't show.
                            </motion.p>

                            <motion.ul
                                className="space-y-4 mb-10"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            >
                                {[
                                    "Automated anomaly detection",
                                    "Predictive behavioral modeling",
                                    "Cross-platform data synchronization",
                                    "Semantic search capabilities"
                                ].map((item, idx) => (
                                    <motion.li
                                        key={idx}
                                        className="flex items-center gap-3 text-white"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 + idx * 0.1, duration: 0.6 }}
                                        whileHover={{ x: 10, transition: { duration: 0.2 } }}
                                    >
                                        <CheckCircle2 className="text-accent" size={20} />
                                        <span className="font-medium">{item}</span>
                                    </motion.li>
                                ))}
                            </motion.ul>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8, duration: 0.8 }}
                            >
                                <Button icon={ArrowRight}>Request Technical Demo</Button>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 200, rotateX: 10 }}
                            whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 1, type: "spring", stiffness: 100 }}
                            className="flex-1 relative"
                        >
                            <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full" />
                            <div className="relative p-8 rounded-[40px] bg-secondary/50 border border-white/5 backdrop-blur-2xl">
                                <div className="space-y-6">
                                    <motion.div
                                        className="flex justify-between items-center bg-white/5 p-4 rounded-2xl"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2, duration: 0.6 }}
                                    >
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
                                    </motion.div>

                                    <motion.div
                                        className="h-64 rounded-2xl bg-gradient-to-br from-[#12141d] to-[#1e1b4b] border border-white/10 flex items-center justify-center relative overflow-hidden"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4, duration: 0.8 }}
                                    >
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <motion.div
                                                className="w-48 h-48 rounded-full border border-accent/20"
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            />
                                            <motion.div
                                                className="absolute w-32 h-32 rounded-full border border-indigo-500/30"
                                                animate={{ scale: [1.2, 1, 1.2] }}
                                                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                            />
                                            <Cpu className="text-accent relative z-10" size={48} />
                                        </div>
                                    </motion.div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <motion.div
                                            className="bg-white/5 p-4 rounded-2xl"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.6, duration: 0.6 }}
                                        >
                                            <p className="text-xs text-textSecondary uppercase tracking-widest font-bold mb-1">Latency</p>
                                            <p className="text-xl font-black text-white">14ms</p>
                                        </motion.div>
                                        <motion.div
                                            className="bg-white/5 p-4 rounded-2xl"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.7, duration: 0.6 }}
                                        >
                                            <p className="text-xs text-textSecondary uppercase tracking-widest font-bold mb-1">Uptime</p>
                                            <p className="text-xl font-black text-white">99.99%</p>
                                        </motion.div>
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
                    <motion.div
                        className="p-12 md:p-20 rounded-[40px] bg-gradient-to-br from-[#1e1b4b] to-[#0a0b10] border border-white/10 text-center relative overflow-hidden group"
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, type: "spring", stiffness: 100 }}
                    >
                        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 blur-[120px] rounded-full group-hover:bg-accent/20 transition-colors duration-500" />

                        <motion.h2
                            className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter relative z-10"
                            whileHover={{
                                translateZ: 15,
                                textShadow: "0 4px 12px rgba(96, 165, 250, 0.3)",
                                transition: { duration: 0.3 }
                            }}
                        >
                            Ready to Upgrade Your <br />
                            <span className="text-accent">Digital Armor?</span>
                        </motion.h2>

                        <motion.p
                            className="text-textSecondary text-xl max-w-2xl mx-auto mb-12 relative z-10 leading-relaxed"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            Join thousands of enterprises that trust Nexsus for their strategic intelligence and
                            uncompromising security needs.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-6 justify-center relative z-10"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button variant="primary" size="lg" className="px-10">Get Started Now</Button>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button variant="outline" size="lg" className="px-10">Contact Sales</Button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </Container>
            </section>
            </div>
        </PageTransition>
    );
};

export default Features;
