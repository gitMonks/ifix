import React from 'react';
import { Link } from 'react-router';

const DevicesHome = () => (
	<div id="book">
		<div className="container hidden-xs hidden-sm">
			<div className="row text-center">
				<div className="col-xs-2 image-container">
					<Link to="/select-device/mobile">
						<img src="/img/icons/mobile.png" alt=""/>
						<p>Iphone | Mobile</p>
					</Link>
					<div className="image-overlay"></div>
				</div>
				<div className="col-xs-2 ">
					<Link to="/select-device/tablet">
						<img src="/img/icons/tablet.png" alt=""/>
						<p>Ipad | Tablet</p>
					</Link>
				</div>
				<div className="col-xs-2">
					<Link to="/select-device/laptop">
						<img src="/img/icons/laptop.png" alt=""/>
						<p>Laptop | PC</p>
					</Link>
				</div>	
				<div className="col-xs-2">
					<Link to="/select-device/imac">
						<img src="/img/icons/pc.png" alt=""/>
						<p>iMac | Macbook</p>
					</Link>
				</div>
				<div className="col-xs-2">
					<Link to="/select-device/game">
						<img src="/img/icons/console.png" alt=""/>
						<p>Game Console</p>
					</Link>
				</div>
				<div className="col-xs-2">
					<Link to="/select-device/tv">
						<img src="/img/icons/television.png" alt=""/>
						<p>TV</p>
					</Link>
				</div>
			</div>
		</div>

		<div className="container-fluid hidden-md hidden-lg">
			<div className="row text-center">
				<div className="col-xs-2">
					<Link to="/select-device/mobile">
						<img src="/img/icons/mobile.png" alt=""/>
						<p>Iphone | Mobile</p>
					</Link>
				</div>
				<div className="col-xs-2 ">
					<Link to="/select-device/tablet">
						<img src="/img/icons/tablet.png" alt=""/>
						<p>Ipad | Tablet</p>
					</Link>
				</div>
				<div className="col-xs-2">
					<Link to="/select-device/laptop">
						<img src="/img/icons/laptop.png" alt=""/>
						<p>Laptop | PC</p>
					</Link>
				</div>	
				<div className="col-xs-2">
					<Link to="/select-device/imac">
						<img src="/img/icons/pc.png" alt=""/>
						<p>iMac | Macbook</p>
					</Link>
				</div>
				<div className="col-xs-2">
					<Link to="/select-device/game">
						<img src="/img/icons/console.png" alt=""/>
						<p>Game Console</p>
					</Link>
				</div>
				<div className="col-xs-2">
					<Link to="/select-device/tv">
						<img src="/img/icons/television.png" alt=""/>
						<p>TV</p>
					</Link>
				</div>
			</div>
		</div>
	</div>
);

export default DevicesHome;