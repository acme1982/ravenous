import React from 'react';
import './searchBar.css';

const sortByOptions = {
	'Best Match': 'best_match',
	'Highest Rated': 'rating',
	'Most Reviewed': 'review_count',
};

//const api = 'https://api.yelp.com/v3/businesses/search?term={}&location={city}&categories={for example french, bars}&limit=10&sort_by={rating default best match}';

class SearchBar extends React.Component {
	renderSortByOptions = () => {
		return Object.keys(sortByOptions).map((sortByOption) => {
			const sortByOptionValue = sortByOptions[sortByOption];
			return <li key={sortByOptionValue}>{sortByOption}</li>;
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
					<input placeholder="Search Businesses" />
					<input placeholder="Where?" />
				</div>
				<div className="SearchBar-submit">
					<a>Let's Go</a>
				</div>
			</div>
		);
	}
}

export default SearchBar;
