import React from 'react';

function ProgressBar({ progress }) {
    const progressBarStyle = {
        width: `${progress}%`,
        height: '20px',
        backgroundColor: '#505EE0',
        textAlign: 'center',
        color: 'white',
        lineHeight: '20px'
    };

    return (
        <div style={{ width: '80%', backgroundColor: '#ddd', borderRadius: '8px' }}>
            <div style={progressBarStyle}>{progress.toFixed(0)}%</div>
        </div>
    );
}

export default ProgressBar;
