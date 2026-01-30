import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import { Calendar, User, ArrowRight } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';
import MatrixRain from '../components/ui/MatrixRain';
import ScrollReveal from '../components/ui/ScrollReveal';

const BlogPost = ({ image, title, excerpt, date, author, category, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: delay < 0.2 ? -200 : 200, rotateX: -10 }}
        whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.8, type: "spring", stiffness: 100 }}
        whileHover={{
            y: -10,
            scale: 1.02,
            rotateX: 5,
            rotateY: 5,
            transition: { duration: 0.3, type: "spring", stiffness: 300 }
        }}
        className="bg-primary border border-white/5 rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-300 group preserve-3d perspective-1000 cursor-pointer float-3d-simple"
    >
        {/* 3D Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 group-hover:from-accent/10 group-hover:via-accent/5 group-hover:to-accent/15 transition-all duration-500"></div>

        <div className="h-48 overflow-hidden relative">
            <motion.img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
            />
            <div className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider pulse-3d-simple">
                {category}
            </div>

            {/* Floating particles over image */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(2)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white/30 rounded-full"
                        animate={{
                            x: [Math.random() * 100, Math.random() * 100],
                            y: [Math.random() * 100, Math.random() * 100 - 50],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 4 + i,
                            repeat: Infinity,
                            delay: i * 0.7,
                            ease: "easeOut"
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>
        </div>

        <div className="p-6 relative z-10">
            <div className="flex items-center gap-4 text-sm text-textSecondary mb-4">
                <motion.span
                    className="flex items-center gap-1 tilt-3d-hover"
                    whileHover={{ color: "#60A5FA", transition: { duration: 0.2 } }}
                >
                    <Calendar className="w-4 h-4" /> {date}
                </motion.span>
                <motion.span
                    className="flex items-center gap-1 tilt-3d-hover"
                    whileHover={{ color: "#60A5FA", transition: { duration: 0.2 } }}
                >
                    <User className="w-4 h-4" /> {author}
                </motion.span>
            </div>

            <motion.h3
                className="text-xl font-bold text-white mb-3 relative"
                whileHover={{
                    translateZ: 15,
                    textShadow: "0 2px 8px rgba(96, 165, 250, 0.4)",
                    color: "#60A5FA",
                    transition: { duration: 0.3 }
                }}
            >
                {title}
                {/* Animated underline */}
                <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-accent"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                />
            </motion.h3>

            <motion.p
                className="text-textSecondary mb-6 line-clamp-2"
                whileHover={{
                    translateZ: 8,
                    color: "#e2e8f0",
                    transition: { duration: 0.3 }
                }}
            >
                {excerpt}
            </motion.p>

            <button className="text-white text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all button-hover-lift button-hover-slide group relative overflow-hidden">
                <span className="relative z-10">Read Article</span>
                <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
        </div>

        {/* Corner decorations */}
        <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-accent/30 group-hover:border-accent transition-colors duration-300"></div>
        <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-accent/30 group-hover:border-accent transition-colors duration-300"></div>
        <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-accent/30 group-hover:border-accent transition-colors duration-300"></div>
        <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-accent/30 group-hover:border-accent transition-colors duration-300"></div>
    </motion.div>
);

const Blog = () => {
    const posts = [
        {
            title: "The Rise of AI-Powered Cyber Attacks",
            excerpt: "How artificial intelligence is reshaping the threat landscape and what businesses need to do to stay ahead of automated attacks.",
            date: "Oct 15, 2025",
            author: "Sarah Connor",
            category: "Threat Intelligence",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Zero Trust Architecture: A Guide",
            excerpt: "Moving beyond perimeter security. Why 'never trust, always verify' is becoming the new standard for enterprise security.",
            date: "Oct 12, 2025",
            author: "John Rees",
            category: "Security Strategy",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Remote Work Security Best Practices",
            excerpt: "Securing the distributed workforce. Essential tools and protocols for maintaining data integrity outside the office.",
            date: "Oct 08, 2025",
            author: "Elena Fisher",
            category: "Enterprise",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
        }
    ];

    return (
        <PageTransition>
            <main className="pt-24 pb-20 relative bg-3d-particles">
                <MatrixRain opacity={0.08} speed={70} />
                <Container>
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, x: -150, rotateX: -5 }}
                    animate={{ opacity: 1, x: 0, rotateX: 0 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                >
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold text-white mb-6 relative"
                        whileHover={{
                            translateZ: 20,
                            textShadow: "0 4px 12px rgba(96, 165, 250, 0.3)",
                            transition: { duration: 0.3 }
                        }}
                    >
                        Latest <span className="text-accent depth-3d inline-block">Insights</span>
                    </motion.h1>
                    <motion.p
                        className="text-textSecondary text-lg tilt-3d-hover"
                        whileHover={{
                            translateZ: 10,
                            color: "#e2e8f0",
                            transition: { duration: 0.3 }
                        }}
                    >
                        Expert analysis, news, and trends from the world of cybersecurity.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.8 }}
                >
                    {posts.map((post, index) => (
                        <BlogPost key={index} {...post} delay={index * 0.1} />
                    ))}
                </motion.div>
            </Container>
        </main>
        </PageTransition>
    );
};

export default Blog;
