import React from 'react';
import {BrowserRouter,Routes, Route, Link} from 'react-router-dom';
import Header from './Header';
import Fish from './Fish';
import './App.css'
const App = () => {
	return (
		<div className="main">
			
			<BrowserRouter>
				<Header />
				<Routes>	
					<Route path="/" exact element={<Fish />} />
				</Routes>
			</BrowserRouter>
		</div>
		
	);
}

export default App;