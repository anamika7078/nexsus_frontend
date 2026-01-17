import React from 'react';
import Container from '../layout/Container';
import Button from '../ui/Button';
import { motion } from 'framer-motion';
import { Shield, Fingerprint, Lock } from 'lucide-react';

const services = [
    {
        title: "Penetration Testing",
        description: "Our ethical hackers simulate real-world attacks to identify vulnerabilities in your systems before malicious actors can exploit them. We provide detailed reports and remediation strategies.",
        icon: Shield,
        color: "from-blue-500 to-cyan-400"
    },
    {
        title: "SOC Monitoring",
        description: "24/7 Security Operations Center monitoring ensuring round-the-clock surveillance of your digital assets. We detect, analyze, and respond to threats in real-time.",
        icon: Fingerprint,
        color: "from-purple-500 to-pink-500"
    },
    {
        title: "Endpoint Security",
        description: "Secure every device on your network with advanced endpoint protection. Prevent malware, ransomware, and zero-day exploits from compromising your endpoints.",
        icon: Lock,
        color: "from-emerald-500 to-teal-400"
    }
];

const ServicesPreview = () => {
    return (
        <section className="py-24 overflow-hidden">
            <Container>
                <div className="text-center mb-20">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Expertise</h2>
                    <p className="text-textSecondary">Comprehensive security solutions tailored mainly for your business needs.</p>
                </div>

                <div className="space-y-24">
                    {services.map((service, index) => (
                        <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
                            {/* Text Content */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="flex-1"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`p-2 rounded-lg bg-gradient-to-br ${service.color} opacity-80`}>
                                        <service.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                                </div>
                                <p className="text-textSecondary leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                <Button variant="secondary" className="px-6 py-2 text-sm">Learn More</Button>
                            </motion.div>

                            {/* Visual Content (Placeholder) */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="flex-1 w-full"
                            >
                                <div className="aspect-video rounded-xl overflow-hidden relative group border border-white/10 bg-white/5">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 group-hover:opacity-20 transition-opacity`}></div>

                                    {/* Abstract Visual Pattern */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <service.icon className="w-24 h-24 text-white/5 group-hover:text-white/10 transition-colors duration-500 transform group-hover:scale-110" />
                                    </div>

                                    {/* Scan line effect (using custom animation class) */}
                                    <div className="absolute left-0 w-full h-1 bg-white/20 shadow-[0_0_10px_white] animate-scan"></div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default ServicesPreview;
