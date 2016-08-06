export const mouseMove = (x, y) => {
	return {
		type: 'MOUSE_MOVE',
		x,
		y,
	}
}

export const mouseOut = () => {
	return {
		type: 'MOUSE_OUT',
	}
}