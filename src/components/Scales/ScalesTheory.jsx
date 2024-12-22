import React, { useState } from 'react'
import '../../styles/TheorySection.css'

const ScalesTheory = () => {
	const [resize, setResize] = useState(false)

	function toggleResize() {
		setResize((prev) => !prev)
	}
	return (
		<div
			onClick={toggleResize}
			style={{
				width: resize && '200px',
				padding: '20px',
				borderRadius: '10px',
			}}
			className='theorySection'
		>
			<h2>Теориялық бөлім: Таразы тепе-теңдігі</h2>
			<p>
				Таразы — заттардың массасын өлшеуге арналған құрал. Олар иінтірек
				принципіне негізделген: егер екі жаққа қолданылған күштер тең болса,
				таразы тепе-теңдікте болады.
			</p>

			<h3>Тепе-теңдік теңдеуі</h3>
			<p>Иінтірек теңдеуі келесі формуламен өрнектеледі:</p>
			<p style={{ fontStyle: 'italic', textAlign: 'center' }}>
				<b>M₁ * L₁ = M₂ * L₂</b>
			</p>
			<p>
				Мұнда:
				<ul>
					<li>
						<b>M₁, M₂</b> — сол және оң жақ табақшалардағы массалар.
					</li>
					<li>
						<b>L₁, L₂</b> — орталықтан массалар ілінген нүктелерге дейінгі
						арақашықтықтар.
					</li>
				</ul>
			</p>

			<h3>Практикалық тапсырма</h3>
			<p>
				Жүктемелерді таразы табақшаларына сүйреп апарыңыз. Олардың жағдайын
				бақылап, тарақшалардағы күштердің қалай өзгеретінін тексеріңіз.
			</p>
		</div>
	)
}

export default ScalesTheory
