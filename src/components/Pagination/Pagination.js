import React from 'react';

const Pagination = (props) => {
	const pages = [];

	for (let i = 1; i <= props.numberOfPages;  i += 1) {

		if(props.pageNumber === i) {
			pages.push(<li
				className="pagination_navigationItem"
				key={i}>
					<span
						className={"btn btn--page btn--active"}
						onClick= {props.paginationHandler.bind(this, i)}>{i}
					</span>
				</li>)
		} else {
			pages.push(<li
				className="pagination_navigationItem"
				key={i}>
					<button
						className="btn btn--page"
						onClick= {props.paginationHandler.bind(this, i)}>{i}
					</button>
				</li>)
		}
	}

	return  <div className="pagination">
				<nav role="navigation" aria-label="Pagination Navigation">
					<ul className="pagination_navigation">
						{ pages }
					</ul>
				</nav>
			</div>
}

export default Pagination;
