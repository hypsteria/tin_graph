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

const GraphReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			{	
				return Object.assign(calcGraph(state));
			}
	}
};

export default GraphReducer;
