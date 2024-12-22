import React from 'react'
import MagneticPull from '../components/Magnets/MagneticPull'
import MagneticPush from '../components/Magnets/MagneticPush'
import MagnetTheory from '../components/Magnets/MagnetTheory'

const MagnetPage = () => {
	return (
		<>
			<MagnetTheory />

			<div className='flex column gap-10'>
				<MagneticPull />
				<MagneticPush />
			</div>
		</>
	)
}

export default MagnetPage
