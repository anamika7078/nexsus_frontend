import React from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import Card from '../ui/Card';
import { ShieldAlert, Globe, Cloud, FileCheck } from 'lucide-react';

const features = [
    {
        icon: ShieldAlert,
        title: "Threat Detection",
        description: "Real-time AI analysis to identify and neutralize threats before they impact your infrastructure."
    },
    {
        icon: Globe,
        title: "Network Security",
        description: "Complete perimeter protection with advanced firewall systems and intrusion prevention."
    },
    {
        icon: Cloud,
        title: "Cloud Security",
        description: "Secure your cloud assets across AWS, Azure, and Google Cloud with unified policies."
    },
    {
        icon: FileCheck,
        title: "Compliance & Audits",
        description: "Automated compliance checks for GDPR, HIPAA, and SOC2 standards to keep you audit-ready."
    }
];

const Features = () => {
    return (
        <section className="py-20 relative z-10">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Card className="h-full flex flex-col items-start gap-4 hover:border-accent/40 group">
                                <div className="bg-white/5 p-3 rounded-lg group-hover:bg-accent/20 transition-colors">
                                    <feature.icon className="w-8 h-8 text-accent" />
                                </div>
                                <h3 className="text-xl font-bold text-white mt-2">{feature.title}</h3>
                                <p className="text-textSecondary text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Features;
