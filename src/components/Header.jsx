import React from 'react'
import '../styles/Header.css'
import { useLocation, useParams } from 'react-router-dom'

const Header = ({ toggleSidebar }) => {
	return (
		<header>
			<div className='sidebar-toggle' onClick={toggleSidebar}>
				☰
			</div>
		</header>
	)
}

export default Header
