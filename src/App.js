import "./App.css"
import ContactList from "./components/ContactList"
import Clock from "./components/Ejercicio2"

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<ContactList />
				<hr />
				<Clock />
			</header>
		</div>
	)
}

export default App

