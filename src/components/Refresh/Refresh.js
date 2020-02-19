import React from 'react';
import { connect } from "react-redux";
import axios from 'axios';

const apiBase = 'https://api.spacexdata.com/v3/launches?filter=flight_id,flight_number,mission_name,launch_date_local,rocket/rocket_name';

export class Refresh extends React.Component {

	upDateDataHandler = (data, total, resultsPerPage) => {
		this.props.onDataUpdate(data, total, resultsPerPage);
	}

	createUrl = () => {
		const offset = (this.props.pageNumber - 1) * this.props.resultsPerPage;
		return `${apiBase}&limit=${this.props.resultsPerPage}&order=${this.props.sortBy}&offset=${offset}&launch_year=${this.props.filterByYear}`;
	}

	loadData = () => {
			const urlFilter = this.createUrl();
			this.props.toggleLoadingState();
			axios.get(urlFilter)
			.then(response => {
				this.upDateDataHandler(response.data, response.headers['spacex-api-count'], this.props.resultsPerPage );
				this.props.toggleLoadingState();
		});
	}


	render() {
	return (
		<button onClick={this.loadData.bind(this)} className="header_reloadButton btn btn--reload">Reload Data</button>
	)}
}

const mapStateToProps = state => {
  return {
		launches: state.launches,
		pageNumber:state.pageNumber,
		totalResults:state.totalResults,
		resultsPerPage:state.resultsPerPage,
		numberOfPages: state.numberOfPages,
		filterByYear: state.filterByYear,
		sortBy: state.sortBy,
		loading: state.loading
	};
};


const mapDispatchToProps = dispatch => {
	return {
		onDataUpdate: (data, total, resultsPerPage) => {
			const numberOfPages = Math.ceil(total/resultsPerPage);
			dispatch({type: 'UPDATE_DATA', payload:data, total: total, numberOfPages: numberOfPages})
		},
		toggleLoadingState: (data) => {
			dispatch({type: 'TOGGLE_LOADING', pageNumber:data })
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Refresh);
