import React from 'react';

import Header from './header';
import style from './styles';


class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Header />
			</div>
		);
	}
}

export default Home;