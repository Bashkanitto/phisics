import React, { useState, useEffect } from 'react'

const Pendulum = ({ gravity, length }) => {
	const [angle, setAngle] = useState(30) // Initial angle in degrees
	const [time, setTime] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			// Simplified pendulum equation: θ(t) = θ₀ * cos(√(g / l) * t)
			const angularFrequency = Math.sqrt(gravity / length)
			const newAngle = 30 * Math.cos(angularFrequency * time) // 30° initial amplitude
			setAngle(newAngle)
			setTime((prev) => prev + 0.05) // Update time (step of 0.05 seconds)
		}, 50) // Update every 50ms

		return () => clearInterval(interval)
	}, [gravity, length, time])

	return (
		<div
			style={{
				position: 'absolute',
				left: '48%',
				bottom: '-40%',
				height: '80vh',
				zIndex: '100',
			}}
		>
			<div
				className='pendiliumBg'
				style={{
					width: '29.5px',
					height: `${length * 50}px`, // Scale length for display
					objectFit: 'cover',
					backgroundSize: 'contain',
					backgroundRepeat: 'no-repeat',
					transform: `rotate(${angle}deg)`,
					transformOrigin: 'top',
					transition: 'transform 0.05s linear',
				}}
			/>
		</div>
	)
}

export default Pendulum
