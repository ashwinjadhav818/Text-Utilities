import { useState } from 'react';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextFrom from './components/TextFrom';
import About from './pages/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	const [mode, setMode] = useState('light');
	const [alert, setAlert] = useState(null);
	const [accent, setAccent] = useState('primary');

	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type,
		});

		setTimeout(() => {
			setAlert(null);
		}, 1500);
	};

	const toggleMode = () => {
		if (mode === 'light') {
			setMode('dark');
			document.body.classList.toggle('bg-dark');
			document.body.classList.toggle('text-light');

			showAlert('Dark mode has been enabled!', 'success');
		} else {
			setMode('light');
			document.body.classList.toggle('bg-dark');
			document.body.classList.toggle('text-light');
			showAlert('Light mode has been enabled!', 'success');
		}
	};

	const accentColor = (cls) => {
		setAccent(cls);
		console.log(accent);
	};

	return (
		<Router>
			<Navbar
				title="Text Utilities"
				mode={mode}
				toggleMode={toggleMode}
				accentColor={accentColor}
			/>
			<Alert alert={alert} />
			<Switch>
				<Route exact path="/about">
					<About mode={mode} />
				</Route>
				<Route exact path="/">
					<div className="container my-3">
						<TextFrom showAlert={showAlert} mode={mode} accent={accent} />
					</div>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
