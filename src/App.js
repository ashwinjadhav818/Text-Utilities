import { useState } from 'react';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
// import About from './pages/About';

function App() {
	const [mode, setMode] = useState('light');

	const toggleMode = () => {
		if (mode === 'light') {
			setMode('dark');
			document.body.classList.toggle('bg-dark');
			document.body.classList.toggle('text-light');
		} else {
			setMode('light');
			document.body.classList.toggle('bg-dark');
			document.body.classList.toggle('text-light');
		}
	};

	return (
		<>
			<Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} />
			<h1 className="text-center my-3">Text Utils</h1>
			<div className="container my-3">
				<TextFrom mode={mode} />
			</div>
			{/* <About /> */}
		</>
	);
}

export default App;
