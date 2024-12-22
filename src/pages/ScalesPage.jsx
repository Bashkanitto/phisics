import React, { useState } from 'react'
import Scales from '../components/Scales/Scales'
import Weight from '../components/Scales/Weight'
import ScalesTheory from '../components/Scales/ScalesTheory'

const ScalesPage = () => {
	const [draggingWeight, setDraggingWeight] = useState(null)

	return (
		<div>
			<ScalesTheory />
			<div
				style={{
					backgroundColor: '#4a5c69',
					height: '80vh',
				}}
				className='flex-row rounded-md'
			>
				<Weight onDragStart={setDraggingWeight} />
				<Scales draggingWeight={draggingWeight} />
			</div>
		</div>
	)
}

export default ScalesPage
