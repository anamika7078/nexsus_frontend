import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
    initial: {
        opacity: 0,
        scale: 0.98,
        rotateX: 5,
        filter: 'blur(10px)',
    },
    enter: {
        opacity: 1,
        scale: 1,
        rotateX: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.6,
            ease: [0.43, 0.13, 0.23, 0.96],
        },
    },
    exit: {
        opacity: 0,
        scale: 1.02,
        rotateX: -5,
        filter: 'blur(10px)',
        transition: {
            duration: 0.4,
            ease: [0.43, 0.13, 0.23, 0.96],
        },
    },
};

const PageTransition = ({ children, className = '' }) => {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
