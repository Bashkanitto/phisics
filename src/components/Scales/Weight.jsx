import React from 'react'
import '../../styles/Scales.css'

const weights = [10, 20, 50, 100, 'wood', 'metal'] // Example weights

const Weights = ({ onDragStart }) => {
	return (
		<div className='weights-container'>
			<div className='weights'>
				{weights.map((weight, index) => (
					<div
						key={index}
						style={{
							display: 'flex',
							alignItems: 'flex-end',
						}}
						className='weight'
						draggable
						onDragStart={() => onDragStart(weight)}
					>
						<img width={50} src={`/${weight}.png`} alt={`${weight}`} />
					</div>
				))}
			</div>
		</div>
	)
}

export default Weights
