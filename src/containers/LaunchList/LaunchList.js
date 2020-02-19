import React from 'react';
import { connect } from "react-redux";
import axios from 'axios';

import {LaunchDetail} from "../../components/LaunchDetail/LaunchDetail";
import Pagination from "../../components/Pagination/Pagination";
import Filters from "../../components/Filters/Filters";

const apiBase = 'https://api.spacexdata.com/v3/launches?filter=flight_id,flight_number,mission_name,launch_date_local,launch_date_utc,rocket/rocket_name';

export class LaunchList extends React.Component {
	componentDidMount() {
		this.loadData();
	}

	componentDidUpdate(prevProps){
		// this check makes sure we only update when our filter props change
		if(this.props.filterByYear !== prevProps.filterByYear ||
		this.props.sortBy !== prevProps.sortBy ||
		this.props.pageNumber !== prevProps.pageNumber ){
				this.loadData();
		}
	}

	upDateDataHandler = (data, total, resultsPerPage) => {
		this.props.onDataUpdate(data, total, resultsPerPage);
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
				this.upDateDataHandler(response.data, response.headers['spacex-api-count'], this.props.resultsPerPage );
				this.props.toggleLoadingState();
		});
	}

	render() {
	return (
		<div className={"launchList " + (this.props.loading ? 'loading' : 'loaded')} aria-live="polite">
			<div className="launchList_imageContainer">
				<img className="launchList_image" src="assets/img/launch-home.png" srcset="assets/img/launch-home@2x.png 2x" alt="Launch" />
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
	);
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
		loading: state.loading
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onDataUpdate: (data, total, resultsPerPage) => {
			const numberOfPages = Math.ceil(total/resultsPerPage);
			dispatch({type: 'UPDATE_DATA', payload:data, total: total, numberOfPages: numberOfPages})
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
