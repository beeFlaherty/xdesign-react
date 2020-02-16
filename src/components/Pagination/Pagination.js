import React from 'react';
import './_pagination.scss';

const Pagination = (props) => {
	return  <div className="pagination">
		<p>	page {props.pageNumber} of {props.numberOfPages}
			</p>
			<p>total results : { props.totalResults }</p>
			</div>
}

export default Pagination;
