import React from 'react';
import Container from '../components/layout/Container';

const Terms = () => {
    return (
        <main className="pt-24 pb-20">
            <Container>
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
                    <div className="prose prose-invert prose-lg text-textSecondary">
                        <p className="mb-6">Last updated: January 2026</p>

                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
                        <p className="mb-4">
                            By accessing or using our website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Use of Services</h2>
                        <p className="mb-4">
                            You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Intellectual Property</h2>
                        <p className="mb-4">
                            The content, features, and functionality of our services are owned by Nexsus Cyber Solutions and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Limitation of Liability</h2>
                        <p className="mb-4">
                            In no event shall Nexsus Cyber Solutions, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.
                        </p>
                    </div>
                </div>
            </Container>
        </main>
    );
};

export default Terms;
