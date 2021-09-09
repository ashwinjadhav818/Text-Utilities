import { Link } from 'react-router-dom';

export default function Navbar({ title, mode, toggleMode, accentColor }) {
	return (
		<nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					{title}
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link" aria-current="page" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/about">
								About
							</Link>
						</li>
					</ul>
					{/* <form className="d-flex">
						<input
							className="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button className="btn btn-outline-primary" type="submit">
							Search
						</button>
					</form> */}
					<div className="d-flex mx-2">
						<div
							className="bg-primary rounded mx-2"
							onClick={() => {
								accentColor('primary');
							}}
							style={{ height: '30px', width: '30px', cursor: 'pointer' }}
						></div>
						<div
							className="bg-success rounded mx-2"
							onClick={() => {
								accentColor('success');
							}}
							style={{ height: '30px', width: '30px', cursor: 'pointer' }}
						></div>
						<div
							className="bg-warning rounded mx-2"
							onClick={() => {
								accentColor('warning');
							}}
							style={{ height: '30px', width: '30px', cursor: 'pointer' }}
						></div>
					</div>
					<div
						className={`form-check form-switch text-${
							mode === 'light' ? 'dark' : 'light'
						}`}
					>
						<input
							className="form-check-input"
							type="checkbox"
							id="flexSwitchCheckDefault"
							onClick={toggleMode}
						/>
						<label
							className="form-check-label"
							htmlFor="flexSwitchCheckDefault"
						>
							Enable Dark Mode
						</label>
					</div>
				</div>
			</div>
		</nav>
	);
}
