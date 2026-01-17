import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import Button from '../ui/Button';
import { Shield, Lock, Activity, ArrowRight } from 'lucide-react';

const FloatingCard = ({ icon: Icon, title, className, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        className={`absolute bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center gap-3 shadow-glow ${className}`}
    >
        <div className="bg-accent/20 p-2 rounded-lg">
            <Icon className="w-6 h-6 text-accent" />
        </div>
        <div>
            <h4 className="font-bold text-white text-sm">{title}</h4>
            <p className="text-xs text-textSecondary">Verified Secure</p>
        </div>
    </motion.div>
);

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/20 blur-[100px] rounded-full pointer-events-none" />

            <Container className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-2 mb-6">
                        <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase border border-accent/20 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                            Future of Security
                        </span>
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-textSecondary">
                            NEXT-GEN
                        </span> <br />
                        CYBER SECURITY
                    </h1>
                    <p className="text-lg text-textSecondary mb-8 max-w-xl leading-relaxed">
                        Advanced AI-driven protection for modern businesses. Secure your digital infrastructure with real-time threat detection and military-grade encryption.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link to="/contact">
                            <Button variant="primary" className="px-8 flex items-center gap-2">
                                Contact Us <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
                        <Link to="/services">
                            <Button variant="outline" className="px-8">Our Services</Button>
                        </Link>
                    </div>
                </motion.div>

                {/* Right Visual */}
                <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center mt-10 lg:mt-0">
                    {/* Abstract Cyber Visual Placeholder */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] rounded-full border border-white/10 absolute"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="w-[200px] lg:w-[300px] h-[200px] lg:h-[300px] rounded-full border border-dashed border-accent/30 absolute"
                    />

                    {/* Center Icon */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative z-10"
                    >
                        <div className="relative">
                            <Shield className="w-32 lg:w-48 h-32 lg:h-48 text-white drop-shadow-[0_0_50px_rgba(111,168,255,0.5)]" strokeWidth={1} />
                            <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full -z-10"></div>
                        </div>
                    </motion.div>

                    {/* Floating Cards */}
                    <FloatingCard
                        icon={Lock}
                        title="Encrypted Vault"
                        className="top-0 left-10 lg:left-0 z-20"
                        delay={0.6}
                    />
                    <FloatingCard
                        icon={Activity}
                        title="Real-time Monitoring"
                        className="bottom-0 right-10 lg:right-0 z-20"
                        delay={0.8}
                    />
                </div>
            </Container>
        </section>
    );
};

export default Hero;
