import React from 'react';
import { connect } from "react-redux";

import LaunchDetail from "../../components/LaunchDetail/LaunchDetail";
import './_launchList.scss';

export class LaunchList extends React.Component {
	render() {
	return (
	  <ul>
		{this.props.launches.map((launch) =>
			<li key={launch.flight_number}><LaunchDetail launch= {launch}/></li>
		)}
	  </ul>
	);
  }
};

const mapStateToProps = state => {
  return { launches: state.launches };
};

export default connect(mapStateToProps)(LaunchList);
