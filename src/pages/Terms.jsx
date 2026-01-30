import React from 'react';
import Container from '../components/layout/Container';
import PageTransition from '../components/ui/PageTransition';
import MatrixRain from '../components/ui/MatrixRain';
import GlassCard from '../components/ui/GlassCard';
import GlowText from '../components/ui/GlowText';
import SEO from '../components/ui/SEO';
import { FileText } from 'lucide-react';

const Terms = () => {
    return (
        <PageTransition>
            <main className="pt-32 pb-20 relative bg-3d-particles min-h-screen">
                <MatrixRain opacity={0.05} speed={80} />
                <SEO title="Terms of Service" description="Nexsus Cyber Solutions Terms of Service - Understanding your relationship with us." />

                <Container>
                    <div className="max-w-4xl mx-auto relative z-10">
                        <div className="text-center mb-16">
                            <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mx-auto mb-6">
                                <FileText size={32} />
                            </div>
                            <h1 className="text-5xl font-black text-white mb-4 tracking-tighter">
                                Terms of <GlowText className="text-accent">Service</GlowText>
                            </h1>
                            <p className="text-textSecondary font-mono text-sm uppercase tracking-widest">Last Modified: January 29, 2026</p>
                        </div>

                        <GlassCard className="p-8 md:p-12 space-y-12 bg-primary/40">
                            <section>
                                <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                                    <span className="text-accent font-mono">01.</span> Acceptance of Terms
                                </h2>
                                <p className="text-textSecondary leading-relaxed text-lg">
                                    By accessing or using our website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                                </p>
                            </section>

                            <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                            <section>
                                <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                                    <span className="text-accent font-mono">02.</span> Use of Services
                                </h2>
                                <p className="text-textSecondary leading-relaxed text-lg">
                                    You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                                </p>
                            </section>

                            <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                            <section>
                                <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                                    <span className="text-accent font-mono">03.</span> Intellectual Property
                                </h2>
                                <p className="text-textSecondary leading-relaxed text-lg">
                                    The content, features, and functionality of our services are owned by Nexsus Cyber Solutions and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                                </p>
                            </section>

                            <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                            <section>
                                <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                                    <span className="text-accent font-mono">04.</span> Limitation of Liability
                                </h2>
                                <p className="text-textSecondary leading-relaxed text-lg">
                                    In no event shall Nexsus Cyber Solutions, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages resulting from your access to or use of the services.
                                </p>
                            </section>
                        </GlassCard>
                    </div>
                </Container>
            </main>
        </PageTransition>
    );
};

export default Terms;