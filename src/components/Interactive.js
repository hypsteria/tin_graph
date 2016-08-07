import React from 'react';
import { connect } from 'react-redux';

const tooltipStyles = {
	'position': 'absolute',
	'background': '#fff',
	'padding': '8px 12px',
	'boxShadow': '0px 2px 5px 0px rgba(0,0,0,0.3)',
	'borderRadius': '3px',
	'opacity': 1,
	'top': '75px',
	'left': '305px',
};

const dateStyles = {
	'fill': 'rgba(170,170,170,1)',
};

const courseStyles = {
	'fill': 'rgba(110,110,110,1)',
}

const deltaStyles = {
	'fill': 'rgba(29,157,81,1)',
}

const deltaStylesDown = {
	'fill': 'rgba(255,70,70,1)',
}

const monthNames = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

class Interactive extends React.Component {
	constructor(props) {
		super(props);
		this.state = {  x: 0,
						y: 0 };
	};

	componentWillReceiveProps (nextProps) {
		if (nextProps.interactive.show) this.state = {  x: +nextProps.interactive.currentPoint.x,
														y: +nextProps.interactive.currentPoint.y };
	};

	formatDate(date) {
		var arr = date.split('-');
		return arr[2] + ' ' + monthNames[arr[1]] + ' ' + arr[0];
	};

	render() {

		let interactive = this.props.interactive;
		if (interactive && interactive.show) {

			let xTooltip = (this.state.x + 5 < 810) ? this.state.x + 5 : this.state.x - 125;
			let yTooltip = (this.state.y - 55 > 0) ? this.state.y - 55 : 0;
			let currentVal = interactive.currentPoint.value.toFixed(2).toString();
			let currentDate = this.formatDate(interactive.currentPoint.date);
			var delta = interactive.currentPoint.delta;
			let currentDelta = null;

			if (delta >= 0) currentDelta = (<text x={xTooltip + 60} y={yTooltip + 38} style={deltaStyles}>&#9650; {delta}</text>);
			else currentDelta = (<text x={xTooltip + 60} y={yTooltip + 38} style={deltaStylesDown}>&#9660; {delta}</text>);

			return (
				<g>
					<line x1={this.state.x} x2={this.state.x} 
							y1={this.state.y} y2={340} 
							stroke="rgba(215,215,215,1)" 
							strokeDasharray="5 3">
					</line>
					<circle cx={this.state.x} cy={this.state.y} r="4" 
							fill={this.props.circleColor} 
							stroke="rgba(246,246,246,1)"
							strokeWidth="2" >
					</circle>
					<g>
						<defs>
							<filter id="dropshadow" height="130%">
								<feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
								<feOffset dx="0" dy="2" result="offsetblur"/>
								<feComponentTransfer xmlns="http://www.w3.org/2000/svg">
									<feFuncA type="linear" slope="0.2"/>
								</feComponentTransfer>
								<feMerge> 
									<feMergeNode/>
									<feMergeNode in="SourceGraphic"/>
								</feMerge>
							</filter>
						</defs>
						<rect x={xTooltip} y={yTooltip} width="120" height="50" rx="3" ry="3" fill="#fff" filter="url(#dropshadow)" />
						<text x={xTooltip + 10} y={yTooltip + 20} style={dateStyles}>{currentDate}</text>
						<g>
							<text x={xTooltip + 10} y={yTooltip + 38} style={courseStyles}>$ {currentVal}</text>
							{currentDelta}
						</g>
					</g>
				</g>
			);
		}

		return null;

	};
};

const mapStateToProps = (state, ownProps) => {
	return {
		interactive: state.Graph.interactive,
	};
};

export default connect(mapStateToProps)(Interactive);
