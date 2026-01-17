import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogPost = ({ image, title, excerpt, date, author, category, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="bg-primary border border-white/5 rounded-2xl overflow-hidden hover:border-accent/30 transition-colors group"
    >
        <div className="h-48 overflow-hidden relative">
            <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {category}
            </div>
        </div>
        <div className="p-6">
            <div className="flex items-center gap-4 text-sm text-textSecondary mb-4">
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {date}</span>
                <span className="flex items-center gap-1"><User className="w-4 h-4" /> {author}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">{title}</h3>
            <p className="text-textSecondary mb-6 line-clamp-2">{excerpt}</p>
            <button className="text-white text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Read Article <ArrowRight className="w-4 h-4 text-accent" />
            </button>
        </div>
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
        <main className="pt-24 pb-20">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Latest <span className="text-accent">Insights</span>
                    </h1>
                    <p className="text-textSecondary text-lg">
                        Expert analysis, news, and trends from the world of cybersecurity.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <BlogPost key={index} {...post} delay={index * 0.1} />
                    ))}
                </div>
            </Container>
        </main>
    );
};

export default Blog;
