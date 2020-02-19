import React from 'react';

const getFormattedDate = (dateString)=> {
		const date = new Date(dateString);

		const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

		let month = months[date.getMonth()];
		let day = date.getDate();

		const str = ordinal(day) + " " + month + " " + date.getFullYear();

		return str;
	}

	const ordinal =(day) => {
		var test = day % 10;

		if (test === 1 & day !== 11) {
			return day + "st";
		}
		if (test === 2 & day !== 12) {
			return day + "nd";
		}
		if (test === 3 & day !== 13) {
			return day + "rd";
		}
		return day + "th";
	}

const LaunchDetail = (props) => {

	return  <p className="launchDetail">
				<span className="launchDetail_number">{props.launch.flight_number}</span>
				<span className="launchDetail_name">{props.launch.mission_name} </span>
				<span className="launchDetail_detailWrap">
					<span className="launchDetail_date">{getFormattedDate(props.launch.launch_date_utc)} </span>
					<span className="launchDetail_rocket">{props.launch.rocket.rocket_name}</span>
				</span>
			</p>
}

export  { LaunchDetail, getFormattedDate}
