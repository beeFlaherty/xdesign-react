import React from 'react';

import Refresh from "../Refresh/Refresh"

const Header = () => {
	return  <header className="header">
				<img className="header_logo" src="/assets/spacex-logo.png" alt=""/>
				<h1 className="header_title"><span className="sr-only">SpaceX</span> Launches </h1>
				<Refresh />
			</header>
}

export default Header;
