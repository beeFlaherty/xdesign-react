import React from 'react';
import './_app.scss';
import Header from "./components/Header/Header";
import LaunchList from "./containers/LaunchList/LaunchList";

function App() {
	return (
	<div className="App">
		<Header />
		<LaunchList />
	</div>
	);
}

export default App;
