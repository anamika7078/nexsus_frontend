import React from 'react';
import Container from '../components/layout/Container';
import PageTransition from '../components/ui/PageTransition';
import MatrixRain from '../components/ui/MatrixRain';
import GlassCard from '../components/ui/GlassCard';
import GlowText from '../components/ui/GlowText';
import SEO from '../components/ui/SEO';
import { ShieldCheck } from 'lucide-react';

const Privacy = () => {
    return (
        <PageTransition>
            <main className="pt-32 pb-20 relative bg-3d-particles min-h-screen">
                <MatrixRain opacity={0.05} speed={80} />
                <SEO title="Privacy Policy" description="Nexsus Cyber Solutions Privacy Policy - Your data security is our priority." />
                
                <Container>
                    <div className="max-w-4xl mx-auto relative z-10">
                        <div className="text-center mb-16">
                            <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mx-auto mb-6">
                                <ShieldCheck size={32} />
                            </div>
                            <h1 className="text-5xl font-black text-white mb-4 tracking-tighter">
                                Privacy <GlowText className="text-accent">Policy</GlowText>
                            </h1>
                            <p className="text-textSecondary font-mono text-sm uppercase tracking-widest">Effective Date: January 29, 2026</p>
                        </div>

                        <GlassCard className="p-8 md:p-12 space-y-12 bg-primary/40">
                            <section>
                                <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                                    <span className="text-accent font-mono">01.</span> Information We Collect
                                </h2>
                                <p className="text-textSecondary leading-relaxed text-lg">
                                    We collect information you provide directly to us, such as when you fill out a form, request customer support, or communicate with us. This information may include your name, email address, phone number, and any other information you choose to provide.
                                </p>
                            </section>

                            <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                            <section>
                                <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                                    <span className="text-accent font-mono">02.</span> How We Use Your Information
                                </h2>
                                <p className="text-textSecondary leading-relaxed text-lg">
                                    We use the information we collect to provide, maintain, and improve our services, to respond to your comments and questions, and to send you related information, including confirmations, invoices, technical notices, updates, security alerts, and support and administrative messages.
                                </p>
                            </section>

                            <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                            <section>
                                <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                                    <span className="text-accent font-mono">03.</span> Data Security
                                </h2>
                                <p className="text-textSecondary leading-relaxed text-lg">
                                    We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction. Our infrastructure is protected by military-grade AES-256 encryption.
                                </p>
                            </section>

                            <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                            <section>
                                <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                                    <span className="text-accent font-mono">04.</span> Contact Us
                                </h2>
                                <p className="text-textSecondary leading-relaxed text-lg">
                                    If you have any questions about this Privacy Policy, please contact our Data Protection Officer at <span className="text-accent hover:underline cursor-pointer">privacy@Nexsuscyber.com</span>.
                                </p>
                            </section>
                        </GlassCard>
                    </div>
                </Container>
            </main>
        </PageTransition>
    );
};

export default Privacy;