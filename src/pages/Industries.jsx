import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import { Building2, Landmark, Stethoscope, ShoppingBag, Plane } from 'lucide-react';

const IndustryCard = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group"
    >
        <div className="bg-accent/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-7 h-7 text-accent" />
        </div>
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <p className="text-textSecondary leading-relaxed">{description}</p>
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
        <main className="pt-24 pb-20">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Industries We <span className="text-accent">Protect</span>
                    </h1>
                    <p className="text-textSecondary text-lg">
                        Tailored cybersecurity solutions for sectors where data integrity and operational continuity are critical.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((ind, index) => (
                        <IndustryCard key={index} {...ind} delay={index * 0.1} />
                    ))}
                </div>
            </Container>
        </main>
    );
};

export default Industries;
