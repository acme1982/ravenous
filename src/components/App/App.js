import React from 'react';
import BusinessList from '../Business/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import '../App/app.css';

const business = {
	imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
	name: 'MarginOtto Pizzeria',
	address: '1010 Paddington Way',
	city: 'Flavortown',
	state: 'NY',
	zipCode: '10101',
	category: 'Italian',
	rating: 4.5,
	reviewCount: 90,
};

const businessArr = [
	business,
	business,
	business,
	business,
	business,
	business,
];
class App extends React.Component {
	render() {
		return (
			<div className="App">
				<h1>ravenous</h1>
				<SearchBar />
				<BusinessList businessArr={businessArr} />
			</div>
		);
	}
}

export default App;
