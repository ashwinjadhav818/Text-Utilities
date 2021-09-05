export default function Alert({ alert }) {
	const capitalize = (word) => {
		const lowerCaseWord = word.toLowerCase();
		return lowerCaseWord.charAt(0).toUpperCase() + lowerCaseWord.slice(1);
	};

	return (
		alert && (
			<div
				// className="alert alert-warning alert-dismissible fade show position-absolute w-100" // ! Add this classes to make the alert show above other things
				className={`alert alert-${alert.type} alert-dismissible fade show`}
				role="alert"
			>
				<strong>{capitalize(alert.type)}</strong>: {alert.msg}
			</div>
		)
	);
}
