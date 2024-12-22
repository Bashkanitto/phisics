import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import MagnetPage from './pages/MagnetPage'
import ScalesPage from './pages/ScalesPage'
import PendulumPage from './pages/PendulumPage'
import { Route, Routes } from 'react-router-dom'

const App = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleSidebar = () => {
		setIsOpen(!isOpen)
	}
	return (
		<div className='w-full'>
			<Header toggleSidebar={toggleSidebar} />
			<Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
			<main className='container'>
				<Routes>
					<Route path='/magnet' element={<MagnetPage />} />
					<Route path='/scales' element={<ScalesPage />} />
					<Route path='/pendulum' element={<PendulumPage />} />
					<Route path='/' element={<MagnetPage />} />
				</Routes>
			</main>
		</div>
	)
}

export default App
