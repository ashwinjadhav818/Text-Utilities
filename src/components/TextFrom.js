import React, { useState } from 'react';

export default function TextFrom({ mode, accent, showAlert }) {
	const [text, setText] = useState('This is dummy text.');

	const Uppercase = () => {
		setText(text.toUpperCase());
		showAlert('Text converted to uppercase!', 'success');
	};

	const Lowercase = () => {
		setText(text.toLowerCase());
		showAlert('Text converted to lowercase!', 'success');
	};

	const capitalize = () => {
		let firstChar = text.charAt(0);
		let newText = firstChar.toUpperCase();
		setText(newText + text.slice(1));
		showAlert('First letter capitalize!', 'success');
	};

	const removeExtraSpaces = () => {
		const space = text.split(/[ ]+/);
		setText(space.join(' '));
		showAlert('Removed extra spaces!', 'success');
	};

	const copyText = () => {
		navigator.clipboard.writeText(text);
		showAlert('Text copied to clipboard!', 'success');
	};

	const clearText = () => {
		setText('');
		showAlert('Text cleared!', 'success');
	};

	const handleOnClick = (e) => {
		setText(e.target.value);
	};

	return (
		<>
			<div className="container">
				<h1 className="text-bold my-3" style={{ fontWeight: '600' }}>
					Text Utilities - word counter, character counter, remove extra spaces,
					etc.
				</h1>
				<div className="mb-3">
					<textarea
						className={`form-control bg-${mode} text-${
							mode === 'light' ? 'dark' : 'light'
						}`}
						id="textBox"
						rows="8"
						placeholder="Enter the text here"
						value={text}
						onChange={handleOnClick}
					></textarea>
				</div>
				<button
					className={`btn btn-${accent} me-2 my-2`}
					disabled={text.length === 0}
					onClick={Uppercase}
				>
					Convert To Uppercase
				</button>
				<button
					className={`btn btn-${accent} me-2 my-2`}
					disabled={text.length === 0}
					onClick={Lowercase}
				>
					Convert To Lowercase
				</button>
				<button
					className={`btn btn-${accent} me-2 my-2`}
					disabled={text.length === 0}
					onClick={capitalize}
				>
					Capitalize The First Word
				</button>
				<button
					className={`btn btn-${accent} me-2 my-2`}
					disabled={text.length === 0}
					onClick={removeExtraSpaces}
				>
					Remove Extra Spaces
				</button>
				<button
					className={`btn btn-${accent} me-2 my-2`}
					disabled={text.length === 0}
					onClick={copyText}
				>
					Copy Text
				</button>
				<button
					className="btn btn-danger me-2"
					disabled={text.length === 0}
					onClick={clearText}
				>
					Clear Text
				</button>
			</div>
			<hr />
			<div className="container my-3">
				<h2>Your text summary:</h2>
				<p>
					{text.split(/\s+/).filter((element) => element.length !== 0).length}{' '}
					words and {text.length} characters
				</p>
				<p>
					{0.008 *
						text.split(' ').filter((element) => element.length !== 0)
							.length}{' '}
					minutes to read
				</p>
			</div>
			<hr />
			<div className="container my-3">
				<h2>Preview:</h2>
				<p>{text.length > 0 ? text : 'Enter Text To Preview Here'}</p>
			</div>
		</>
	);
}
