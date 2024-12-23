import React, { useState } from 'react'
import Scales from '../components/Scales/Scales'
import Weight from '../components/Scales/Weight'
import ScalesTheory from '../components/Scales/ScalesTheory'

const ScalesPage = ({ isEnd }) => {
	const [draggingWeight, setDraggingWeight] = useState(null)

	return (
		<>
			<ScalesTheory isEnd={isEnd} />
			<div className={`scales-main ${isEnd ? 'hide' : ''}`}>
				<div
					style={{
						height: '80vh',
					}}
					className='flex-row rounded-md'
				>
					<Weight onDragStart={setDraggingWeight} />
					<Scales draggingWeight={draggingWeight} />
				</div>
			</div>
		</>
	)
}

export default ScalesPage
