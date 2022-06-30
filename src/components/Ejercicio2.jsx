import React, { useState, useEffect } from "react"

export default function Clock() {
	const [fecha, setFecha] = useState(new Date())
	const [datos, setDatos] = useState({
		nombre: "Martín",
		apellidos: "San José",
		edad: 0,
	})

	const tick = () => {
		setFecha(new Date())
		setDatos((prevData) => {
			return {
				...prevData,
				edad: prevData.edad + 1,
			}
		})
	}

	useEffect(() => {
		const timer = setInterval(tick, 1000)
		return () => {
			clearInterval(timer)
		}
	}, [])

	return (
		<div>
			<h2>
				Hora Actual:
				{fecha.toLocaleTimeString()}
			</h2>
			<h3>
				{datos.nombre} {datos.apellidos}
			</h3>
			<h1>Edad: {datos.edad}</h1>
		</div>
	)
}