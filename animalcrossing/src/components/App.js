import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Header from './Header';

const App = () => {
	return (
		<div>
			
			<BrowserRouter>
				<div>
					<Header />
					{/* <Route path="/" exact component={MainPage} /> */}
				</div>
			</BrowserRouter>
		</div>
		
	);
}

export default App;