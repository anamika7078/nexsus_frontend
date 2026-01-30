import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypewriterText = ({ 
    text, 
    speed = 100, 
    delay = 0, 
    className = '',
    showCursor = true,
    onComplete 
}) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex === 0) {
            const initialDelay = setTimeout(() => {
                setCurrentIndex(1);
            }, delay);
            return () => clearTimeout(initialDelay);
        }

        if (currentIndex <= text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(text.slice(0, currentIndex));
                setCurrentIndex(currentIndex + 1);
            }, speed);

            return () => clearTimeout(timeout);
        } else if (onComplete) {
            onComplete();
        }
    }, [currentIndex, text, speed, delay, onComplete]);

    return (
        <span className={className}>
            {displayedText}
            {showCursor && currentIndex <= text.length && (
                <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                    className="inline-block ml-1 w-0.5 h-[1em] bg-accent"
                />
            )}
        </span>
    );
};

export default TypewriterText;
