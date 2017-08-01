import React from 'react';
import { Link } from 'react-router';

const Footer = () => (
	<div className="row">
		<footer className="container-fluid">
			<div className="row container">
				<div className="row">
					<div className="col-xs-4">
						<ul>
							<h4>Navigation</h4>
							<li>
								<a href="">Home</a>
							</li>
							<li>
								<a href="#book">Book A Repair</a>
							</li>
							<li>
								<a href="#how">How It Works</a>
							</li>
							<li>
								<a href="#coverage">Coverage Area</a>
							</li>
							<li>
								<a href="#contact">Contact Us</a>
							</li>
						</ul>
					</div>
					<div className="col-xs-4">
						<ul>
							<h4>Services</h4>
							<li>
								<Link to="/">Book A Repair</Link>
							</li>
							<li>
								<Link to="/">Call out Repair</Link>
							</li>
							<li>
								<Link to="/">Corporate Repairs</Link>
							</li>
							<li>
								<Link to="/">Phone Unlocking</Link>
							</li>
							<li>
								<Link to="/">Affiliate Programme</Link>
							</li>
						</ul>
					</div>
					<div className="col-xs-4">
					</div>
				</div>
			</div>
		</footer>
	</div>
);

export default Footer;