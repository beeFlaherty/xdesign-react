import React from 'react';
import './_header.scss';

const Header = () => {
	return  <header className="header">
				<img className="header_logo" src="/assets/spacex-logo.png" alt=""/>
				<h1>SpaceX Launches</h1>
			</header>
}

export default Header;
