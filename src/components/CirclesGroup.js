import React from 'react';

const CirclesGroup = ({fill, circles, current}) => {

	let circle = circles.map((point) => {if (point.x === current) return (<circle key={point.key} cx={point.x} cy={point.y}  r="4"></circle>)});

	return (
		<g fill={fill} stroke="rgba(246,246,246,1)"  strokeWidth="2">
			{circle}
		</g>
	);
};

export default CirclesGroup;