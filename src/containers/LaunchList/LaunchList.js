import React from 'react';
import { connect } from "react-redux";
import axios from 'axios';

import LaunchDetail from "../../components/LaunchDetail/LaunchDetail";
import Pagination from "../../components/Pagination/Pagination";
import Filters from "../../components/Filters/Filters";

import './_launchList.scss';

const api = 'https://api.spacexdata.com/v3/launches?filter=flight_id,flight_number,mission_name,launch_date_local,rocket/rocket_name&limit=10&order=desc&launch_year=';

//normal first page url
//https://api.spacexdata.com/v3/launches?filter=flight_id,flight_number,mission_name,launch_date_local,rocket/rocket_name&limit=10

//sort by asc
//https://api.spacexdata.com/v3/launches?filter=flight_id,flight_number,mission_name,launch_date_local,rocket/rocket_name&limit=10&sort=desc

export class LaunchList extends React.Component {
	componentDidMount() {
		axios.get(api)
			.then(response => {
				this.upDateDataHandler(response.data, response.headers['spacex-api-count'], this.props.resultsPerPage );
			});

	}

	upDateDataHandler = (data, total, resultsPerPage) => {
		this.props.onDataUpdate(data, total, resultsPerPage);
	}

	filterHandler =(value, event) => {
		console.log(value, event);
	}

	sortHandler =(value, event) => {
		console.log(value, event);
	}

	paginationHandler =(value, event) => {
		console.log(value, event);
	}

	render() {
	return (
		<div>
			<Filters filterHandler = { this.filterHandler } sortHandler = {this.sortHandler} />
	  <ul>
		{this.props.launches.map((launch) =>
			<li key={launch.flight_number}><LaunchDetail launch= {launch}/></li>
		)}
	  </ul>
	  	<Pagination
			pageNumber= {this.props.pageNumber}
			numberOfPages = { this.props.numberOfPages }
			totalResults = { this.props.totalResults}
			paginationHandler ={ this.paginationHandler }
		/>
	  </div>
	);
  }
};

const mapStateToProps = state => {
  return {
		launches: state.launches,
		pageNumber:state.pageNumber,
		totalResults:state.totalResults,
		resultsPerPage:state.resultsPerPage,
		numberOfPages: state.numberOfPages
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onDataUpdate: (data, total, resultsPerPage) => {
			const numberOfPages = Math.ceil(total/resultsPerPage);
			dispatch({type: 'UPDATE_DATA', payload:data, total: total, numberOfPages: numberOfPages})
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LaunchList);
