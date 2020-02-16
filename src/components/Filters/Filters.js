import React from 'react';
import './_filters.scss';

const Filters = (props) => {
	return  <div className="Filters">
				<select onChange= {props.filterHandler.bind(this,'Filter Handler')}>
					<option>Filter By Year</option>
					<option>2013</option>
				</select>
				<button onClick= {props.sortHandler.bind(this,'Sort Handler')}>Sort</button>
			</div>
}

export default Filters;
