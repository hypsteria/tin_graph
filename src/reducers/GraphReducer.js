import initialState from '../other/complexData';

const field = [920,338]; // viewport области для графика
const monthLenght = [0,31,59,90,120,151,181,212,242,272,303,333,364]; // накопительная сумма дней в месяцах, для удобства расчета точек грифка

function calcGraph(data) {

	let record = data.record;

	let line = '';
	let info = [];

	record.forEach((val) => {
		let coords = translateToXY(val);
		line += coords[0] + ',' + coords[1] + ' ';

		let point = {   x: coords[0], 
						y: coords[1],
						value: val.value,
						date: val.date,
					};
		info.push(point);
	});

	return { graph: { points: line, info }};
}

function translateToXY(val) {
	var date = val.date.split('-');
	let days = +monthLenght[date[1]] + +(date[2]);
	let x = days * field[0] / monthLenght[monthLenght.length-1];
	let y = field[1] - val.value * field[1] / 100;
	return [x, y];
}

function nearestPoint(x, points) {

	var nearestPoint = {};

	for (var i = 1, len = points.length; i < len; i++ ) {
		let delta = 0;
		if (Math.abs(points[i-1].x - x) < Math.abs(points[i].x - x)) {
			if (points[i-2]) {
				delta = (points[i-1].value - points[i-2].value).toFixed(2);
			}
			nearestPoint = Object.assign({}, points[i-1], {delta});
			break;
		} else if (i === len - 1) {
			delta = (points[i].value - points[i-1].value).toFixed(2);
			nearestPoint = Object.assign({}, points[i], {delta});
		}
	}

	return nearestPoint;
}

const GraphReducer = (state = calcGraph(initialState), action) => {
	switch (action.type) {
		case 'MOUSE_MOVE': 
			{
				let currentPoint = nearestPoint(action.x, state.graph.info);
				let interactive = { show: true, currentPoint };
				return Object.assign({}, state, { interactive });
			}
		case 'MOUSE_OUT': 
			{	
				return Object.assign({}, state, {interactive: {show: false}});
			}
		default:
			return state;
	};
};

export default GraphReducer;
