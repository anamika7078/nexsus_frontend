import React from 'react';
import Container from '../components/layout/Container';
import { motion } from 'framer-motion';
import { Shield, Target, Users, Zap, Award, Globe, Heart, Eye, Lock, TrendingUp, CheckCircle } from 'lucide-react';
import SEO from '../components/ui/SEO';
import PageTransition from '../components/ui/PageTransition';
import MatrixRain from '../components/ui/MatrixRain';
import GlassCard from '../components/ui/GlassCard';
// import SpotlightCard from '../components/ui/SpotlightCard';
import Tilt3DCard from '../components/ui/Tilt3DCard';
import GlowText from '../components/ui/GlowText';

const About = () => {
    return (
        <PageTransition>
            <main className="pt-32 pb-20 relative bg-3d-particles overflow-hidden">
                <MatrixRain opacity={0.08} speed={75} />
                <SEO title="About Us" description="Learn about Nexsus Cyber Solutions, our mission, and our team of cybersecurity experts." />

                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-xl"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-xl"
                        animate={{
                            scale: [1.2, 1, 1.2],
                            opacity: [0.4, 0.7, 0.4],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }}
                    />
                </div>

                <Container>
                    {/* Hero Section */}
                    <div className="text-center mb-20 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -200, rotateX: -10 }}
                            animate={{ opacity: 1, x: 0, rotateX: 0 }}
                            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                            className="mb-8"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-bold mb-8 float-3d-simple">
                                <Shield className="w-4 h-4" />
                                <span>TRUSTED BY 500+ ENTERPRISES</span>
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, x: -150, rotateX: -5 }}
                            animate={{ opacity: 1, x: 0, rotateX: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
                            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                            whileHover={{
                                translateZ: 20,
                                textShadow: "0 8px 20px rgba(96, 165, 250, 0.4)",
                                transition: { duration: 0.3 }
                            }}
                        >
                            Your Digital <span className="text-accent depth-3d inline-block">Guardian</span> <br />
                            in the Cyber <span className="text-accent depth-3d inline-block">Frontier</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, x: -120 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-textSecondary max-w-3xl mx-auto text-xl leading-relaxed tilt-3d-hover"
                            whileHover={{
                                translateZ: 10,
                                color: "#e2e8f0",
                                transition: { duration: 0.3 }
                            }}
                        >
                            We don't just protect data—we protect dreams, businesses, and futures.
                            Every line of code we write is a promise of security, every system we build is a fortress of trust.
                        </motion.p>
                    </div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0, x: -150 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-24"
                    >
                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-4 gap-6"
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            {[
                                { number: "500+", label: "Enterprise Clients", icon: Globe },
                                { number: "99.9%", label: "Security Uptime", icon: Shield },
                                { number: "0", label: "Data Breaches", icon: Lock },
                                { number: "24/7", label: "Protection Active", icon: Eye }
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
                                    whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.8, type: "spring" }}
                                >
                                    <Tilt3DCard tiltAmount={15}>
                                        <GlassCard className="text-center group border-white/5 hover:border-accent/30 transition-all duration-300">
                                            <motion.div
                                                className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center text-accent border border-accent/20"
                                                whileHover={{ rotate: 360, scale: 1.1 }}
                                            >
                                                <stat.icon className="w-7 h-7" />
                                            </motion.div>
                                            <div className="text-4xl font-black text-white mb-1 tracking-tighter">
                                                <GlowText>{stat.number}</GlowText>
                                            </div>
                                            <div className="text-xs font-bold text-accent uppercase tracking-[0.2em]">{stat.label}</div>
                                        </GlassCard>
                                    </Tilt3DCard>
                                </motion.div>
                            ))}

                        </motion.div>
                    </motion.div>

                    {/* Story Section */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, x: -50, rotateY: -10 }}
                            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                        >
                            <motion.h2
                                className="text-5xl font-black text-white mb-8 tracking-tight"
                            >
                                Our <GlowText className="text-accent">Promise</GlowText> to You
                            </motion.h2>
                            <div className="space-y-6 text-textSecondary text-lg leading-relaxed">
                                <motion.p
                                    className="relative pl-6 border-l-2 border-accent/50"
                                    whileHover={{ translateZ: 8, transition: { duration: 0.3 } }}
                                >
                                    In a world where cyber threats evolve daily, we stand as your unwavering shield.
                                    Founded in 2020 by elite security experts who foresaw the AI revolution in cyber warfare.
                                </motion.p>
                                <motion.p
                                    whileHover={{ translateZ: 8, transition: { duration: 0.3 } }}
                                >
                                    We don't just respond to threats—we anticipate them. Our AI-powered systems work tirelessly,
                                    learning and adapting, ensuring you're always one step ahead of attackers.
                                </motion.p>
                                <motion.p
                                    whileHover={{ translateZ: 8, transition: { duration: 0.3 } }}
                                >
                                    Every client who chooses Nexsus becomes family. Your success is our success, your security is our mission.
                                    That's not just business—it's personal.
                                </motion.p>
                            </div>

                            <motion.div
                                className="mt-8 flex items-center gap-4"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                            >
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <motion.div
                                            key={i}
                                            className="w-10 h-10 rounded-full bg-accent/20 border-2 border-primary flex items-center justify-center text-xs text-white"
                                            whileHover={{ scale: 1.2, z: 10 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {i}
                                        </motion.div>
                                    ))}
                                </div>
                                <div className="text-sm text-textSecondary">
                                    <div className="font-semibold text-white">500+ Expert Team</div>
                                    <div>Certified Security Professionals</div>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
                            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 blur-[100px] rounded-full"></div>
                            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 relative z-10 float-3d-simple">
                                <div className="grid grid-cols-2 gap-6">
                                    {[
                                        { number: "10M+", label: "Threats Blocked Daily", icon: Shield },
                                        { number: "$50B+", label: "Assets Protected", icon: TrendingUp },
                                        { number: "3sec", label: "Avg Response Time", icon: Zap },
                                        { number: "100%", label: "Client Satisfaction", icon: Heart }
                                    ].map((stat, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                            whileHover={{
                                                scale: 1.05,
                                                rotateY: 5,
                                                transition: { duration: 0.3 }
                                            }}
                                            className="text-center p-4 bg-primary/50 rounded-xl border border-white/5 hover:border-accent/30 transition-all duration-300"
                                        >
                                            <motion.div
                                                className="w-8 h-8 mx-auto mb-2 rounded-full bg-accent/10 flex items-center justify-center text-accent"
                                                whileHover={{ rotate: 180, transition: { duration: 0.4 } }}
                                            >
                                                <stat.icon className="w-4 h-4" />
                                            </motion.div>
                                            <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                                            <div className="text-xs text-textSecondary uppercase tracking-wider">{stat.label}</div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Core Values Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-20"
                    >
                        <motion.h2
                            className="text-4xl font-bold text-white mb-12 text-center"
                            whileHover={{
                                translateZ: 15,
                                textShadow: "0 4px 12px rgba(96, 165, 250, 0.3)",
                                transition: { duration: 0.3 }
                            }}
                        >
                            The <span className="text-accent">Values</span> That Guide Us
                        </motion.h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Shield,
                                    title: "Uncompromising Excellence",
                                    desc: "We settle for nothing less than perfection. Every system, every protocol, every line of code is crafted with obsessive attention to detail.",
                                    color: "from-blue-500/20 to-blue-600/10"
                                },
                                {
                                    icon: Heart,
                                    title: "Client-First Philosophy",
                                    desc: "Your peace of mind is our greatest achievement. We're not just protecting data—we're protecting your legacy and your future.",
                                    color: "from-purple-500/20 to-purple-600/10"
                                },
                                {
                                    icon: Eye,
                                    title: "Visionary Innovation",
                                    desc: "We don't follow security trends—we create them. Our research team stays years ahead, ensuring you're protected against tomorrow's threats today.",
                                    color: "from-emerald-500/20 to-emerald-600/10"
                                }
                            ].map((val, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30, rotateX: -10 }}
                                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2, duration: 0.8, type: "spring", stiffness: 100 }}
                                    whileHover={{
                                        y: -10,
                                        scale: 1.02,
                                        rotateX: 5,
                                        rotateY: 5,
                                        transition: { duration: 0.3, type: "spring", stiffness: 300 }
                                    }}
                                    className="relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-md rounded-2xl p-8 hover:border-accent/30 transition-all duration-300 preserve-3d perspective-1000 float-3d-simple overflow-hidden"
                                >
                                    {/* Background gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${val.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                    <motion.div
                                        className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 relative z-10"
                                        whileHover={{
                                            rotate: 360,
                                            scale: 1.1,
                                            transition: { duration: 0.6 }
                                        }}
                                    >
                                        <val.icon className="w-8 h-8" />
                                    </motion.div>

                                    <h3 className="text-xl font-bold text-white mb-4 relative z-10">{val.title}</h3>
                                    <p className="text-textSecondary leading-relaxed relative z-10">{val.desc}</p>

                                    {/* Floating particles */}
                                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                                        {[...Array(2)].map((_, j) => (
                                            <motion.div
                                                key={j}
                                                className="absolute w-1 h-1 bg-accent/30 rounded-full"
                                                animate={{
                                                    x: [Math.random() * 100, Math.random() * 100],
                                                    y: [Math.random() * 100, Math.random() * 100 - 30],
                                                    opacity: [0, 1, 0],
                                                }}
                                                transition={{
                                                    duration: 3 + j,
                                                    repeat: Infinity,
                                                    delay: j * 0.5,
                                                    ease: "easeOut"
                                                }}
                                                style={{
                                                    left: `${Math.random() * 100}%`,
                                                    top: `${Math.random() * 100}%`,
                                                }}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Call to Action */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <div className="bg-gradient-to-br from-accent/10 to-secondary/10 border border-white/10 backdrop-blur-md rounded-3xl p-12 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                            <motion.h2
                                className="text-3xl md:text-4xl font-bold text-white mb-6"
                                whileHover={{
                                    translateZ: 15,
                                    textShadow: "0 4px 12px rgba(96, 165, 250, 0.3)",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                Ready to Experience <span className="text-accent">True Security</span>?
                            </motion.h2>

                            <motion.p
                                className="text-textSecondary text-lg max-w-2xl mx-auto mb-8"
                                whileHover={{
                                    translateZ: 8,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                Join hundreds of enterprises who sleep soundly at night, knowing their digital assets are protected by the best in the business.
                            </motion.p>

                            <motion.div
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-colors button-hover-lift"
                                >
                                    Start Your Journey
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-3 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors button-hover-lift"
                                >
                                    Schedule Consultation
                                </motion.button>
                            </motion.div>
                        </div>
                    </motion.div>
                </Container>
            </main>
        </PageTransition>
    );
};

export default About;
