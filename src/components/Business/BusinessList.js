import React from 'react';
import Business from './Business';
import '../Business/businessList.css';

class BusinessList extends React.Component {
	constructor(props) {
		super(props);
		this.renderBusiness = this.renderBusiness.bind(this);
	}
	componentDidUpdate(prevProps) {
		if (this.props.businesses !== prevProps.businesses) {
			this.renderBusiness();
		}
	}
	renderBusiness() {
		if (this.props.businesses instanceof Array) {
			return this.props.businesses.map((business) => {
				return <Business key={business.id} business={business} />;
			});
		} else {
			return <p>{this.props.businesses.description}</p>;
		}
	}
	render() {
		return <div className="BusinessList">{this.renderBusiness()}</div>;
	}
}

export default BusinessList;
