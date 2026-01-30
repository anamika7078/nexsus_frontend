import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import Button from '../components/ui/Button';
import PageTransition from '../components/ui/PageTransition';
import MatrixRain from '../components/ui/MatrixRain';
import GlassCard from '../components/ui/GlassCard';
import GlowText from '../components/ui/GlowText';
import SEO from '../components/ui/SEO';
import { Briefcase, MapPin, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

const JobCard = ({ title, department, location, type, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.8, type: "spring" }}
    >
        <GlassCard className="p-6 md:p-8 hover:bg-accent/5 hover:border-accent/40 transition-all duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div>
                    <h3 className="text-2xl font-black text-white mb-3 tracking-tight group-hover:text-accent transition-colors">{title}</h3>
                    <div className="flex flex-wrap gap-6 text-sm text-textSecondary font-bold">
                        <span className="flex items-center gap-2"><Briefcase className="w-4 h-4 text-accent" /> {department}</span>
                        <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> {location}</span>
                        <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-accent" /> {type}</span>
                    </div>
                </div>
                <Button variant="primary" className="shrink-0 px-8 py-4 group">
                    Apply Now <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Button>
            </div>
        </GlassCard>
    </motion.div>
);

const Careers = () => {
    const jobs = [
        {
            title: "Senior Security Analyst",
            department: "Operations",
            location: "New York, NY (Hybrid)",
            type: "Full-time"
        },
        {
            title: "Ethical Hacker / Penetration Tester",
            department: "Security",
            location: "Remote",
            type: "Full-time"
        },
        {
            title: "Security Software Engineer",
            department: "Engineering",
            location: "San Francisco, CA",
            type: "Full-time"
        },
        {
            title: "Sales Development Representative",
            department: "Sales",
            location: "London, UK",
            type: "Full-time"
        }
    ];

    return (
        <PageTransition>
            <main className="pt-32 pb-20 relative bg-3d-particles min-h-screen">
                <MatrixRain opacity={0.1} speed={75} />
                <SEO title="Careers" description="Help us build a safer digital future. Join our team of cybersecurity experts." />
                
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-24 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-20 h-20 rounded-3xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mx-auto mb-8 shadow-glow"
                        >
                            <ShieldCheck size={40} />
                        </motion.div>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
                            Join the <GlowText className="text-accent">Mission</GlowText>
                        </h1>
                        <p className="text-textSecondary text-xl leading-relaxed mb-12">
                            Help us build a safer digital future. We are looking for passionate individuals to join our team of experts.
                        </p>
                        
                        <div className="grid grid-cols-3 gap-8 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
                            <div>
                                <div className="text-4xl font-black text-white tracking-tighter mb-1">50+</div>
                                <div className="text-xs font-bold text-accent uppercase tracking-widest">Team Members</div>
                            </div>
                            <div>
                                <div className="text-4xl font-black text-white tracking-tighter mb-1">12</div>
                                <div className="text-xs font-bold text-accent uppercase tracking-widest">Global Offices</div>
                            </div>
                            <div>
                                <div className="text-4xl font-black text-white tracking-tighter mb-1">4.9</div>
                                <div className="text-xs font-bold text-accent uppercase tracking-widest">Employee Rating</div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-6 relative z-10">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-accent/30" />
                            <h2 className="text-2xl font-black text-white tracking-tight uppercase">Open Positions</h2>
                            <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-accent/30" />
                        </div>
                        {jobs.map((job, index) => (
                            <JobCard key={index} {...job} delay={index * 0.1} />
                        ))}
                    </div>
                </Container>
            </main>
        </PageTransition>
    );
};

export default Careers;