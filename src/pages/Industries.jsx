import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import PageTransition from '../components/ui/PageTransition';
import MatrixRain from '../components/ui/MatrixRain';
import GlassCard from '../components/ui/GlassCard';
import Tilt3DCard from '../components/ui/Tilt3DCard';
import GlowText from '../components/ui/GlowText';
import SEO from '../components/ui/SEO';
import { Building2, Landmark, Stethoscope, ShoppingBag, Plane } from 'lucide-react';

const IndustryCard = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9, rotateX: -15 }}
        whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.8, type: "spring" }}
    >
        <Tilt3DCard tiltAmount={10}>
            <GlassCard className="p-8 h-full group hover:border-accent/40 transition-all duration-500">
                <motion.div 
                    className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-accent border border-accent/20 relative z-10"
                    whileHover={{ rotateY: 180, scale: 1.1 }}
                >
                    <Icon className="w-8 h-8" />
                    <div className="absolute inset-0 bg-accent/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-accent transition-colors">{title}</h3>
                <p className="text-textSecondary leading-relaxed text-sm">{description}</p>
            </GlassCard>
        </Tilt3DCard>
    </motion.div>
);

const Industries = () => {
    const industries = [
        {
            icon: Landmark,
            title: "Banking & Finance",
            description: "Secure detailed financial transaction data, inhibit fraud, and ensure compliance with global banking regulations like PCI DSS and GDPR."
        },
        {
            icon: Stethoscope,
            title: "Healthcare",
            description: "Protect sensitive patient records (PHI) and secure IoT medical devices against ransomware attacks and data breaches."
        },
        {
            icon: Building2,
            title: "Government",
            description: "Defend critical national infrastructure and citizen data from state-sponsored cyber threats and espionage."
        },
        {
            icon: ShoppingBag,
            title: "E-Commerce",
            description: "Secure customer payment data, prevent DDoS attacks, and ensure uninterrupted business operations during peak traffic."
        },
        {
            icon: Plane,
            title: "Transportation",
            description: "Safeguard logistics networks and operational technology (OT) from cyber disruptions to ensure global supply chain integrity."
        },
        {
            icon: Building2,
            title: "Manufacturing",
            description: "Protect intellectual property and secure industrial control systems (ICS) to prevent production sabotage."
        }
    ];

    return (
        <PageTransition>
            <main className="pt-32 pb-20 relative bg-3d-particles min-h-screen">
                <MatrixRain opacity={0.1} speed={70} />
                <SEO title="Industries" description="Tailored cybersecurity solutions for sectors where data integrity and operational continuity are critical." />
                
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-24 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-4 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold tracking-widest uppercase mb-6"
                        >
                            SPECIALIZED SECTORS
                        </motion.div>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
                            Industries We <GlowText className="text-accent">Protect</GlowText>
                        </h1>
                        <p className="text-textSecondary text-xl leading-relaxed">
                            Tailored cybersecurity solutions for sectors where data integrity and operational continuity are critical.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                        {industries.map((ind, index) => (
                            <IndustryCard key={index} {...ind} delay={index * 0.1} />
                        ))}
                    </div>
                </Container>
            </main>
        </PageTransition>
    );
};

export default Industries;