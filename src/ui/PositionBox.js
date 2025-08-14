import React from 'react';

function PositionBox({ element, onClick }) {
    if (!element) return null;
    const { x, y } = element;
    const offsetX = 250;
    const offsetY = 250;
    return (
        <div
            style={{
                position: 'fixed',
                right: 20,
                bottom: 20,
                background: 'rgba(255,255,255,0.9)',
                border: '1px solid #ccc',
                borderRadius: 8,
                padding: '10px 16px',
                fontSize: 18,
                zIndex: 1000,
                cursor: 'pointer' // makes it look clickable
            }}
            onClick={onClick}
            title="Click to edit position"
        >
            <b>Position:</b> X: {Math.round(x) - offsetX}, Y: {Math.round(y) - offsetY}
        </div>
    );
}

export default PositionBox;