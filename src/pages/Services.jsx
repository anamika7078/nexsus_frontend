import React, { useState } from 'react';
import Container from '../components/layout/Container';
import Button from '../components/ui/Button';
import RequestQuoteModal from '../components/ui/RequestQuoteModal';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Server, RefreshCw, FileText } from 'lucide-react';

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

import SEO from '../components/ui/SEO';

const Services = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState('');

    const handleRequestQuote = (serviceName) => {
        setSelectedService(serviceName);
        setModalOpen(true);
    };

    return (
        <main className="pt-20 pb-20">
            <SEO title="Our Services" description="Explore our range of cybersecurity services including SOC monitoring, penetration testing, and compliance audits." />
            <Container>
                <div className="text-center mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold text-white mb-6"
                    >
                        Comprehensive <span className="text-accent">Solutions</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-textSecondary max-w-2xl mx-auto text-lg"
                    >
                        From offensive security to compliance, we provide end-to-end services to secure your digital infrastructure.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesList.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-accent/40 transition-all group hover:shadow-glow"
                        >
                            <div className="p-8">
                                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/10">
                                    <service.icon className="w-6 h-6 text-accent" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                                <p className="text-textSecondary text-sm mb-6 min-h-[60px]">{service.desc}</p>

                                <ul className="space-y-2 mb-8">
                                    {service.features.map((feat, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-muted">
                                            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                                            {feat}
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    variant="outline"
                                    className="w-full text-sm"
                                    onClick={() => handleRequestQuote(service.title)}
                                >
                                    Request Quote
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <RequestQuoteModal
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                    selectedService={selectedService}
                />
            </Container>
        </main>
    );
};

export default Services;
