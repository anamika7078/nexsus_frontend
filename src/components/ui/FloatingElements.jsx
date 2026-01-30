import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements = ({ density = 'medium' }) => {
    const elementCount = {
        low: 5,
        medium: 10,
        high: 15
    }[density];

    const generateElements = () => {
        const elements = [];
        for (let i = 0; i < elementCount; i++) {
            const size = Math.random() * 60 + 20;
            const isCircle = Math.random() > 0.5;
            const colors = ['accent', 'secondary', 'purple-500', 'blue-400', 'indigo-500'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            elements.push({
                id: i,
                size,
                color,
                isCircle,
                initialX: Math.random() * 100,
                initialY: Math.random() * 100,
                duration: Math.random() * 10 + 8,
                delay: Math.random() * 2,
                moveX: (Math.random() - 0.5) * 100,
                moveY: (Math.random() - 0.5) * 100,
            });
        }
        return elements;
    };

    const elements = generateElements();

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {elements.map((el) => (
                <motion.div
                    key={el.id}
                    className={`absolute ${el.isCircle ? 'rounded-full' : 'rounded-lg'} bg-${el.color}/10 blur-xl`}
                    style={{
                        width: el.size,
                        height: el.size,
                        left: `${el.initialX}%`,
                        top: `${el.initialY}%`,
                    }}
                    animate={{
                        x: [0, el.moveX, 0],
                        y: [0, el.moveY, 0],
                        scale: [1, 1.2, 1],
                        rotate: el.isCircle ? 0 : [0, 360],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: el.duration,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: el.delay,
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingElements;
