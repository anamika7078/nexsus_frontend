import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Shield, Mail, ArrowRight, ArrowLeft, Key, CheckCircle2
} from 'lucide-react';
import { motion } from 'framer-motion';
import { apiFetch } from '../utils/api';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await apiFetch('/api/auth/forgot-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });

            const data = await res.json();
            if (data.success || res.status === 200) {
                setSubmitted(true);
            } else {
                alert(data.message || 'Something went wrong');
            }
        } catch (error) {
            console.error('Forgot password error:', error);
            // Even if it fails, we usually show success for security to prevent email enumeration
            setSubmitted(true);
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
                        Securing <br />
                        <span className="text-accent underline decoration-indigo-500/30 font-black">Your Access</span>
                    </h1>
                    <p className="text-textSecondary text-xl mb-12 leading-relaxed">
                        Don't worry, even the strongest shields need a reset sometimes. We'll help you get back to your dashboard in no time.
                    </p>

                    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4">
                        <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400">
                            <Key size={24} />
                        </div>
                        <p className="text-sm text-textSecondary font-medium">Safe & encrypted recovery process.</p>
                    </div>
                </div>
            </motion.div>

            {/* Right Panel - Reset Form */}
            <div className="flex-1 flex items-center justify-center p-8 bg-[#0a0b10]">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-md space-y-8"
                >
                    {!submitted ? (
                        <>
                            <div className="text-center">
                                <h2 className="text-3xl font-black mb-2 tracking-tight">Forgot Password?</h2>
                                <p className="text-textSecondary">No worries, we'll send you reset instructions.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
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

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-accent hover:bg-accent/90 disabled:opacity-50 text-white font-black py-4 rounded-xl shadow-xl shadow-accent/20 transition-all transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-3 uppercase tracking-wider"
                                >
                                    {loading ? "Sending..." : "Reset Password"}
                                    {!loading && <ArrowRight size={20} />}
                                </button>
                            </form>
                        </>
                    ) : (
                        <div className="text-center space-y-6">
                            <div className="flex justify-center">
                                <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500">
                                    <CheckCircle2 size={48} />
                                </div>
                            </div>
                            <h2 className="text-3xl font-black tracking-tight">Check your email</h2>
                            <p className="text-textSecondary leading-relaxed">
                                We've sent password reset instructions to <br />
                                <span className="text-white font-bold">{email}</span>
                            </p>
                            <button
                                onClick={() => navigate('/admin/login')}
                                className="w-full bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold py-4 rounded-xl transition-all"
                            >
                                Back to Login
                            </button>
                        </div>
                    )}

                    <div className="text-center pt-4">
                        <button
                            type="button"
                            onClick={() => navigate('/admin/login')}
                            className="flex items-center gap-2 mx-auto text-textSecondary hover:text-white transition-colors font-bold text-sm"
                        >
                            <ArrowLeft size={16} />
                            Back to Login
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ForgotPassword;
