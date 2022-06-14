import React, { useState } from "react"
import Contacto from "./Contacto"

const ContactList = () => {
	const [connected, setConnected] = useState(true)
	const CONTACTO = {
		nombre: "Juan",
		apellido: "Perez",
		email: "asd@asd.com",
		conectado: connected,
	}

	return (
		<>
			<h1>Contactos</h1>
			<Contacto contacto={CONTACTO} updateState={setConnected} />
		</>
	)
}

export default ContactList
