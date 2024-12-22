import React from 'react'

const planets = {
	Earth: 9.81,
	Moon: 1.62,
	Jupiter: 24.79,
	Mercury: 3.7,
	Pluto: 0.62,
}

const PlanetSelector = ({ setGravity }) => {
	return (
		<div style={{ marginBottom: '20px' }}>
			<select
				onChange={(e) => setGravity(planets[e.target.value])}
				style={{ padding: '10px', fontSize: '16px' }}
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
