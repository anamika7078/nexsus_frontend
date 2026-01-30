import React from 'react';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Stats from '../components/sections/Stats';
import Process from '../components/sections/Process';
import ServicesPreview from '../components/sections/ServicesPreview';
import FAQ from '../components/sections/FAQ';
import AnimatedBackground from '../components/ui/AnimatedBackground';
import MatrixRain from '../components/ui/MatrixRain';
import PageTransition from '../components/ui/PageTransition';
import SEO from '../components/ui/SEO';

const Home = () => {
    return (
        <PageTransition>
            <main className="min-h-screen relative">
                <MatrixRain opacity={0.12} speed={60} />
                <AnimatedBackground />
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
        </PageTransition>
    );
};

export default Home;
