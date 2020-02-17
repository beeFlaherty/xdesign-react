import React from 'react';
import './_pagination.scss';

const Pagination = (props) => {
	const pages = [];

	for (let i = 1; i <= props.numberOfPages;  i += 1) {
		pages.push(<li key={i}><button onClick= {props.paginationHandler.bind(this, i)}>{i}</button></li>)
	}

	return  <div className="pagination">
				<nav role="navigation" aria-label="Pagination Navigation">
					<ul>
						{ pages }
					</ul>
				</nav>
			</div>
}

export default Pagination;
