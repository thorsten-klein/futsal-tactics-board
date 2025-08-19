import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Pole extends Component {

	render() {
		const { x, y, id, strokeWidth } = this.props;
        const ellipseRx = 30;
        const ellipseRy = 10;
        const poleWidth = 10;
        const poleHeight = 150;

        // The ellipse is at the bottom, centered at (x, y)
        // The stick is a rectangle above the ellipse
        return (
            <g>
                <ellipse
                    cx={x}
                    cy={y}
                    rx={ellipseRx}
                    ry={ellipseRy}
                    fill="yellow"
                    stroke="black"
                    strokeWidth={strokeWidth}
                    data-ref={id}
                />
                <rect
                    x={x - poleWidth / 2}
                    y={y - poleHeight}
                    width={poleWidth}
                    height={poleHeight}
                    fill="yellow"
                    stroke="black"
                    strokeWidth={strokeWidth}
                    data-ref={id}
                />
            </g>
        );
    }
}

Pole.defaultProps = {
	id: null,
	color: -1,
	x: 0,
	y: 0,
	width: 30,
	height: 150,
	strokeWidth: 6
}

Pole.propTypes = {
	id: PropTypes.string,
	color: PropTypes.number,
	x: PropTypes.number,
	y: PropTypes.number,
	width: PropTypes.number,
	height: PropTypes.number,
	strokeWidth: PropTypes.number
}

export default Pole;