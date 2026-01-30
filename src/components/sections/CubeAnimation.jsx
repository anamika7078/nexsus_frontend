import React from 'react';
import './CubeAnimation.css';

const CubeAnimation = () => {
    const cubes = Array.from({ length: 100 }, (_, i) => i + 1);

    return (
        <div className="cube-container">
            <div className="cube-inner">
                {cubes.map((i) => (
                    <figure key={i} className={`cube-top cube-top-${i}`}>
                        <figure className="cube-face cube-face-1"></figure>
                        <figure className="cube-face cube-face-2"></figure>
                        <figure className="cube-face cube-face-3"></figure>
                        <figure className="cube-face cube-face-4"></figure>
                        <figure className="cube-face cube-face-5"></figure>
                    </figure>
                ))}
            </div>
        </div>
    );
};

export default CubeAnimation;
