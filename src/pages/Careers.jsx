import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import Button from '../components/ui/Button';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';

const JobCard = ({ title, department, location, type, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6"
    >
        <div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <div className="flex flex-wrap gap-4 text-sm text-textSecondary">
                <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {department}</span>
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {location}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {type}</span>
            </div>
        </div>
        <Button variant="outline" className="shrink-0">
            Apply Now <ArrowRight className="w-4 h-4" />
        </Button>
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
        <main className="pt-24 pb-20">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Join the <span className="text-accent">Mission</span>
                    </h1>
                    <p className="text-textSecondary text-lg mb-8">
                        Help us build a safer digital future. We are looking for passionate individuals to join our team of experts.
                    </p>
                    <div className="flex justify-center gap-12 text-center">
                        <div>
                            <div className="text-3xl font-bold text-white">50+</div>
                            <div className="text-sm text-textSecondary">Team Members</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">12</div>
                            <div className="text-sm text-textSecondary">Global Offices</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">4.9</div>
                            <div className="text-sm text-textSecondary">Employee Rating</div>
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto space-y-4">
                    <h2 className="text-2xl font-bold text-white mb-6">Open Positions</h2>
                    {jobs.map((job, index) => (
                        <JobCard key={index} {...job} delay={index * 0.1} />
                    ))}
                </div>
            </Container>
        </main>
    );
};

export default Careers;
