import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import Button from '../ui/Button';
import { FloatingCard3D } from '../ui/Elements3D';
import { Lock, Activity, ArrowRight } from 'lucide-react';
import CubeAnimation from './CubeAnimation';
import TunnelBackground from './TunnelBackground';

const FloatingCard = ({ icon: Icon, title, className, delay }) => (
    <FloatingCard3D className={`absolute ${className}`} delay={delay}>
        <div className="flex items-center gap-3">
            <div className="bg-accent/20 p-2 rounded-lg">
                <Icon className="w-6 h-6 text-accent" />
            </div>
            <div>
                <h4 className="font-bold text-white text-sm">{title}</h4>
                <p className="text-xs text-textSecondary">Verified Secure</p>
            </div>
        </div>
    </FloatingCard3D>
);

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* 3D Tunnel Background */}
            <TunnelBackground />

            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent/20 blur-[120px] rounded-full pointer-events-none z-10" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/20 blur-[100px] rounded-full pointer-events-none z-10" />

            <Container className="grid lg:grid-cols-2 gap-12 items-center relative z-20">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -200, rotateY: -15 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
                >
                    <motion.div
                        className="flex items-center gap-2 mb-6"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase border border-accent/20 flex items-center gap-2 tilt-3d-hover">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                            Future of Security
                        </span>
                    </motion.div>

                    <motion.h1
                        className="text-6xl lg:text-8xl font-black text-white leading-none mb-6 tracking-tighter"
                        initial={{ opacity: 0, x: -150, rotateX: -5 }}
                        whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 100 }}
                    >
                        <motion.span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-white via-accent to-white depth-3d inline-block"
                            animate={{
                                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                            }}
                            transition={{ duration: 5, repeat: Infinity }}
                            style={{ backgroundSize: '200% auto' }}
                            whileHover={{
                                translateZ: 40,
                                textShadow: "0 15px 30px rgba(96, 165, 250, 0.6)",
                                transition: { duration: 0.3 }
                            }}
                        >
                            NEXT-GEN
                        </motion.span> <br />
                        <motion.span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent depth-3d inline-block"
                            animate={{
                                backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
                            }}
                            transition={{ duration: 5, repeat: Infinity }}
                            style={{ backgroundSize: '200% auto' }}
                            whileHover={{
                                translateZ: 40,
                                textShadow: "0 15px 30px rgba(96, 165, 250, 0.6)",
                                transition: { duration: 0.3 }
                            }}
                        >
                            CYBER SECURITY
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        className="text-lg text-textSecondary mb-8 max-w-xl leading-relaxed"
                        initial={{ opacity: 0, x: -120 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        Advanced AI-driven protection for modern businesses. Secure your digital infrastructure with real-time threat detection and military-grade encryption.
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap gap-4"
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <Link to="/contact">
                            <Button variant="primary" className="px-8 flex items-center gap-2 pulse-3d-simple">
                                Contact Us <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
                        <Link to="/services">
                            <Button variant="outline" className="px-8 tilt-3d-hover">Our Services</Button>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Right Visual - Cube Animation */}
                <motion.div
                    className="relative h-[400px] lg:h-[500px] flex items-center justify-center mt-10 lg:mt-0"
                    initial={{ opacity: 0, x: 200, rotateY: 15 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
                >
                    <motion.div
                        initial={{ rotateY: 0 }}
                        whileInView={{ rotateY: 360 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    >
                        <CubeAnimation />
                    </motion.div>

                    {/* Floating Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 150, rotateZ: -10 }}
                        whileInView={{ opacity: 1, x: 0, rotateZ: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <FloatingCard
                            icon={Lock}
                            title="Encrypted Vault"
                            className="top-0 left-10 lg:left-0 z-20"
                            delay={0.6}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -150, rotateZ: 10 }}
                        whileInView={{ opacity: 1, x: 0, rotateZ: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <FloatingCard
                            icon={Activity}
                            title="Real-time Monitoring"
                            className="bottom-0 right-10 lg:right-0 z-20"
                            delay={0.8}
                        />
                    </motion.div>
                </motion.div>
            </Container>
        </section>
    );
};

export default Hero;
