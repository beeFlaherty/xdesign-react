import React from 'react';
import { connect } from "react-redux";

import Header from "./components/Header/Header";
import LaunchList from "./containers/LaunchList/LaunchList";

function App(props) {
	return (
	<div className={"app " + (props.loading ? 'loading' : 'loaded')}>
		<Header />
		<LaunchList />
		<div className={"app_indicator" + (props.loading ? 'loading' : 'loaded')}>
			<p>Loading</p>
		</div>
	</div>
	);
}

const mapStateToProps = state => {
  return {
		loading: state.loading
	};
};

export default connect(mapStateToProps)(App);
