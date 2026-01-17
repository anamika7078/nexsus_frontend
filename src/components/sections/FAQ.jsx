import React from 'react';
import Container from '../layout/Container';
import Accordion from '../ui/Accordion';

const faqs = [
    {
        title: "How does your AI threat detection work?",
        content: "Our AI scans your network traffic in real-time, learning normal patterns and instantly flagging anomalies that indicate potential cyber attacks, often stopping them before execution."
    },
    {
        title: "Do you provide services for small businesses?",
        content: "Yes, we offer scalable solutions tailored for startups and SMEs, ensuring enterprise-grade security within a manageable budget."
    },
    {
        title: "What industries do you specialize in?",
        content: "We specialize in Fintech, Healthcare, E-commerce, and Government sectors, where compliance and data integrity are critical."
    },
    {
        title: "How quickly can you respond to an incident?",
        content: "Our SOC team is available 24/7 with a guaranteed response time of under 15 minutes for critical incidents."
    }
];

const FAQ = () => {
    return (
        <section className="py-24">
            <Container className="max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
                    <p className="text-textSecondary">Answers to common queries about our security solutions.</p>
                </div>
                <Accordion items={faqs} />
            </Container>
        </section>
    );
};

export default FAQ;
