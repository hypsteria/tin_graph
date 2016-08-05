import React from 'react';
import Line from './Line';
import Interactive from './Interactive';
import CirclesGroup from './CirclesGroup';
import { connect } from 'react-redux';

let chartColor = ['rgb(118,164,197)', 'rgb(240,140,140)'];

const Chart = ({lines, circles}) => {

	let circlesGroupArr = circles.map((circlesBunch, i) => (<CirclesGroup fill={chartColor[i] || '#ccc'} circles={circlesBunch.circles} key={circlesBunch.key} />));
	let linesGroupArr = lines.map((line, i) => (<Line stroke={chartColor[i] || '#ccc'} points={line.points} key={line.key} />));

	return (
		<g className="chart" transform="translate(50,20)">
			<g className="lines-group">
				{linesGroupArr}
			</g>
			<Interactive x1="250" x2="250" y1="110" y2="340" />
			<g className="circles-group">
				{circlesGroupArr}
			</g>
		</g>
	);
};

const mapStateToProps = (state, ownProps) => {
	return {
		lines: state.Graph.linesGroup,
		circles: state.Graph.circlesGroup,
	};
};

export default connect(mapStateToProps)(Chart);