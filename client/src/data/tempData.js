export const orders = [
	{ 
		orderId: 'ord1', 
		location: 'Toronto to Barrie', 
		description: 'Construction Materials', 
		revenue: '100.00', 
		cost: '55.50' 
	},
	{ 
		orderId: 'ord4', 
		location: 'Milton to Oakville', 
		description: 'Wood and Lumber', 
		revenue: '60.00', 
		cost: '100.50' 
	}
];

export const driverDB = {
	drv1: {
		name: "Steve Williams",
		orders: [
			{ 
				orderId: 'ord2', 
				location: 'Wawa to Sudbury', 
				description: 'Construction Materials', 
				revenue: '1300.00', cost: '70.00' 
			}
		]
	},
	drv2: {
		name: 'Chris Horton',
		orders: [
			{ 
				orderId: 'ord3', 
				location: 'Chicago to Hamilton', 
				description: 'Wood and Lumber', 
				revenue: '1500.00', 
				cost: '95.00' 
			}
		]
	},
	drv3: {
		name: 'Alex Novak',
		orders: []
	}
};