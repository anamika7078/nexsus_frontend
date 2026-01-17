import React, { useState } from 'react';
import Container from '../components/layout/Container';
import Button from '../components/ui/Button';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { apiFetch } from '../utils/api';

import SEO from '../components/ui/SEO';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(true);

        try {
            const res = await apiFetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (data.success) {
                setFormData({ name: '', email: '', phone: '', message: '' });
                alert("Message sent successfully!");
            } else {
                alert(data.message || "Failed to send message.");
            }
        } catch (error) {
            console.error("Error sending message:", error);
            alert("Failed to connect to server.");
        } finally {
            setSubmitted(false);
        }
    };



    return (
        <div className="pt-32 pb-20 min-h-screen">
            <SEO title="Contact Us" description="Get in touch with Nexsus Cyber Solutions. Our team is ready to assist you with your security needs." />
            <Container>
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl font-bold text-white mb-6">Let's Secure <br /><span className="text-accent">Your Future</span></h1>
                        <p className="text-textSecondary text-lg mb-12">
                            Ready to upgrade your security infrastructure? Our team of experts is ready to assist you.
                        </p>

                        <div className="space-y-8">
                            {[
                                { icon: MapPin, title: "Visit Us", content: "123 Cyber Avenue, Tech District, NY 10001" },
                                { icon: Phone, title: "Call Us", content: "+1 (555) 123-4567" },
                                { icon: Mail, title: "Email Us", content: "support@Nexsuscyber.com" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 p-6 bg-white/5 rounded-xl border border-white/10 hover:border-accent/40 transition-colors">
                                    <div className="bg-primary p-3 rounded-lg border border-white/10">
                                        <item.icon className="w-6 h-6 text-accent" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                                        <p className="text-textSecondary">{item.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white/5 backdrop-blur-md border border-white/10 p-8 lg:p-12 rounded-2xl relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl pointer-events-none"></div>
                        <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div>
                                <label className="block text-sm text-textSecondary mb-2">Full Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-primary/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent focus:outline-none transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-textSecondary mb-2">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-primary/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent focus:outline-none transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-textSecondary mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full bg-primary/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent focus:outline-none transition-colors"
                                    placeholder="+1 (555) 000-0000"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-textSecondary mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-primary/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent focus:outline-none transition-colors"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>
                            <Button type="submit" variant="primary" className="w-full flex justify-center gap-2">
                                {submitted ? 'Sending...' : (
                                    <>Send Message <Send className="w-4 h-4" /></>
                                )}
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </Container>
        </div>
    );
};

export default Contact;
