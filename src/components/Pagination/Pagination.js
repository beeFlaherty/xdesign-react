import React from 'react';

const Pagination = (props) => {
	const pages = [];

	for (let i = 1; i <= props.numberOfPages;  i += 1) {
		pages.push(<li className="pagination_navigationItem" key={i}><button className="btn btn--page" onClick= {props.paginationHandler.bind(this, i)}>{i}</button></li>)
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
