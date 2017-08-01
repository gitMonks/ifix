import React from 'react';

import Hero from './hero';
import DevicesHome from './devices_home';
import HowItWorks from './how_it_works';
import CoverageArea from './coverage_area';

const Home = () => (
	<div>
		<Hero />
		<DevicesHome />
		<HowItWorks />
		<CoverageArea />
	</div>
);

export default Home;