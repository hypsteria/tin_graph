import React from 'react';
import Legend from './Legend';
import Grid from './Grid';
import Chart from './Chart';
import Tooltip from './Tooltip';

const wrapStyles = {
	'background': 'rgba(246,246,246,1)',
	'width': '1000px',
	'height': '400px',
	'margin': '20px auto',
	'position': 'relative',
};

const graphStyles = {
	'height': '400px',
	'width': '1000px',
}

const TinGraph = () => (
	<div style={wrapStyles}>
		<svg xmlns="http://www.w3.org/2000/svg" style={graphStyles}>
			<Legend />
			<Grid />
			<Chart />
		</svg>
		<Tooltip />
	</div>
);

export default TinGraph;