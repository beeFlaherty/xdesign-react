import React from 'react';
import LaunchDetail from "../../components/LaunchDetail/LaunchDetail";
import './_launchList.scss';

const LaunchList = () => {
	return  <section className="launchList">
				<ul>
					<LaunchDetail />
				</ul>

			</section>
}

export default LaunchList;
