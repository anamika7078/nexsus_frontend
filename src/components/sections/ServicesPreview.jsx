import React from 'react';
import Container from '../layout/Container';
import Button from '../ui/Button';
import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import Tilt3DCard from '../ui/Tilt3DCard';
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
                                initial={{ opacity: 0, scale: 0.9, rotateY: index % 2 === 0 ? 15 : -15 }}
                                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, type: "spring" }}
                                className="flex-1 w-full perspective-1000"
                            >
                                <Tilt3DCard tiltAmount={5}>
                                    <GlassCard className="aspect-video relative group p-0">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>

                                        {/* Abstract Visual Pattern */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <motion.div
                                                animate={{
                                                    rotate: [0, 360],
                                                }}
                                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                                className="absolute inset-0 opacity-10"
                                            >
                                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-dashed border-white/20 rounded-full" />
                                            </motion.div>
                                            <service.icon className="w-32 h-32 text-white/10 group-hover:text-accent/30 transition-colors duration-500 transform group-hover:scale-125 group-hover:rotate-12" />
                                        </div>

                                        {/* Scan line effect (using custom animation class) */}
                                        <motion.div
                                            className="absolute left-0 w-full h-[2px] bg-accent/50 shadow-[0_0_15px_rgba(111,168,255,0.8)] z-20"
                                            animate={{ top: ['0%', '100%'] }}
                                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                        />

                                        {/* Cyber Data Streams */}
                                        <div className="absolute inset-0 overflow-hidden opacity-30">
                                            {[...Array(5)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="absolute h-full w-[1px] bg-accent/20"
                                                    style={{ left: `${20 * i}%` }}
                                                    animate={{ opacity: [0, 1, 0] }}
                                                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                                                />
                                            ))}
                                        </div>
                                    </GlassCard>
                                </Tilt3DCard>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default ServicesPreview;
