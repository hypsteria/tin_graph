import React from 'react';
import Line from './Line';
import Interactive from './Interactive';
import Catcher from './Catcher';
import { connect } from 'react-redux';

let chartColor = 'rgb(118,164,197)';

const Chart = ({ graph }) => {
	return (
		<g className="chart" transform="translate(50,20)">
			<Line stroke={chartColor} points={graph.points} />
			<Interactive circleColor={chartColor} />
			<Catcher />
		</g>
	);
};

const mapStateToProps = (state, ownProps) => {
	return {
		graph: state.Graph.graph,
	};
};

export default connect(mapStateToProps)(Chart);