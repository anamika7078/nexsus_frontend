import React from 'react';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Stats from '../components/sections/Stats';
import Process from '../components/sections/Process';
import ServicesPreview from '../components/sections/ServicesPreview';
import FAQ from '../components/sections/FAQ';

import SEO from '../components/ui/SEO';

const Home = () => {
    return (
        <main className="min-h-screen">
            <SEO
                title="Home"
                description="Nexsus Cyber Solutions - Advanced AI-driven protection for modern businesses. Secure your digital infrastructure today."
            />
            <Hero />
            <Features />
            <Stats />
            <Process />
            <ServicesPreview />
            <FAQ />
        </main>
    );
};

export default Home;
