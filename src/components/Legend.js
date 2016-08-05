import React from 'react';

const labelsStyles = {
	'fill': 'rgba(155,155,155,1)',
}

const yLabelsStyles = {
	'textAnchor': 'end',
	'alignmentBaseline': 'central'
}

const xLabelsStyles = {
	'textAnchor': 'start',
}

const Legend = () => {

	return (
		<g style={labelsStyles}>
			<g style={yLabelsStyles}>
				<text x="30" y="20">100</text>
				<text x="30" y="88">80</text>
				<text x="30" y="156">65</text>
				<text x="30" y="222">40</text>
				<text x="30" y="290">20</text>
				<text x="30" y="360">0</text>
			</g>
			<g style={xLabelsStyles}>
				<text x="75" y="385">Январь</text>
				<text x="150" y="385">Февраль</text>
				<text x="225" y="385">Март</text>
				<text x="300" y="385">Апрель</text>
				<text x="375" y="385">Май</text>
				<text x="450" y="385">Июнь</text>
				<text x="525" y="385">Июль</text>
				<text x="600" y="385">Август</text>
				<text x="675" y="385">Сентябрь</text>
				<text x="750" y="385">Октябрь</text>
				<text x="825" y="385">Ноябрь</text>
				<text x="900" y="385">Декабрь</text>
			</g>
		</g>
	);
};

export default Legend;