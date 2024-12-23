import React from 'react'

const planets = {
	Жер: 9.81,
	Ай: 1.62,
	Юпитер: 24.79,
	Меркурий: 3.7,
	Плутон: 0.62,
}

const PlanetSelector = ({ setGravity }) => {
	return (
		<div style={{ marginBottom: '20px' }}>
			<select
				onChange={(e) => setGravity(planets[e.target.value])}
				style={{
					borderRadius: '30px',
					border: 'none',
					padding: '10px',
					margin: '20px',
					fontSize: '16px',
				}}
			>
				{Object.keys(planets).map((planet) => (
					<option key={planet} value={planet}>
						{planet}
					</option>
				))}
			</select>
		</div>
	)
}

export default PlanetSelector
