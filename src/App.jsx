import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import MagnetPage from './pages/MagnetPage'
import ScalesPage from './pages/ScalesPage'
import PendulumPage from './pages/PendulumPage'
import { Route, Routes } from 'react-router-dom'

const App = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [isEnd, setIsEnd] = useState(false)

	const toggleSidebar = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className='w-full'>
			<Header toggleSidebar={toggleSidebar} />
			<Sidebar
				setIsEnd={setIsEnd}
				isOpen={isOpen}
				toggleSidebar={toggleSidebar}
			/>
			<main className='container'>
				<Routes>
					<Route path='/magnet' element={<MagnetPage isEnd={isEnd} />} />
					<Route path='/scales' element={<ScalesPage isEnd={isEnd} />} />
					<Route path='/pendulum' element={<PendulumPage isEnd={isEnd} />} />
					<Route path='/' element={<MagnetPage isEnd={isEnd} />} />
				</Routes>
			</main>
		</div>
	)
}

export default App
