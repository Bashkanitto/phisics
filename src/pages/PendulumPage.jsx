import React, { useEffect, useState } from 'react'
import Pendulum from '../components/Pendulum/Pendulum'
import PendulumTheory from '../components/Pendulum/PendulumTheory'
import PlanetSelector from '../components/Pendulum/Planet'
import '../styles/Pendulum.css'

const PendulumPage = () => {
	const [gravity, setGravity] = useState(9.81) // Default to Earth's gravity
	const [length, setLength] = useState(4) // Default pendulum length (in meters)
	const [time, setTime] = useState(0) // Total elapsed time
	const [nTimes, setNTimes] = useState(0) // Number of oscillations

	useEffect(() => {
		if (!length || length <= 0 || !gravity || gravity <= 0) return

		const period = 2 * Math.PI * Math.sqrt(length / gravity) // Calculate the period of one oscillation
		let oscillationCount = 0

		// Update the time and count oscillations
		const interval = setInterval(() => {
			setTime((prevTime) => prevTime + 0.05) // Increment time by 50ms
			oscillationCount = Math.floor(time / period) // Calculate number of oscillations
			setNTimes(oscillationCount)
		}, 50)

		return () => clearInterval(interval) // Cleanup on unmount
	}, [gravity, length, time])

	return (
		<div
			style={{
				backgroundImage: `url("/desktop.png")`,
			}}
			className='pendulum-container'
		>
			<PendulumTheory />
			<PlanetSelector setGravity={setGravity} />
			<div
				style={{
					marginBottom: '20px',
					textAlign: 'center',
				}}
			>
				<img className='stand' width={150} src='/stand.png' alt='' />
				<label style={{ color: 'black' }}>
					Ұзындығы (m):
					<input
						type='number'
						value={length}
						onChange={(e) => setLength(Number(e.target.value))}
						style={{ marginLeft: '10px', padding: '5px', fontSize: '16px' }}
					/>
				</label>
				<div style={{ color: 'black', marginTop: '10px' }}>
					<h5>Уақыт (t): {time.toFixed(2)} сек</h5>
					<h5>Өту саны (n): {nTimes}</h5>
				</div>
			</div>
			<Pendulum gravity={gravity} length={length} />
		</div>
	)
}

export default PendulumPage
