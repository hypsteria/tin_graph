import React from 'react';

const yGridStyles = {
	'stroke': 'rgba(228,228,228,1)',
	'strokeWidth': 1,
	'shapeRendering': 'crispEdges', 
}

const Grid = () => {
	let arr = [1, 68, 136, 202, 270, 339];
	let key = 0;

	let lines = arr.map((point) => (<line key={key++} x1="0" x2="920" y1={point} y2={point}></line>));
	
	return (
		<g transform="translate(50,20)">
			<g style={yGridStyles}>
				{lines}
			</g>
		</g>
	);
};

export default Grid;