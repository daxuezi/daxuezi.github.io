import React from 'react';

import Header from './header';
import WhatDoIDo from './what-do-i-do';
import ResponsiveDesign from './responsive-design';
import RecentUpdate from './recent-update';
import Contact from './contact';


class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Header />
				<WhatDoIDo />
				<ResponsiveDesign />
				<RecentUpdate />
				<Contact />
			</div>
		);
	}
}

export default Home;