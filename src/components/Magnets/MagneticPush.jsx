import React, { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

const MagneticPush = () => {
	const [magnet1, setMagnet1] = useState({ x: 0, y: -1, charge: 1 }) // Заряд 1 = положительный
	const [magnet2, setMagnet2] = useState({ x: 0, y: 1, charge: 1 }) // Заряд 1 = положительный

	const calculateForce = () => {
		const dx = magnet2.x - magnet1.x
		const dy = magnet2.y - magnet1.y
		const distance = Math.sqrt(dx * dx + dy * dy)

		// Сила взаимодействия: F = k * q1 * q2 / r^2
		const force =
			(magnet1.charge * magnet2.charge) / Math.pow(Math.max(distance, 0.5), 2)

		// Направление взаимодействия
		const fx = (force * dx) / distance
		const fy = (force * dy) / distance

		return { fx, fy }
	}

	useEffect(() => {
		// Обновляем положение магнита 2 в ответ на взаимодействие
		const force = calculateForce()
		setMagnet2((prev) => ({
			...prev,
			x: prev.x + force.fx * 0.05,
			y: prev.y + force.fy * 0.05,
		}))
	}, [magnet1]) // Следим за изменением положения магнита 1

	const handleMouseMove = (event) => {
		const rect = event.currentTarget.getBoundingClientRect()
		const x = ((event.clientX - rect.left - rect.width / 2) / 50).toFixed(2)
		const y = (-(event.clientY - rect.top - rect.height / 2) / 50).toFixed(2)

		// Перемещаем магнит 1 по мыши
		setMagnet1((prev) => ({ ...prev, x: parseFloat(x), y: parseFloat(y) }))
	}

	const FieldLines = () => {
		// Линии магнитного поля между двумя магнитами
		const lines = []
		for (let i = -3; i <= 3; i += 0.5) {
			const curve = new THREE.CatmullRomCurve3(
				[
					new THREE.Vector3(magnet1.x, magnet1.y, 0),
					new THREE.Vector3(
						(magnet1.x + magnet2.x) / 2 + i,
						(magnet1.y + magnet2.y) / 2,
						0
					),
					new THREE.Vector3(magnet2.x, magnet2.y, 0),
				],
				false
			)

			const points = curve.getPoints(50)
			const geometry = new THREE.BufferGeometry().setFromPoints(points)

			lines.push(
				<line key={i} geometry={geometry}>
					<lineBasicMaterial attach='material' color='#00f' />
				</line>
			)
		}
		return <>{lines}</>
	}

	return (
		<div
			className='rounded-md'
			style={{ width: '100%', height: '70vh', backgroundColor: '#5f7083' }}
			onMouseMove={handleMouseMove}
		>
			<Canvas>
				<ambientLight />
				<pointLight position={[10, 10, 10]} />

				{/* Поле */}
				<FieldLines />

				{/* Магнит 1 */}
				<mesh position={[magnet1.x, magnet1.y, 0]}>
					<boxGeometry args={[1, 1, 1]} />
					<meshStandardMaterial color='red' />
				</mesh>

				{/* Магнит 2 */}
				<mesh position={[magnet2.x, magnet2.y, 0]}>
					<boxGeometry args={[1, 1, 1]} />
					<meshStandardMaterial color='red' />
				</mesh>
			</Canvas>
		</div>
	)
}

export default MagneticPush
