import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from './Container';
import Button from '../ui/Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Features', path: '/features' },
        { name: 'Blog', path: '/blog' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
            <Container className="flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-white">
                    <Shield className="w-8 h-8 text-accent" />
                    <span>Nexsus</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`relative transition-colors text-sm font-medium ${location.pathname === link.path
                                ? 'text-accent'
                                : 'text-textSecondary hover:text-white'
                                }`}
                        >
                            {link.name}
                            {location.pathname === link.path && (
                                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full" />
                            )}
                        </Link>
                    ))}
                    <Link to="/contact">
                        <Button variant="primary" className="px-5 py-2 text-sm">Get Started</Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </Container>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-primary/95 backdrop-blur-lg border-b border-white/10 p-6 md:hidden flex flex-col gap-4 shadow-xl"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`block text-lg font-medium transition-colors ${location.pathname === link.path
                                    ? 'text-accent'
                                    : 'text-textSecondary hover:text-white'
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/contact" onClick={() => setIsOpen(false)}>
                            <Button className="w-full mt-2">Get Started</Button>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
