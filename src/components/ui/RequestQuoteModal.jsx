import React, { useState } from 'react';
import { X, Loader, CheckCircle } from 'lucide-react';
import Button from './Button';
import Select from './Select';
import { apiFetch } from '../../utils/api';

const RequestQuoteModal = ({ isOpen, onClose, selectedService = '' }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: selectedService,
        budget: '',
        timeline: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const serviceOptions = [
        'Penetration Testing',
        'SOC Monitoring',
        'Identity & Access Management',
        'Cloud Security',
        'Disaster Recovery',
        'Compliance Audits',
        'Other / Multiple Services'
    ];

    const budgetOptions = [
        'Under $5,000',
        '$5,000 - $10,000',
        '$10,000 - $25,000',
        '$25,000 - $50,000',
        '$50,000+',
        'Not Sure'
    ];

    const timelineOptions = [
        'ASAP',
        '1-3 Months',
        '3-6 Months',
        '6+ Months',
        'Flexible'
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSelectChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await apiFetch('/api/quotes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (res.ok) {
                setSubmitted(true);
                // Reset form after 3 seconds and close
                setTimeout(() => {
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        service: '',
                        budget: '',
                        timeline: '',
                        message: ''
                    });
                    setSubmitted(false);
                    onClose();
                }, 3000);
            } else {
                setError(data.message || 'Failed to submit quote request');
            }
        } catch (error) {
            console.error('Error submitting quote:', error);
            setError('Failed to submit quote request. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleClose = () => {
        if (!loading && !submitted) {
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                service: '',
                budget: '',
                timeline: '',
                message: ''
            });
            setError('');
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={handleClose}
            />

            {/* Modal Content */}
            <div className="relative bg-[#0f111a] border border-white/10 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                    <h3 className="text-2xl font-bold text-white">Request a Quote</h3>
                    <button
                        onClick={handleClose}
                        disabled={loading || submitted}
                        className="text-textSecondary hover:text-white transition-all duration-300 p-2 hover:bg-white/5 rounded-lg disabled:opacity-50 button-hover-lift hover:rotate-90 transform"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
                    {submitted ? (
                        <div className="text-center py-8">
                            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                            <h4 className="text-2xl font-bold text-white mb-2">Quote Request Submitted!</h4>
                            <p className="text-textSecondary">Thank you for your interest. We'll get back to you shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {error && (
                                <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl">
                                    {error}
                                </div>
                            )}

                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-textSecondary mb-2">
                                        Full Name <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-textSecondary focus:outline-none focus:border-accent transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-textSecondary mb-2">
                                        Email Address <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-textSecondary focus:outline-none focus:border-accent transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-textSecondary mb-2">
                                        Phone Number <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-textSecondary focus:outline-none focus:border-accent transition-colors"
                                        placeholder="+1 (555) 123-4567"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-textSecondary mb-2">
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-textSecondary focus:outline-none focus:border-accent transition-colors"
                                        placeholder="Your Company"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-textSecondary mb-2">
                                    Service Required <span className="text-red-400">*</span>
                                </label>
                                <Select
                                    options={serviceOptions}
                                    value={formData.service}
                                    onChange={(val) => handleSelectChange('service', val)}
                                    placeholder="Select a service"
                                    className="z-[40]"
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="relative z-[30]">
                                    <label className="block text-sm font-medium text-textSecondary mb-2">
                                        Estimated Budget
                                    </label>
                                    <Select
                                        options={budgetOptions}
                                        value={formData.budget}
                                        onChange={(val) => handleSelectChange('budget', val)}
                                        placeholder="Select budget range"
                                    />
                                </div>

                                <div className="relative z-[30]">
                                    <label className="block text-sm font-medium text-textSecondary mb-2">
                                        Project Timeline
                                    </label>
                                    <Select
                                        options={timelineOptions}
                                        value={formData.timeline}
                                        onChange={(val) => handleSelectChange('timeline', val)}
                                        placeholder="Select timeline"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-textSecondary mb-2">
                                    Additional Details
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-textSecondary focus:outline-none focus:border-accent transition-colors resize-none"
                                    placeholder="Tell us more about your requirements..."
                                />
                            </div>

                            <div className="flex gap-4 pt-4 relative z-10">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={handleClose}
                                    disabled={loading}
                                    className="flex-1"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    disabled={loading}
                                    className="flex-1 flex items-center justify-center gap-2"
                                >
                                    {loading ? (
                                        <>
                                            <Loader className="w-4 h-4 animate-spin" />
                                            Submitting...
                                        </>
                                    ) : (
                                        'Submit Quote Request'
                                    )}
                                </Button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RequestQuoteModal;
