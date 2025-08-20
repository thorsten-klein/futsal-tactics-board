import React, { Component } from 'react';
import PropTypes from 'prop-types';

const PLATE_COLORS = {
    0:   { fill: '#222'}, // black
    1:   { fill: '#fff'}, // white
    2:   { fill: '#ffe600'}, // yellow
    3:   { fill: '#f44336'}, // red
    4:   { fill: '#2196f3'}, // blue
    5:   { fill: '#39d353'}, // green
    6:   { fill: '#ff9800'}, // orange
    7:   { fill: '#9c27b0'}  // purple
};

class Plate extends Component {

    render() {
        const { x, y, id, color } = this.props;
        const outerRadius = 25;
        const innerRadius = 4;

        // Use color map, fallback to yellow if not found
        const plateColor = PLATE_COLORS[color] || PLATE_COLORS[2];

        // Unique mask id for each plate (avoid mask id collision)
        const maskId = `donut-mask-${id || Math.random()}`;

        return (
            <g>
                <circle
                    cx={x}
                    cy={y}
                    r={outerRadius}
                    fill={plateColor.fill}
                    stroke='black'
                    strokeWidth={3}
                    data-ref={id}
                    className='draggable'
                />
                <circle
                    cx={x}
                    cy={y}
                    r={innerRadius}
                    fill="black" // This makes the hole transparent
                    stroke="none"
                    data-ref={id}
                    className='draggable'
                />
            </g>
        );
    }
}

Plate.defaultProps = {
    id: null,
    color: 2,
    x: 0,
    y: 0,
    width: 25,
    height: 25,
}

Plate.propTypes = {
    id: PropTypes.string,
    color: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    strokeWidth: PropTypes.number
}

export default Plate;