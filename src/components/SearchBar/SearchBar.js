import React from 'react';
import './searchBar.css';

//const api = 'https://api.yelp.com/v3/businesses/search?term={}&location={city}&categories={for example french, bars}&limit=10&sort_by={rating default best match}';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			term: '',
			location: '',
			sortBy: 'best_match',
			sortByOptions: {
				'Best Match': 'best_match',
				'Highest Rated': 'rating',
				'Most Reviewed': 'review_count',
			},
		};
		this.handleTermChange = this.handleTermChange.bind(this);
		this.handleLocationChange = this.handleLocationChange.bind(this);
	}
	renderSortByOptions = () => {
		return Object.keys(this.state.sortByOptions).map((sortByOption) => {
			const sortByOptionValue = this.state.sortByOptions[sortByOption];
			return (
				<li
					className={this.getSortByClass(sortByOptionValue)}
					key={sortByOptionValue}
					// This will allow us to both bind to the current value of this (as we usually do in the constructor())
					// but also bind the current sortByOptionValue as the first argument to the method call,
					//ensuring the method is called with the appropriate value when clicked.
					onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
				>
					{sortByOption}
				</li>
			);
		});
	};
	getSortByClass = (sortByOption) => {
		if (this.state.sortBy === sortByOption) {
			return 'active';
		} else {
			return '';
		}
	};
	handleSortByChange = (sortByOption) => {
		this.setState({
			sortBy: sortByOption,
		});
	};
	handleTermChange = (e) => {
		this.setState({
			term: e.target.value,
		});
	};
	handleLocationChange = (e) => {
		this.setState({
			location: e.target.value,
		});
	};
	render() {
		return (
			<div className="SearchBar">
				{console.log(this.renderSortByOptions())}
				<div className="SearchBar-sort-options">
					<ul>{this.renderSortByOptions()}</ul>
				</div>
				<div className="SearchBar-fields">
					<input
						onChange={this.handleTermChange}
						placeholder="Search Businesses"
					/>
					<input onChange={this.handleLocationChange} placeholder="Where?" />
				</div>
				<div className="SearchBar-submit">
					<a>Let's Go</a>
				</div>
			</div>
		);
	}
}

export default SearchBar;
