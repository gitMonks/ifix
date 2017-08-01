import React, { Component } from 'react';

class SelectRepair extends Component {
	render() {
		return(
			<div className="container">
				<h1>{this.props.params.device}</h1>
			<h2>{this.props.params.repair}</h2>
			
			</div>
		)
	}
}

export default SelectRepair;