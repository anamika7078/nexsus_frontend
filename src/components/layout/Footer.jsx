import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Twitter, Linkedin, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import Container from './Container';

const Footer = () => {
    return (
        <footer className="bg-primary pt-20 pb-10 border-t border-white/10">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-white">
                            <Shield className="w-8 h-8 text-accent" />
                            <span>Nexsus</span>
                        </Link>
                        <p className="text-textSecondary text-sm leading-relaxed">
                            Next-gen cyber security solutions for modern businesses. Protecting your digital assets with advanced AI technology.
                        </p>
                        <div className="flex gap-4 pt-2">
                            {[Twitter, Linkedin, Facebook].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-textSecondary hover:bg-accent hover:text-white transition-all">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {['About Us', 'Services', 'Case Studies', 'Blog', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link to="/" className="text-textSecondary hover:text-accent transition-colors text-sm">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Services</h4>
                        <ul className="space-y-3">
                            {['Threat Detection', 'Network Security', 'Cloud Protection', 'Audits & Compliance', 'Incident Response'].map((item) => (
                                <li key={item}>
                                    <Link to="/" className="text-textSecondary hover:text-accent transition-colors text-sm">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-textSecondary text-sm">
                                <MapPin className="w-5 h-5 text-accent shrink-0" />
                                <span>123 Cyber Avenue,<br />Tech District, NY 10001</span>
                            </li>
                            <li className="flex items-center gap-3 text-textSecondary text-sm">
                                <Phone className="w-5 h-5 text-accent shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3 text-textSecondary text-sm">
                                <Mail className="w-5 h-5 text-accent shrink-0" />
                                <span>support@Nexsuscyber.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
                    <p>© 2026 Nexsus Cyber Solutions. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link to="/admin/login" className="hover:text-white transition-colors text-accent">Admin Login</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
