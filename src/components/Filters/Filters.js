import React from 'react';
import './_filters.scss';

const Filters = (props) => {
	const switchTo = () => {
		let setTo= '';
		if (props.sortBy === 'asc') {
			setTo = 'desc';
		} else {
			setTo = 'asc';
		}
		return setTo;
	}
	const yearsMarkup =[];
	const firstYear = 2006;
	const currentYear = new Date().getFullYear();

	for (let i = currentYear; i >= firstYear;  i -= 1) {
		yearsMarkup.push(<option key={i} value= {i}>{i}</option>);
	}

	return  <div className="Filters">
				<select onChange= {props.filterHandler.bind(this)}>
					<option value= "">Filter By Year</option>
					<option value= "">All</option>

					{yearsMarkup}
				</select>
				<button onClick= {props.sortHandler.bind(this,switchTo())}>Sort {switchTo()}</button>
			</div>
}

export default Filters;
