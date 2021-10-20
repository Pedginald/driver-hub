export const orders = [
	{ orderId: 'ord1', description: 'Toronto to Barrie', revenue: '100.00', cost: '55.50' },
	{ orderId: 'ord4', description: 'Milton to Oakville', revenue: '60.00', cost: '100.50' }
];

export const driverDB = {
	drv1: {
		name: "Steve Williams",
		orders: [
			{ orderId: 'ord2', description: 'Wawa to Sudbury', revenue: '1300.00', cost: '70.00' }
		]
	},
	drv2: {
		name: 'Chris Horton',
		orders: [
			{ orderId: 'ord3', description: 'Chicago to Hamilton', revenue: '1500.00', cost: '95.00' }
		]
	},
	drv3: {
		name: 'Alex Novak',
		orders: []
	}
};