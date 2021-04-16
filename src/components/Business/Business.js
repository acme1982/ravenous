import React from 'react';
import '../Business/business.css';
class Business extends React.Component {
	render() {
		console.log(this.props.business + 'business');
		return (
			<div className="Business">
				<div className="image-container">
					<img
						src={this.props.business.image_url}
						alt={this.props.business.name}
					/>
				</div>
				<h2>{this.props.business.name}</h2>
				<div className="Business-information">
					<div className="Business-address">
						<p>{this.props.business.location.display_address}</p>
						<p>{this.props.business.location.city}</p>
						<p>{`${this.props.business.location.city} ${this.props.business.location.zip_code}`}</p>
					</div>
					<div className="Business-reviews">
						<h3>{this.props.business.categories[0].alias.toUpperCase()}</h3>
						<h3 className="rating">{this.props.business.rating}</h3>
						<p>{this.props.business.review_count}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Business;
