/**** Determines the drop area and appropriately structures the new objects ****/
export const stateFunction = (dropArea, newOrders, drivers) => 
dropArea === 'unassignedOrderTable' ? 
	{
		[dropArea]: {
			orderIds: newOrders
		}
	} : 
	{
		driverTable: {
			...drivers,
			[dropArea]: {
				...drivers[dropArea],
				orderIds: newOrders
			}
		}
	};