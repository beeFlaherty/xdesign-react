import React from 'react';
import { connect } from "react-redux";
import axios from 'axios';

import {LaunchDetail} from "../../components/LaunchDetail/LaunchDetail";
import Pagination from "../../components/Pagination/Pagination";
import Filters from "../../components/Filters/Filters";

const apiBase = 'https://api.spacexdata.com/v3/launches?filter=flight_id,mission_name,flight_number,launch_date_utc,rocket/rocket_name&sort=launch_date_utc';

export class LaunchList extends React.Component {
	componentDidMount() {
		this.loadData();
	}

	componentDidUpdate(prevProps){
		// this check makes sure we only update when our filter props change
		if(this.props.filterByYear !== prevProps.filterByYear ||
		this.props.sortBy !== prevProps.sortBy ||
		this.props.pageNumber !== prevProps.pageNumber ||
		this.props.message !== prevProps.message ) {
				this.loadData();
		}
	}

	upDateDataHandler = (data, total, resultsPerPage, message) => {
		this.props.onDataUpdate(data, total, resultsPerPage, message);
	}

	filterHandler =(event) => {
		this.props.onFilterChange(event.target.value);
	}

	sortHandler =(value) => {;
		this.props.onSortChange(value);
	}

	paginationHandler =(value) => {
		this.props.onPaginationChange(value);
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
				let message = "";
				if (response.data.length === 0) {
					message = "No results Found"
				}
				this.upDateDataHandler(response.data, response.headers['spacex-api-count'], this.props.resultsPerPage, message );
				this.props.toggleLoadingState();
			}).catch(error => {
					let message = "There has been an error.";
					this.upDateDataHandler([], 0, this.props.resultsPerPage, message );
					this.props.toggleLoadingState();
			});
	}

	render() {
		if (this.props.launches.length > 0) {
			return (

				<div className={"launchList " + (this.props.loading ? 'loading' : 'loaded')} aria-live="polite">
					<div className="launchList_imageContainer">
						<img className="launchList_image" src="assets/img/launch-home.png" srcSet="assets/img/launch-home@2x.png 2x" alt="Launch" />
					</div>
					<div className="launchList_listContainer">
						<Filters sortBy= { this.props.sortBy }filterHandler = { this.filterHandler } sortHandler = {this.sortHandler} />
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
				</div>
			)
		}
		else {
			return (<div className={"launchList " + (this.props.loading ? 'loading' : 'loaded')} aria-live="polite">
						<div className="launchList_imageContainer">
							<img className="launchList_image" src="assets/img/launch-home.png" srcSet="assets/img/launch-home@2x.png 2x" alt="Launch" />
						</div>
						<div className="launchList_listContainer">
							<p className="launchList_error" >{this.props.message}</p>
						</div>
					</div>
					)
		}
	}
};

const mapStateToProps = state => {
  return {
		launches: state.launches,
		pageNumber:state.pageNumber,
		totalResults:state.totalResults,
		resultsPerPage:state.resultsPerPage,
		numberOfPages: state.numberOfPages,
		filterByYear: state.filterByYear,
		sortBy: state.sortBy,
		loading: state.loading,
		message: state.message
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onDataUpdate: (data, total, resultsPerPage, message) => {
			const numberOfPages = Math.ceil(total/resultsPerPage);
			dispatch({type: 'UPDATE_DATA', payload:data, total: total, numberOfPages: numberOfPages, message: message})
		},
		onFilterChange: (data) => {
			dispatch({type: 'CHANGE_FILTER', year:data })
		},
		onSortChange: (data) => {
			dispatch({type: 'CHANGE_SORT', sort:data })
		},
		onPaginationChange: (data) => {
			dispatch({type: 'CHANGE_PAGE_NUMBER', pageNumber:data })
		},
		toggleLoadingState: () => {
			dispatch({type: 'TOGGLE_LOADING' })
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LaunchList);
