import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CursorFollower = () => {
    const [isHovering, setIsHovering] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 300 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            if (
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.closest('button') ||
                target.closest('a')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Outer ring */}
            <motion.div
                className="fixed pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    left: cursorXSpring,
                    top: cursorYSpring,
                }}
            >
                <motion.div
                    animate={{
                        width: isHovering ? 48 : 32,
                        height: isHovering ? 48 : 32,
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="border-2 border-accent rounded-full"
                />
            </motion.div>

            {/* Inner dot */}
            <motion.div
                className="fixed pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    left: cursorXSpring,
                    top: cursorYSpring,
                }}
            >
                <motion.div
                    animate={{
                        scale: isHovering ? 0 : 1,
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="w-2 h-2 bg-accent rounded-full ml-[15px] mt-[15px]"
                />
            </motion.div>
        </>
    );
};

export default CursorFollower;
