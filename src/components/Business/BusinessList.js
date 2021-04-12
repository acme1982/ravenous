import React from 'react';
import Business from './Business';
import '../Business/businessList.css';

class BusinessList extends React.Component {
	render() {
		return (
			<div className="BusinessList">
				{this.props.businessArr.map((business) => (
					<Business business={business} />
				))}
			</div>
		);
	}
}

export default BusinessList;
