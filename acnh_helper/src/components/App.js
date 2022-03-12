import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Fish from './catch/Fish';
import Fossil from './collect/Fossil';
import MainPage from './MainPage';
import Header from './Header';

const App = () => {
	return (
		<div>
			
			<BrowserRouter>
				<div>
					<Header />
					<Route path="/" exact component={MainPage} />
					<Route path="/catch/fish" exact component={Fish} />
					<Route path="/collect/fossil" exact component={Fossil} />
				</div>
			</BrowserRouter>
		</div>
		
	);
}

export default App;