import React, { Component } from 'react';
import { Link } from 'react-router';

import DevicesHome from './devices_home';

export default class SelectDevice extends Component {
	constructor(props){
		super(props);
		this.state = {active: ''}
	}
	applyClassActive() {
		this.setState({
			active: 'active'
		});
		console.log(this.state.active)
	}
	getMakes(device) {
		let makes = [];
		switch (device){
			case "mobile":
				makes = [
					{_id: 0, name: "Apple", default: true},
					{_id: 1, name: "Samsung", default: false},
					{_id: 2, name: "Sony", default: false},
					{_id: 3, name: "HTC", default: false},
					{_id: 4, name: "Nokia/Microsoft", default: false},
					{_id: 5, name: "Nexus", default: false},
					{_id: 6, name: "Blackberyy", default: false},
				];
				break;
			case "tablet":
				makes = [
					{_id: 0, name: "Apple", default: true},
					{_id: 1, name: "Samsung", default: false},
					{_id: 2, name: "Sony", default: false},
					{_id: 3, name: "HTC", default: false},
					{_id: 4, name: "Nokia/Microsoft", default: false},
					{_id: 5, name: "Nexus", default: false},
					{_id: 7, name: "Lenovo", default: false},
					{_id: 8, name: "Asus", default: false},
					{_id: 9, name: "Dell", default: false},
					{_id: 10, name: "HP", default: false},
					{_id: 11, name: "Alcatel", default: false},
					{_id: 6, name: "Microsoft", default: false}

				];
				break;
			case "laptop":
				makes = [
					{_id: 0, name: "Apple", default: true},
					{_id: 7, name: "HP", default: false},
					{_id: 9, name: "Dell", default: false},
					{_id: 10, name: "Lenovo", default: false},
					{_id: 12, name: "Compaq", default: false},
					{_id: 13, name: "Acer", default: false},
					{_id: 1, name: "Samsung", default: false},
					{_id: 2, name: "Sony", default: false},
					{_id: 8, name: "Asus", default: false},
					{_id: 14, name: "Toshiba", default: false},
					
				];
				break;
			case "imac":
					makes = [
						{_id: 0, name: "Apple", default: true}
					];
				break
			case "game":
				makes = [
					{_id: 2, name: "Sony", default: true},
					{_id: 6, name: "Microsoft", default: true},
					{_id: 15, name: "Nintendo", default: true},
				]
				break;
			case "tv":
				makes = [
					{_id: 16, name: "Bush", default: false},
					{_id: 2, name: "Sony", default: false},
					{_id: 1, name: "Samsung", default: false},
					{_id: 14, name: "Toshiba", default: false},
					{_id: 17, name: "LG", default: false},
					{_id: 18, name: "JVC", default: false},
				]
		}
		return makes;
}
		
	renderMakes() {
		let makes = this.getMakes(this.props.params.device);
		return makes.map((make) => (
			<li key={make._id}>
				<a className={this.state.active} onClick={this.applyClassActive.bind(this)}>{make.name}</a>
			</li>
								
		));
	}
	render() {
		if(!this.props.params.device) {
			return (
				<div id="select-device">
					<DevicesHome />
				</div>
			)
		}
		return (
			<div id="select-device">
				<DevicesHome />
				<h2>Selected Device Type: {this.props.params.device}</h2>
					<div className="row">
						<div className="col-xs-4 col-md-3">
							<h4>Select Make</h4>
							<ul className="make">
									{this.renderMakes()}
								<li>
									<Link to="/select-repair">Other...</Link>
								</li>
							</ul>
						</div>
						<div className="col-xs-8 col-md-9">
							<h4>Select Model</h4>
							<ul className="model">
								<li className="col-xs-6 col-sm-4">
									<Link to="/select-repair/apple/ip7">Iphone 7 </Link>
								</li>
								<li className="col-xs-6 col-sm-4">
									<Link to="/select-repair/apple/ip6s">Iphone 6s </Link>
								</li>
								<li className="col-xs-6 col-sm-4 ">
									<Link to="/select-repair/apple/ip6splus">Iphone 6s+</Link>
								</li>
								<li className="col-xs-6 col-sm-4 ">
									<Link to="/select-repair/apple/ip6">Iphone 6 </Link>
								</li>
								<li className="col-xs-6 col-sm-4 ">
									<Link to="/select-repair/apple/ip6plus">Iphone 6+ </Link>
								</li>
								<li className="col-xs-6 col-sm-4 ">
									<Link to="/select-repair/apple/ip5s">Iphone 5s</Link>
								</li>
								<li className="col-xs-6 col-sm-4 ">
									<Link to="/select-repair/apple/ip5c">Iphone 5c</Link>
								</li>
								<li className="col-xs-6 col-sm-4 ">
									<Link to="/select-repair/apple/ip5">Iphone 5 </Link>
								</li>
								<li className="col-xs-6 col-sm-4 ">
									<Link to="/select-repair/apple/ip4s">Iphone 4s</Link>
								</li>
								<li className="col-xs-6 col-sm-4 ">
									<Link to="/select-repair/apple/ip4">Iphone 4</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
		);
	}
}