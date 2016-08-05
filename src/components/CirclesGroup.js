import React from 'react';

const CirclesGroup = ({fill, circles}) => {

	let circle = circles.map((point) => (<circle key={point.key} cx={point.x} cy={point.y}  r="4"></circle>));

	return (
		<g fill={fill} stroke="rgba(246,246,246,1)"  strokeWidth="2">
			{circle}
		</g>
	);
};

export default CirclesGroup;