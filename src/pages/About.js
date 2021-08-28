import { useState } from 'react';

export default function About() {
	const [darkMode, setDarkMode] = useState({
		color: '#212529',
		backgroundColor: '#fff',
	});

	const [darkModeBtnText, setDarkModeBtnText] = useState('Enable Dark Mode');

	const toggleDarkMode = () => {
		if (darkMode.color === '#fff') {
			setDarkMode({
				color: '#212529',
				backgroundColor: '#fff',
			});

			setDarkModeBtnText('Enable Dark Mode');
		} else {
			setDarkMode({
				color: '#fff',
				backgroundColor: '#212529',
				border: '1px solid #fff',
			});
			setDarkModeBtnText('Enable Light Mode');
		}
	};

	return (
		<div className="container" style={darkMode}>
			<h1 className="text-center my-3">About</h1>
			<div className="accordion accordion-flush" id="accordionFlushExample">
				<div className="accordion-item" style={darkMode}>
					<h2 className="accordion-header" id="flush-headingOne">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#flush-collapseOne"
							aria-expanded="false"
							aria-controls="flush-collapseOne"
							style={darkMode}
						>
							Accordion Item #1
						</button>
					</h2>
					<div
						id="flush-collapseOne"
						className="accordion-collapse collapse"
						aria-labelledby="flush-headingOne"
						data-bs-parent="#accordionFlushExample"
					>
						<div className="accordion-body">
							Placeholder content for this accordion, which is intended to
							demonstrate the <code>.accordion-flush</code> class. This is the
							first item's accordion body.
						</div>
					</div>
				</div>
				<div className="accordion-item" style={darkMode}>
					<h2 className="accordion-header" id="flush-headingTwo">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#flush-collapseTwo"
							aria-expanded="false"
							aria-controls="flush-collapseTwo"
							style={darkMode}
						>
							Accordion Item #2
						</button>
					</h2>
					<div
						id="flush-collapseTwo"
						className="accordion-collapse collapse"
						aria-labelledby="flush-headingTwo"
						data-bs-parent="#accordionFlushExample"
					>
						<div className="accordion-body">
							Placeholder content for this accordion, which is intended to
							demonstrate the <code>.accordion-flush</code> class. This is the
							second item's accordion body. Let's imagine this being filled with
							some actual content.
						</div>
					</div>
				</div>
				<div className="accordion-item" style={darkMode}>
					<h2 className="accordion-header" id="flush-headingThree">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#flush-collapseThree"
							aria-expanded="false"
							aria-controls="flush-collapseThree"
							style={darkMode}
						>
							Accordion Item #3
						</button>
					</h2>
					<div
						id="flush-collapseThree"
						className="accordion-collapse collapse"
						aria-labelledby="flush-headingThree"
						data-bs-parent="#accordionFlushExample"
					>
						<div className="accordion-body">
							Placeholder content for this accordion, which is intended to
							demonstrate the <code>.accordion-flush</code> class. This is the
							third item's accordion body. Nothing more exciting happening here
							in terms of content, but just filling up the space to make it
							look, at least at first glance, a bit more representative of how
							this would look in a real-world application.
						</div>
					</div>
				</div>
			</div>

			<div className="container my-3">
				<button
					type="button"
					className="btn btn-primary"
					onClick={toggleDarkMode}
				>
					{darkModeBtnText}
				</button>
			</div>
		</div>
	);
}
