import React from 'react';
import { Link } from 'react-router';

const Navigation = () => (
	<div className="row">
	<nav className="navbar navbar-default navbar-fixed-top">
	  <div className="container-fluid">
	    <div className="navbar-header">
	      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
	        <span className="sr-only">Toggle navigation</span>
	        <span className="icon-bar"></span>
	        <span className="icon-bar"></span>
	        <span className="icon-bar"></span>
	      </button>
	      <Link className="navbar-brand" to="/">iFix247</Link>
	    </div>

	    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
	      <ul className="nav navbar-nav navbar-right">
	        <li className="active"><Link to="/" href="#book">Home <span className="sr-only">(current)</span></Link></li>
	        <li><Link to="/select-device">Book Repair</Link></li>
	        <li><a href="#how">How It Works</a></li>
	        <li><a href="">Contact Us</a></li>
	      </ul>
	    </div>
	  </div>
	</nav>
</div>
);

export default Navigation;