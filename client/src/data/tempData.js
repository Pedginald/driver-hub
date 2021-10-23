const dataBase = {
	orderTable: {
		ord1: {
			orderId: 'ord1', 
			location: 'Toronto to Barrie', 
			description: 'Construction Materials', 
			revenue: 4200.00, 
			cost: 100.00,
		},
		ord2: {
			orderId: 'ord2', 
			location: 'Wawa to Sudbury', 
			description: 'Construction Materials', 
			revenue: 3948.45, 
			cost: 71.38,
		},
		ord3: { 
			orderId: 'ord3', 
			location: 'Chicago to Hamilton', 
			description: 'Wood and Lumber', 
			revenue: 1500.00, 
			cost: 95.00,
		},
		ord4: { 
			orderId: 'ord4', 
			location: 'Milton to Oakville', 
			description: 'Wood and Lumber', 
			revenue: 60.00, 
			cost: 100.50,
		},
		ord5: { 
			orderId: 'ord5', 
			location: 'Toronto to New York', 
			description: 'Meat', 
			revenue: 6739.72, 
			cost: 279.17,
		},
		ord6: { 
			orderId: 'ord6', 
			location: 'London to Manchester', 
			description: 'Meat', 
			revenue: 3618.08, 
			cost: 537.91,
		},
	},

	unassignedOrderTable: {
		orderIds: ['ord1', 'ord2', 'ord3', 'ord4']
	},

	driverTable: {
		drv1: {
			driverId: 'drv1',
			name: 'Steve Williams',
			orderIds: ['ord5', 'ord6']
		},
		drv2: {
			driverId: 'drv2',
			name: 'Chris Horton',
			orderIds: []
		},
		drv3: {
			driverId: 'drv3',
			name: 'Alex Novak',
			orderIds: []
		}
	}
};

export default dataBase;