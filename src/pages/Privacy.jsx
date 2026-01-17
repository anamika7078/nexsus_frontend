import React from 'react';
import Container from '../components/layout/Container';

const Privacy = () => {
    return (
        <main className="pt-24 pb-20">
            <Container>
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
                    <div className="prose prose-invert prose-lg text-textSecondary">
                        <p className="mb-6">Last updated: January 2026</p>

                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Information We Collect</h2>
                        <p className="mb-4">
                            We collect information you provide directly to us, such as when you fill out a form, request customer support, or communicate with us. This information may include your name, email address, phone number, and any other information you choose to provide.
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. How We Use Your Information</h2>
                        <p className="mb-4">
                            We use the information we collect to provide, maintain, and improve our services, to respond to your comments and questions, and to send you related information, including confirmations, invoices, technical notices, updates, security alerts, and support and administrative messages.
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Data Security</h2>
                        <p className="mb-4">
                            We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Contact Us</h2>
                        <p className="mb-4">
                            If you have any questions about this Privacy Policy, please contact us at privacy@Nexsuscyber.com.
                        </p>
                    </div>
                </div>
            </Container>
        </main>
    );
};

export default Privacy;
