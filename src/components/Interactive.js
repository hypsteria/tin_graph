import React from 'react';

const Interactive = ({x1,x2,y1,y2}) => (
	<g>
		<line x1={x1} x2={x2} y1={y1} y2={y2} stroke="rgba(215,215,215,1)" strokeDasharray="5 3"></line>
	</g>
);

export default Interactive;