import React from 'react'
import MagneticPull from '../components/Magnets/MagneticPull'
import MagneticPush from '../components/Magnets/MagneticPush'
import MagnetTheory from '../components/Magnets/MagnetTheory'

const MagnetPage = ({ isEnd }) => {
	return (
		<>
			<MagnetTheory isEnd={isEnd} />

			<div
				className={`magnet-container ${isEnd ? 'hide' : ''} flex column gap-10`}
			>
				<MagneticPull />
				<MagneticPush />
			</div>
		</>
	)
}

export default MagnetPage
