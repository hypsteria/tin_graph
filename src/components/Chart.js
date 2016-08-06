import React from 'react';
import Line from './Line';
import Interactive from './Interactive';
import CirclesGroup from './CirclesGroup';
import Catcher from './Catcher';
import { connect } from 'react-redux';

let chartColor = ['rgb(118,164,197)', 'rgb(240,140,140)'];

const Chart = ({lines, circles, currentPoints, interactive}) => {

	let circlesGroupArr = circles.map((circlesBunch, i) => (<CirclesGroup fill={chartColor[i] || '#ccc'} 
																			circles={circlesBunch.circles} 
																			key={circlesBunch.key} 
																			current={interactive && currentPoints && currentPoints[i].x || 0} />));
	
	let linesGroupArr = lines.map((line, i) => (<Line stroke={chartColor[i] || '#ccc'} points={line.points} key={line.key} />));

	return (
		<g className="chart" transform="translate(50,20)">
			<g className="lines-group">
				{linesGroupArr}
			</g>
			<Interactive />
			<g className="circles-group">
				{circlesGroupArr}
			</g>
			<Catcher />
		</g>
	);
};

const mapStateToProps = (state, ownProps) => {
	return {
		lines: state.Graph.linesGroup,
		circles: state.Graph.circlesGroup,
		currentPoints: state.Graph.currentPoints,
		interactive: state.Graph.interactive
	};
};

export default connect(mapStateToProps)(Chart);