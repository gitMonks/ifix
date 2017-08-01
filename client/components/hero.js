import React,  { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import CallMe from '../../imports/collections/call_me';


class Hero extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			number: '',
			message: ''
		}

		this.onCallMeSubmit = this.onCallMeSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(e) {
		e.preventDefault();
		this.setState({[e.target.name]: e.target.value}); 
	}

	isValid(caller){
		const message = '';
		let validProp = false;
		let numberCheck = /[0-9]+/;
		
		if(!caller.name.length){
			this.setState({ message: "invalid name. Name should be at least 1 character long"});
			return false;
		} 
		if (!numberCheck.test(caller.number)) {
			this.setState({ message: "invalid number. Numbers only please"});
			return false;
		}
		if (caller.number.length < 6){
			this.setState({message: "invalid number. Number should at leaset have six characters"})
			return false;
		} 
		this.setState({message: ''})

	}

	onCallMeSubmit(event) {
		event.preventDefault();
		let caller = {
			name: this.state.name,
			number: this.state.number
		};

		if( this.isValid(caller) ){
			Meteor.call('callMe.insert', caller);	
		} else {
			// show error
		}
		
		
		// ReactDOM.findDOMNode(this.refs.name).value = '';
		// ReactDOM.findDOMNode(this.refs.phone).value = '';
		
		// console.log("sending email");
		// Meteor.call('sendEmail', caller);
	}
	render() {
		return (
			<div id="hero" className="row">
				<div className="overlay">
					<div className="container">
						<div className="row">
							<div className="col-xs-12 col-md-8">
								<h2>Pick & Drop Repairs</h2>
								<p>We repair your gadgets within 2-12 hours*</p>
								<h2>Call Out Repairs</h2>
								<p>We can fix your IT problems at your home or office</p>
								<h1>Iphone Repair Specialist</h1>
								<p></p>
							</div>
							<div className="col-xs-12 col-md-4">
								<div id="call-us">
								 	<p>Call to book a repair</p>
								 	<h3>0208123456</h3>
								 	<p>Lines Open 8:30 - 22:00 <br />
								 		Emergency 24/7
								 	</p>
								 	<h3>Or let us call you back</h3>
								 	<form onSubmit={this.onCallMeSubmit}>
								 		<div className="row">
								 			<div className="col-xs-12">
								 				<p className="text-danger">{this.state.message}</p>
										 		<input 
										 			name="name" 
										 			type="text"  
										 			placeholder="Your name" 
										 			onChange={this.handleInputChange} 
										 			value={this.state.name}
										 		/>
										 		<input
										 			name="number"
										 			type="text"
										 			placeholder="Your number"
										 			onChange={this.handleInputChange}
										 			value={this.state.number}
										 		/>
										 	</div>
										 	<div className="col-xs-12">
										 		<button className="btn btn-primary" >Request Callback</button>
										 	</div>
									 	</div>
								 	</form>
							 	</div>
							 </div>
						 </div>
						 <div className="row">
				 	 		<ul className="promise">
						 		<div className="col-xs-6 col-md-3">
						 			<li><h4>No Fix No Fee</h4></li>
						 		</div>
						 		<div className="col-xs-6 col-md-3">
						 			<li><h4>Upfront Quotes</h4></li>
						 		</div>
						 		<div className="col-xs-6 col-md-3">
						 			<li><h4>Quality Parts</h4></li>
						 		</div>
						 		<div className="col-xs-6 col-md-3">
						 			<li><h4>90 Days Warranty</h4></li>
						 		</div>
						 	</ul>
						 </div>
					 </div>
				</div>
			</div>
		);

	}
} 

export default Hero;