import React, { Component } from 'react';

import Navigation from './navigation';
import Footer from './footer';

class App extends Component {
	render() { 
		return (
			<div className="container-fluid">
				<Navigation />
				{this.props.children}
				<Footer />
			</div>
		);
	} 
}
		
export default App;