import React, { useState } from 'react'
import '../styles/Sidebar.css'

const Sidebar = ({ isOpen, toggleSidebar }) => {
	return (
		<div className={`sidebar-container ${isOpen ? 'open' : ''}`}>
			<div onClick={toggleSidebar} className='sidebar'>
				<ul className='menu-list'>
					<li className='menu-item'>
						<a href='/magnet'>Магнит</a>
					</li>
					<li className='menu-item'>
						<a href='/scales'>Весы</a>
					</li>
					<li className='menu-item'>
						<a href='/pendulum'>Маятник</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Sidebar
