import React, { useState } from 'react'
import '../../styles/Scales.css'

const Scales = ({ draggingWeight }) => {
	const [leftWeight, setLeftWeight] = useState(0)
	const [rightWeight, setRightWeight] = useState(0)
	const MAX_WEIGHT = 120

	const handleDrop = (side) => {
		if (draggingWeight) {
			const weightToAdd =
				typeof draggingWeight === 'number'
					? draggingWeight
					: draggingWeight === 'wood'
					? 80
					: 120

			if (side === 'left') {
				setLeftWeight((prev) => Math.min(prev + weightToAdd, MAX_WEIGHT))
			} else if (side === 'right') {
				setRightWeight((prev) => Math.min(prev + weightToAdd, MAX_WEIGHT))
			}
		}
	}

	const calculateRotation = () => {
		const difference = leftWeight - rightWeight
		return difference * 0.15
	}
	const offsetX = calculateRotation() * -4 // Adjust factor (-10 for smaller shift)
	const offsetY = calculateRotation() * -0.3 // Adjust factor (-10 for smaller shift)

	return (
		<div className='scales-container'>
			<div className='scaleHands'>
				{/* Scales Base */}
				<img className='table' src='/table.png' alt='Base' />

				{/* Scales Arms */}
				<img
					className='tableHands'
					src='/tableHands.png'
					alt='Arms'
					style={{
						transform: `translateX(${offsetX}px) translateY(${offsetY}px) rotate(${calculateRotation()}deg)`,
						transition: 'transform 0.3s ease',
						transformOrigin: 'center bottom', // Pivot point for rotation
					}}
				/>
			</div>

			{/* Drop Zones */}
			<div className='scale-zones'>
				<div
					className='scale-left'
					onDrop={() => handleDrop('left')}
					onDragOver={(e) => e.preventDefault()}
				></div>
				<div
					className='scale-right'
					onDrop={() => handleDrop('right')}
					onDragOver={(e) => e.preventDefault()}
				></div>
			</div>
		</div>
	)
}

export default Scales
