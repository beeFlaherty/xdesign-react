import React from 'react';

const Filters = (props) => {
	const switchTo = () => {
		let setTo= '';
		if (props.sortBy === 'asc') {
			setTo = 'desc';
		} else {
			setTo = 'ascending';
		}
		return setTo;
	}

	const switchLabel = () => {
		let label= '';
		if (switchTo() === 'asc') {
			label = 'Ascending';
		} else {
			label = 'Descending';
		}
		return label;
	}

	const yearsMarkup =[];
	const firstYear = 2006;
	const currentYear = new Date().getFullYear();

	for (let i = currentYear; i >= firstYear;  i -= 1) {
		yearsMarkup.push(<option key={i} value= {i}>{i}</option>);
	}

	return  <div className="filters">
				<select className="filters_button buttonSelect" onChange= {props.filterHandler.bind(this)}>
					<option value= "">Filter By Year</option>
					<option value= "">All</option>

					{yearsMarkup}
				</select>
				<button className="filters_button btn btn--sort" onClick= {props.sortHandler.bind(this,switchTo())}>Sort {switchLabel()}</button>
			</div>
}

export default Filters;
