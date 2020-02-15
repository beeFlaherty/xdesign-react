import React from 'react';
import './_launchDetail.scss';

const LaunchDetail = (props) => {
	return  <p className="launchDetail">
				<span>{props.launch.flight_number}</span>
				<span>{props.launch.mission_name} </span>
				<span>{props.launch.launch_date_local} </span>
				<span>{props.launch.rocket.rocket_name}</span>
			</p>
}

export default LaunchDetail;
