import React from "react"
import propTypes from "prop-types"

export default function Contacto({ contacto, updateState }) {
	const { nombre, apellido, email, conectado } = contacto
	return (
		<div>
			<h2>
				{nombre} {apellido}
			</h2>
			{email && <p>Email: {email}</p>}
			<p>El usuario esta {conectado ? "conectado" : "desconectado"}</p>
			<button onClick={() => updateState(!conectado)}>
				{conectado ? "Desconectar" : "Conectar"}
			</button>
		</div>
	)
}

Contacto.propTypes = {
	contacto: propTypes.object.isRequired,
	updateState: propTypes.func.isRequired,
}
