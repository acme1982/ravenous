const apiKey =
	'KvmmsFoKcWDoZwoBepUfDNFdpT4JQXf8fpXkP57eh2cXfwJM5QhTUwgCdrt-DFYQeqU5lnth57Q97C2DQbZq01wV16jE527JfRMKRfu_p-t42SYSyqiewMqHDoR1YHYx';

export const Yelp = {
	async search(term, location, sortBy) {
		try {
			const response = await fetch(
				`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
				{ headers: { Authorization: `Bearer ${apiKey}` } },
			);
			if (response.ok) {
				const jsonResponse = await response.json();
				return jsonResponse.businesses;
			} else {
				const jsonResponse = await response.json();
				return jsonResponse.error;
			}
		} catch (err) {
			return err;
		}
	},
};
