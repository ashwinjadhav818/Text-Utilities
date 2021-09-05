import { useState } from 'react';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextFrom from './components/TextFrom';
import About from './pages/About';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
	const [mode, setMode] = useState('light');
	const [alert, setAlert] = useState(null);

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

			showAlert('Dark Mode Has Been Enabled', 'success');
		} else {
			setMode('light');
			document.body.classList.toggle('bg-dark');
			document.body.classList.toggle('text-light');
			showAlert('Light Mode Has Been Enabled', 'success');
		}
	};

	return (
		<Router>
			<Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} />
			<Alert alert={alert} />
			<h1 className="text-center my-3">Text Utils</h1>
			<Switch>
				<Route exact path="/about">
					<About mode={mode} />
				</Route>
				<Route exact path="/">
					<div className="container my-3">
						<TextFrom showAlert={showAlert} mode={mode} />
					</div>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
