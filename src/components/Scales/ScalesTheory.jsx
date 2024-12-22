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
			<h2>Теоретическая часть: Равновесие весов</h2>
			<p>
				Весы — это прибор, предназначенный для измерения массы предметов. Они
				основаны на принципе рычага: если силы, приложенные к двум сторонам,
				равны, весы находятся в равновесии.
			</p>

			<h3>Уравнение равновесия</h3>
			<p>Уравнение рычага описывается формулой:</p>
			<p style={{ fontStyle: 'italic', textAlign: 'center' }}>
				<b>M₁ * L₁ = M₂ * L₂</b>
			</p>
			<p>
				Где:
				<ul>
					<li>
						<b>M₁, M₂</b> — массы на левой и правой чашах.
					</li>
					<li>
						<b>L₁, L₂</b> — расстояния от центра до точек приложения масс.
					</li>
				</ul>
			</p>

			<h3>Практическая задача</h3>
			<p>
				Перетащите грузы на чаши весов. Наблюдайте за их состоянием и проверьте,
				как изменяются силы на чашах.
			</p>
		</div>
	)
}

export default ScalesTheory
