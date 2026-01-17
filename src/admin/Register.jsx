import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Shield, Mail, Lock, Eye, EyeOff,
    ArrowRight, User, Chrome, Apple, Key
} from 'lucide-react';
import { motion } from 'framer-motion';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secretKey, setSecretKey] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password, secretKey })
            });

            const data = await res.json();

            if (data.success) {
                // Navigate directly to login on success
                navigate('/admin/login');
            } else {
                alert(data.message || 'Registration failed');
            }
        } catch (error) {
            console.error('Registration error:', error);
            alert('Failed to connect to authentication server');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-[#05060a] text-white">
            {/* Left Panel - Branding */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="hidden lg:flex w-[45%] bg-gradient-to-br from-[#0a0b10] via-[#0f1122] to-[#1e1b4b] p-12 flex-col justify-center relative overflow-hidden"
            >
                <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-accent/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-indigo-500/10 rounded-full blur-[150px]" />

                <div className="relative z-10 max-w-md mx-auto w-full">
                    <div className="flex items-center gap-3 mb-16">
                        <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center shadow-2xl shadow-accent/40 rotate-12">
                            <Shield className="text-white -rotate-12" size={28} />
                        </div>
                        <h2 className="text-4xl font-black tracking-tighter">Nexsus</h2>
                    </div>

                    <h1 className="text-6xl font-extrabold mb-8 leading-tight">
                        Join the <br />
                        <span className="text-accent underline decoration-indigo-500/30 font-black">Elite Circle</span>
                    </h1>
                    <p className="text-textSecondary text-xl mb-12 leading-relaxed">
                        Create your account today and unlock the full potential of advanced business intelligence and cybersecurity analytics.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                            <h4 className="font-bold text-accent mb-1">100%</h4>
                            <p className="text-[10px] text-textSecondary uppercase tracking-widest font-black">Security</p>
                        </div>
                        <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                            <h4 className="font-bold text-indigo-400 mb-1">24/7</h4>
                            <p className="text-[10px] text-textSecondary uppercase tracking-widest font-black">Monitoring</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Right Panel - Register Form */}
            <div className="flex-1 flex items-center justify-center p-8 bg-[#0a0b10]">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-md space-y-8"
                >
                    <div className="text-center">
                        <h2 className="text-3xl font-black mb-2 tracking-tight">Create Account</h2>
                        <p className="text-textSecondary">Sign up to get started with Nexsus dashboard.</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 rounded-xl py-3 px-4 hover:bg-white/10 transition-all font-medium text-sm">
                            <Chrome size={18} />
                            Google
                        </button>
                        <button className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 rounded-xl py-3 px-4 hover:bg-white/10 transition-all font-medium text-sm">
                            <Apple size={18} />
                            Apple
                        </button>
                    </div>

                    <div className="relative flex items-center justify-center">
                        <div className="w-full border-t border-white/5" />
                        <span className="absolute bg-[#0a0b10] px-4 text-xs font-bold text-textSecondary uppercase tracking-widest">Or</span>
                    </div>

                    <form onSubmit={handleRegister} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-textSecondary px-1">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-textSecondary" size={18} />
                                <input
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="John Doe"
                                    className="w-full bg-[#12141d] border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-accent transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-textSecondary px-1">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-textSecondary" size={18} />
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="your@email.com"
                                    className="w-full bg-[#12141d] border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-accent transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-textSecondary px-1">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-textSecondary" size={18} />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full bg-[#12141d] border border-white/10 rounded-xl pl-12 pr-12 py-4 text-white focus:outline-none focus:border-accent transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-textSecondary hover:text-white p-1"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-textSecondary px-1">Registration Access Key</label>
                            <div className="relative">
                                <Key className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400" size={18} />
                                <input
                                    type="password"
                                    required
                                    value={secretKey}
                                    onChange={(e) => setSecretKey(e.target.value)}
                                    placeholder="Enter Master Key"
                                    className="w-full bg-[#12141d] border border-indigo-500/20 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-indigo-500 transition-all font-mono"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-accent hover:bg-accent/90 disabled:opacity-50 text-white font-black py-4 rounded-xl shadow-xl shadow-accent/20 transition-all transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-3 uppercase tracking-wider"
                        >
                            {loading ? "Creating Account..." : "Create Account"}
                            {!loading && <ArrowRight size={20} />}
                        </button>

                        <div className="text-center">
                            <p className="text-textSecondary text-sm">
                                Already have an account? {' '}
                                <button
                                    type="button"
                                    onClick={() => navigate('/admin/login')}
                                    className="text-accent font-black hover:underline"
                                >
                                    Login
                                </button>
                            </p>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Register;
