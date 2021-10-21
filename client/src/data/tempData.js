const dataBase = {
	orderTable: {
		ord1: {
			orderId: 'ord1', 
			location: 'Toronto to Barrie', 
			description: 'Construction Materials', 
			revenue: '100.00', 
			cost: '55.50' 
		},
		ord2: {
			orderId: 'ord2', 
			location: 'Wawa to Sudbury', 
			description: 'Construction Materials', 
			revenue: '1300.00', 
			cost: '70.00'
		},
		ord3: { 
			orderId: 'ord3', 
			location: 'Chicago to Hamilton', 
			description: 'Wood and Lumber', 
			revenue: '1500.00', 
			cost: '95.00' 
		},
		ord4: { 
			orderId: 'ord4', 
			location: 'Milton to Oakville', 
			description: 'Wood and Lumber', 
			revenue: '60.00', 
			cost: '100.50' 
		}
	},

	unassignedOrderTable: {
		unassigned: {
			orderIds: ['ord1', 'ord2', 'ord3', 'ord4']
		}
	},

	driverTable: {
		drv1: {
			driverId: 'drv1',
			name: "Steve Williams",
			orderIds: []
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