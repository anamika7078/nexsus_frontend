import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Shield, Mail, Lock, Eye, EyeOff,
    ArrowRight, Chrome, Apple, Home
} from 'lucide-react';
import { motion } from 'framer-motion';
import { apiFetch } from '../utils/api';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await apiFetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();

            if (data.success) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('isAdmin', 'true');
                localStorage.setItem('user', JSON.stringify(data.user));
                navigate('/admin/dashboard');
            } else {
                alert(data.message || 'Login failed');
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('Failed to connect to authentication server');
        }
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-[#05060a] text-white relative">
            {/* Back to Home Button */}
            <button
                onClick={() => navigate('/')}
                className="absolute top-8 left-8 z-50 flex items-center gap-2 text-textSecondary hover:text-white transition-all group px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full border border-white/10"
            >
                <Home size={18} className="group-hover:scale-110 transition-transform" />
                <span className="font-bold text-sm tracking-wide">Back to Home</span>
            </button>

            {/* Left Panel - Visual Branding */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="hidden lg:flex w-[45%] bg-gradient-to-br from-[#0a0b10] via-[#0f1122] to-[#1e1b4b] p-12 flex-col justify-center relative overflow-hidden"
            >
                {/* Decorative background elements */}
                <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-accent/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-indigo-500/10 rounded-full blur-[150px]" />

                <div className="relative z-10 max-w-md mx-auto w-full">
                    {/* Logo Section */}
                    <div className="flex items-center gap-3 mb-16">
                        <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center shadow-2xl shadow-accent/40 rotate-12">
                            <Shield className="text-white -rotate-12" size={28} />
                        </div>
                        <h2 className="text-4xl font-black tracking-tighter">Nexsus</h2>
                    </div>

                    <h1 className="text-6xl font-extrabold mb-8 leading-tight">
                        Command <br />
                        <span className="text-accent underline decoration-indigo-500/30 font-black">Your Data</span>
                    </h1>
                    <p className="text-textSecondary text-xl mb-12 leading-relaxed">
                        Access your advanced analytics dashboard and take control of your business intelligence with precision tools.
                    </p>

                    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
                        <div className="flex items-center gap-4 mb-4 text-accent">
                            <Shield size={24} />
                            <span className="font-black uppercase tracking-widest text-sm">Secure Portal</span>
                        </div>
                        <p className="text-sm text-textSecondary italic">"Intelligence is the ability to adapt to change."</p>
                    </div>
                </div>
            </motion.div>

            {/* Right Panel - Login Form */}
            <div className="flex-1 flex items-center justify-center p-8 bg-[#0a0b10]">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-md space-y-8"
                >
                    <div className="text-center">
                        <h2 className="text-3xl font-black mb-2 tracking-tight">Sign in to Nexsus</h2>
                        <p className="text-textSecondary">Enter your credentials to access the command center.</p>
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

                    <form onSubmit={handleLogin} className="space-y-6">
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

                        <div className="flex items-center justify-between px-1">
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={() => setRememberMe(!rememberMe)}
                                    className="w-4 h-4 rounded border-white/10 bg-[#12141d] text-accent focus:ring-accent checked:bg-accent"
                                />
                                <span className="text-sm text-textSecondary group-hover:text-white transition-colors">Remember me</span>
                            </label>
                            <button
                                type="button"
                                onClick={() => navigate('/admin/forgot-password')}
                                className="text-sm font-bold text-accent/80 hover:text-accent transition-colors underline decoration-accent/20"
                            >
                                Forget Password?
                            </button>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-accent hover:bg-accent/90 text-white font-black py-4 rounded-xl shadow-xl shadow-accent/20 transition-all transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-3 uppercase tracking-wider"
                        >
                            Sign In
                            <ArrowRight size={20} />
                        </button>

                        <div className="text-center">
                            <p className="text-textSecondary text-sm">
                                Don't have an account? {' '}
                                <button
                                    type="button"
                                    onClick={() => navigate('/admin/register')}
                                    className="text-accent font-black hover:underline"
                                >
                                    Sign up
                                </button>
                            </p>
                        </div>
                    </form>

                    <div className="p-4 bg-accent/5 rounded-xl border border-white/5 text-[10px] text-textSecondary/50 font-mono">
                        <span className="text-accent/30 lowercase tracking-widest block mb-1">DEV_CREDENTIALS</span>
                        admin@gmail.com / Admin@123
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Login;
