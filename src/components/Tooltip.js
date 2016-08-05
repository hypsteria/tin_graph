import React from 'react';

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
	'marginBottom': '5px',
	'color': 'rgba(170,170,170,1)',
};

const courseStyles = {
	'color': 'rgba(110,110,110,1)',
	'marginRight': '10px',
}

const deltaStyles = {
	'color': 'rgba(29,157,81,1)',
}

const Tooltip = () => (
	<div style={tooltipStyles}>
		<div style={dateStyles}>24 июля 2015</div>
		<div>
			<span style={courseStyles}>$ <span>63,01</span></span>
			<span style={deltaStyles}>&#9650; <span>0,52</span></span>
		</div>
	</div>
);

export default Tooltip;