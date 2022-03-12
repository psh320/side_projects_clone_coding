import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light" style={{background: "#e3f2fd"}}>
		<div className="container-fluid">
		<a className="navbar-brand" href="#">Navbar</a>
		<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
			<span className="icon-bar"></span>
		</button>
		<div className="collapse navbar-collapse" id="navbarNav">
		<ul className="navbar-nav mr-auto">
		<li className="nav-item">
						<Link className="nav-link active" aria-current="page" to="/">Home</Link>
					</li>
		<li className="nav-item">
		<Link to="/catch/fish" className="nav-link">
		 					<img src="http://acnhapi.com/v1/icons/fish/1" width="30" height="30" className="d-inline-block align-top" alt="" />
		 					Fish
		 				</Link>
		</li>
		<li className="nav-item">
		<Link to="/collect/fossils" className="nav-link">
							<img src="http://acnhapi.com/v1/images/fossils/plesio_skull" width="30" height="30" className="d-inline-block align-top" alt="" />
							Fossils
						</Link>
		</li>
		</ul>
				<ul className="navbar-nav ms-auto ms-2">
					<li className="nav-item">
						<GoogleAuth />
					</li>
				</ul>
		</div>
		</div>
		</nav>
		
	);
}
				
export default Header;

