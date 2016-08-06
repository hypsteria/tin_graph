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

class Interactive extends React.Component {
	constructor(props) {
		super(props);
		this.state = {  x: props.currentPoints && props.currentPoints[0].x || 0,
						y: props.currentPoints && props.currentPoints[0].y || 0};
	};

	componentWillReceiveProps (nextProps) {
		this.state = {  x: +nextProps.currentPoints[0].x,
						y: +nextProps.currentPoints[0].y };
	};

	render() {

		if (this.props.interactive) {

			let xTooltip = (this.state.x + 5 < 810) ? this.state.x + 5 : this.state.x - 125;
			let yTooltip = (this.state.y - 55 > 0) ? this.state.y - 55 : 0;

			return (
				<g>
					<line x1={this.state.x} x2={this.state.x} y1={this.state.y} y2={340} stroke="rgba(215,215,215,1)" strokeDasharray="5 3"></line>
					<g>
						<defs>
							<filter id="f3" x="0" y="0" width="150%" height="150%">
								<feOffset result="offOut" in="SourceAlpha" dx="0" dy="2" />
								<feGaussianBlur result="blurOut" in="offOut" stdDeviation="4" />
								<feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
							</filter>
						</defs>
						<rect x={xTooltip} y={yTooltip} width="120" height="50" rx="3" ry="3" fill="#fff" filter="url(#f3)" />
						<text x={xTooltip + 10} y={yTooltip + 20} style={dateStyles}>24 июля 2015</text>
						<g>
							<text x={xTooltip + 10} y={yTooltip + 38} style={courseStyles}>$ 63,01</text>
							<text x={xTooltip + 60} y={yTooltip + 38} style={deltaStyles}>&#9650; 0,52</text>
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
		currentPoints: state.Graph.currentPoints,
		interactive: state.Graph.interactive,
	};
};

export default connect(mapStateToProps)(Interactive);
