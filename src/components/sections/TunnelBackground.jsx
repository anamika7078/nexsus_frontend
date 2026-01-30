import React from 'react';
import './TunnelBackground.css';

const TunnelBackground = () => {
    return (
        <div className="tunnel-scene">
            <div className="tunnel-wrap">
                <div className="tunnel-wall tunnel-wall-right"></div>
                <div className="tunnel-wall tunnel-wall-left"></div>
                <div className="tunnel-wall tunnel-wall-top"></div>
                <div className="tunnel-wall tunnel-wall-bottom"></div>
                <div className="tunnel-wall tunnel-wall-back"></div>
            </div>
            <div className="tunnel-wrap">
                <div className="tunnel-wall tunnel-wall-right"></div>
                <div className="tunnel-wall tunnel-wall-left"></div>
                <div className="tunnel-wall tunnel-wall-top"></div>
                <div className="tunnel-wall tunnel-wall-bottom"></div>
                <div className="tunnel-wall tunnel-wall-back"></div>
            </div>
        </div>
    );
};

export default TunnelBackground;
