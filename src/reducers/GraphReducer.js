import uuid from 'uuid-v4';
import initialState from '../other/data';

function calcGraph(data) {

	let lines = data.lines;
	let circlesGroup = [];
	let linesGroup = [];

	lines.forEach((line, k) => {
		let arr = line.split(' ');
		arr.forEach((str, i) => {
			var points = str.split(',');
			arr[i] = { x: points[0], y: points[1], key: uuid() };
		});
		circlesGroup.push({circles: arr, key: uuid()});
		linesGroup.push({points: line, key: uuid() });
	});

	return { linesGroup, circlesGroup };
}

function nearestPoint(x, circlesGroup) {

	var currentPoints = [];

	circlesGroup.forEach((circles) => {
		for (var i = 1, len = circles.circles.length; i < len; i++ ) {
			if (Math.abs(circles.circles[i-1].x - x) < Math.abs(circles.circles[i].x - x)) {
				currentPoints.push({x: circles.circles[i-1].x, y: circles.circles[i-1].y});
				break;
			} else if (i === len - 1) {
				currentPoints.push({x: circles.circles[i].x, y: circles.circles[i].y});
			}
		}
	});

	return currentPoints;
}

const GraphReducer = (state = calcGraph(initialState), action) => {
	switch (action.type) {
		case 'MOUSE_MOVE': 
			{
				let currentPoints = nearestPoint(action.x, state.circlesGroup);
				return Object.assign({}, state, {currentPoints, interactive: true});
			}
		case 'MOUSE_OUT': 
			{
				return Object.assign({}, state, {interactive: false});
			}
		default:
			return state;
	};
};

export default GraphReducer;
