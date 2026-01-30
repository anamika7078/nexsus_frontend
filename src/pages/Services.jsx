import React, { useState } from 'react';
import Container from '../components/layout/Container';
import Button from '../components/ui/Button';
import RequestQuoteModal from '../components/ui/RequestQuoteModal';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Server, RefreshCw, FileText, ArrowRight, CheckCircle } from 'lucide-react';
import SEO from '../components/ui/SEO';
import PageTransition from '../components/ui/PageTransition';
import MatrixRain from '../components/ui/MatrixRain';
import Tilt3DCard from '../components/ui/Tilt3DCard';
import ScrollReveal from '../components/ui/ScrollReveal';
import GlassCard from '../components/ui/GlassCard';

const servicesList = [
    {
        icon: Shield,
        title: "Penetration Testing",
        desc: "Simulated cyber attacks to identify and patch vulnerabilities before hackers exploit them.",
        features: ["Web App Testing", "Network Infra Testing", "Social Engineering"]
    },
    {
        icon: Eye,
        title: "SOC Monitoring",
        desc: "24/7/365 surveillance of your IT environment to detect and respond to threats in real-time.",
        features: ["Threat Hunting", "Log Analysis", "Incident Response"]
    },
    {
        icon: Lock,
        title: "Identity & Access",
        desc: "Control who has access to your data with MFA, SSO, and privileged access management.",
        features: ["Zero Trust Architecture", "Biometric Integration", "Role-Based Access"]
    },
    {
        icon: Server,
        title: "Cloud Security",
        desc: "Comprehensive protection for your AWS, Azure, or Google Cloud environments.",
        features: ["Misconfiguration Checks", "Container Security", "Data Encryption"]
    },
    {
        icon: RefreshCw,
        title: "Disaster Recovery",
        desc: "Robust backup and recovery strategies to ensure business continuity after an attack.",
        features: ["Automated Backups", "Ransomware Recovery", "Business Impact Analysis"]
    },
    {
        icon: FileText,
        title: "Compliance Audits",
        desc: "Ensure your business meets industry standards like GDPR, HIPAA, SOC2, and ISO 27001.",
        features: ["Gap Analysis", "Policy Development", "Audit Preparation"]
    }
];

const Services = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState('');

    const handleRequestQuote = (serviceName) => {
        setSelectedService(serviceName);
        setModalOpen(true);
    };

    return (
        <PageTransition>
            <main className="pt-20 pb-20 relative bg-3d-particles overflow-hidden">
                <MatrixRain opacity={0.1} speed={65} />
                <SEO title="Our Services" description="Explore our range of cybersecurity services including SOC monitoring, penetration testing, and compliance audits." />

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
                                <span>6 CORE SECURITY SERVICES</span>
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
                            Fortify Your <span className="text-accent depth-3d inline-block">Digital</span> <br />
                            <span className="text-accent depth-3d inline-block">Defense</span> Systems
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
                            Enterprise-grade cybersecurity solutions that adapt, evolve, and protect your business from tomorrow's threats today.
                        </motion.p>
                    </div>

                    {/* Services Grid */}
                    <ScrollReveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.15}>
                        {servicesList.map((service, index) => (
                            <GlassCard key={index}>
                                <Tilt3DCard
                                    tiltAmount={12}
                                    scale={1.02}
                                    className="relative overflow-hidden group"
                                >

                                    <motion.div
                                        className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 relative z-10"
                                        whileHover={{
                                            rotate: 360,
                                            scale: 1.1,
                                            transition: { duration: 0.6 }
                                        }}
                                    >
                                        <service.icon className="w-8 h-8" />
                                    </motion.div>

                                    <h3 className="text-xl font-bold text-white mb-4 relative z-10 px-2">{service.title}</h3>
                                    <p className="text-textSecondary leading-relaxed mb-6 relative z-10 min-h-[60px] px-2">{service.desc}</p>

                                    <div className="space-y-2 mb-8 relative z-10 px-2">
                                        {service.features.map((feat, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm text-textSecondary">
                                                <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                                                {feat}
                                            </div>
                                        ))}
                                    </div>

                                    <motion.div
                                        className="relative z-10 px-4"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Button
                                            variant="outline"
                                            className="w-full text-sm group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-300"
                                            onClick={() => handleRequestQuote(service.title)}
                                        >
                                            <span className="flex items-center justify-center gap-2">
                                                Request Quote
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </Button>
                                    </motion.div>

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
                                </Tilt3DCard>
                            </GlassCard>
                        ))}
                    </ScrollReveal>

                    <RequestQuoteModal
                        isOpen={modalOpen}
                        onClose={() => setModalOpen(false)}
                        selectedService={selectedService}
                    />
                </Container>
            </main>
        </PageTransition>
    );
};

export default Services;
