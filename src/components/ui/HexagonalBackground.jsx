import React from 'react';
import { motion } from 'framer-motion';

const HexagonalBackground = ({ opacity = 0.1 }) => {
    const hexagons = [];
    const rows = 8;
    const cols = 12;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            hexagons.push({
                id: `hex-${row}-${col}`,
                x: col * 80 + (row % 2 === 0 ? 0 : 40),
                y: row * 70,
                delay: (row + col) * 0.05,
            });
        }
    }

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            <svg className="w-full h-full" style={{ opacity }}>
                <defs>
                    <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#6FA8FF" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#3F5E96" stopOpacity="0.1" />
                    </linearGradient>
                </defs>

                {hexagons.map((hex) => (
                    <motion.g
                        key={hex.id}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                            opacity: [0.2, 0.5, 0.2],
                            scale: [0.9, 1, 0.9],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: hex.delay,
                            ease: 'easeInOut',
                        }}
                    >
                        <polygon
                            points="30,0 60,17.3 60,52 30,69.3 0,52 0,17.3"
                            fill="url(#hexGradient)"
                            stroke="#6FA8FF"
                            strokeWidth="1"
                            transform={`translate(${hex.x}, ${hex.y})`}
                        />
                    </motion.g>
                ))}
            </svg>
        </div>
    );
};

export default HexagonalBackground;
