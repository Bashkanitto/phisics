import React, { useState } from 'react'
import Pendulum from '../components/Pendulum/Pendulum'
import PlanetSelector from '../components/Pendulum/Planet'
import '../styles/Pendulum.css'

const PendulumPage = () => {
	const [gravity, setGravity] = useState(9.81) // Default to Earth's gravity
	const [length, setLength] = useState(2) // Default pendulum length (in meters)

	return (
		<div className='pendulum-container rounded-md	'>
			<h1 style={{ textAlign: 'center' }}>Pendulum Simulation</h1>
			<PlanetSelector setGravity={setGravity} />
			<div
				style={{
					marginBottom: '20px',
					textAlign: 'center',
				}}
			>
				<img className='stand' width={150} src='/stand.png' alt='' />
				<label>
					Pendulum Length (m):
					<input
						type='number'
						value={length}
						onChange={(e) => setLength(Number(e.target.value))}
						style={{ marginLeft: '10px', padding: '5px', fontSize: '16px' }}
					/>
				</label>
			</div>
			<Pendulum gravity={gravity} length={length} />
		</div>
	)
}

export default PendulumPage
