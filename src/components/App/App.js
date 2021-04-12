import React from 'react';
import BusinessList from '../Business/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import '../App/app.css';
class App extends React.Component {
	render() {
		return (
			<div className="App">
				<h1>ravenous</h1>
				<SearchBar />
				<BusinessList />
			</div>
		);
	}
}

export default App;
