import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { 
        opacity: 0, 
        y: 50,
        rotateX: -10,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.43, 0.13, 0.23, 0.96],
        },
    },
};

const ScrollReveal = ({ children, className = '', staggerDelay = 0.1, once = true }) => {
    const customContainer = {
        ...containerVariants,
        visible: {
            ...containerVariants.visible,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: 0.1,
            },
        },
    };

    return (
        <motion.div
            variants={customContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount: 0.2 }}
            className={className}
        >
            {React.Children.map(children, (child) => (
                <motion.div variants={itemVariants}>
                    {child}
                </motion.div>
            ))}
        </motion.div>
    );
};

export default ScrollReveal;
