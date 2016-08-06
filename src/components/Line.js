import React from 'react';

const Line = ({stroke, points}) => {
	return (	
		<g>
			<polyline fill="none" stroke={stroke} strokeWidth="1" points={points}/>
		</g>
	);
};

export default Line;