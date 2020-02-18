import React from 'react';

const LaunchDetail = (props) => {

	return  <p className="launchDetail">
				<span className="launchDetail_number">{props.launch.flight_number}</span>
				<span className="launchDetail_name">{props.launch.mission_name} </span>
				<span className="launchDetail_detailWrap">
					<span className="launchDetail_date">{props.launch.launch_date_local} </span>
					<span className="launchDetail_rocket">{props.launch.rocket.rocket_name}</span>
				</span>
			</p>
}

export default LaunchDetail;
