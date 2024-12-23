import React from 'react'
import '../styles/Sidebar.css'
import { useNavigate } from 'react-router-dom'

const Sidebar = ({ setIsEnd, isOpen, toggleSidebar }) => {
	const navigate = useNavigate()

	function handleNav(path) {
		setIsEnd(true)
		setTimeout(() => {
			navigate(path)
			setIsEnd(false)
		}, 700)
	}

	return (
		<div className={`sidebar-container ${isOpen ? 'open' : ''}`}>
			<div onClick={toggleSidebar} className='sidebar'>
				<ul className='menu-list'>
					<li className='menu-item'>
						<a onClick={() => handleNav('/magnet')}>Магнит</a>
					</li>
					<li className='menu-item'>
						<a onClick={() => handleNav('/scales')}>Таразы</a>
					</li>
					<li className='menu-item'>
						<a onClick={() => handleNav('/pendulum')}>Маятник</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Sidebar
