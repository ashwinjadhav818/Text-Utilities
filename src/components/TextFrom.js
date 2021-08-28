import React, { useState } from 'react';

export default function TextFrom({ mode }) {
	const [text, setText] = useState('This is dummy text.');

	const Uppercase = () => {
		setText(text.toUpperCase());
	};

	const Lowercase = () => {
		setText(text.toLowerCase());
	};

	const capitalize = () => {
		let firstChar = text.charAt(0);
		let newText = firstChar.toUpperCase();
		setText(newText + text.slice(1));
	};

	const removeExtraSpaces = () => {
		const space = text.split(/[ ]+/);
		setText(space.join(' '));
	};

	const copyText = () => {
		const text = document.getElementById('textBox');
		text.select();
		navigator.clipboard.writeText(text.value);
	};

	const clearText = () => {
		setText('');
	};

	const handleOnClick = (e) => {
		setText(e.target.value);
	};

	return (
		<>
			<div className="container">
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
				<button className="btn btn-primary" onClick={Uppercase}>
					Convert To Uppercase
				</button>
				<button className="btn btn-primary mx-2" onClick={Lowercase}>
					Convert To Lowercase
				</button>
				<button className="btn btn-primary mx-2" onClick={capitalize}>
					Capitalize The First Word
				</button>
				<button className="btn btn-primary mx-2" onClick={removeExtraSpaces}>
					Remove Extra Spaces
				</button>
				<button className="btn btn-primary mx-2" onClick={copyText}>
					Copy Text
				</button>
				<button className="btn btn-primary mx-2" onClick={clearText}>
					Clear
				</button>
			</div>
			<hr />
			<div className="container my-3">
				<h3>Your text summary:</h3>
				<p>
					{text.split(' ').length} words and {text.length} characters
				</p>
				<p>{0.008 * text.split(' ').length} minutes to read</p>
			</div>
			<hr />
			<div className="container my-3">
				<h3>Preview:</h3>
				<p>{text.length > 0 ? text : 'Enter Text To Preview Here'}</p>
			</div>
		</>
	);
}
