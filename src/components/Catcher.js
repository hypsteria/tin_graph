import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const catherStyles = {
	'width': 930,
	'height': 340,
	'fill': "rgba(0,0,0,0.0)",
	'cursor': 'pointer',
}

let createHandlers = function(dispatch) {
	let mouseMove = function(x,y) {
		dispatch(actions.mouseMove(x,y));
	};

	let mouseOut = function() {
		dispatch(actions.mouseOut());
	}

	return { mouseMove, mouseOut, };
}

class Catcher extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.trace = this.trace.bind(this);
		this.leave = this.leave.bind(this);
		this.handlers = createHandlers(this.props.dispatch);
	}

	trace(e) {
		var targetRect = e.target.getBoundingClientRect();
		this.handlers.mouseMove(e.pageX - targetRect.left, e.pageY - targetRect.top);
	}

	leave(e) {
		this.handlers.mouseOut();
	}

	render() {
		return (
			<g>
				<rect style={catherStyles}
						onMouseMove={this.trace} 
						onMouseOut={this.leave} />
			</g>
		);
	}
};

export default connect()(Catcher);