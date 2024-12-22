import React, { useState } from 'react'
import '../../styles/Scales.css'

const Scales = ({ draggingWeight }) => {
	const [leftWeight, setLeftWeight] = useState(0)
	const [rightWeight, setRightWeight] = useState(0)
	const MAX_WEIGHT = 170

	const handleDrop = (side) => {
		if (draggingWeight) {
			const weightToAdd =
				typeof draggingWeight === 'number'
					? draggingWeight
					: draggingWeight === 'wood'
					? 80
					: 150

			if (side === 'left') {
				setLeftWeight((prev) => Math.min(prev + weightToAdd, MAX_WEIGHT))
			} else if (side === 'right') {
				setRightWeight((prev) => Math.min(prev + weightToAdd, MAX_WEIGHT))
			}
		}
	}

	const resetScales = () => {
		setLeftWeight(0)
		setRightWeight(0)
	}

	const calculateRotation = () => {
		const difference = leftWeight - rightWeight
		return difference * 0.15
	}

	return (
		<div className='scales-container'>
			<h2>Весы</h2>
			<div className='scaleHands'>
				{/* Scales Base */}
				<img className='table' src='/table.png' alt='Base' />

				{/* Scales Arms */}
				<img
					className='tableHands'
					src='/tableHands.png'
					alt='Arms'
					style={{
						transform: `rotate(${calculateRotation()}deg)`,
						transition: 'transform 0.3s ease',
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

			<button className='resetButton' onClick={resetScales}>
				Сбросить
			</button>
		</div>
	)
}

export default Scales
