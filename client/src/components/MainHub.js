import React, { useState } from 'react';
import UnassignedOrders from './UnassignedOrders';
import Drivers from './Drivers';
import { DragDropContext } from 'react-beautiful-dnd';
import { stateFunction } from '../functions/functions';

const MainHub = ({ allData }) => {
	const [state, setState] = useState(allData);
	const { driverTable, orderTable, unassignedOrderTable } = state;
	console.log(state);

	const handleDragEnd = result => {
		const { destination, source } = result;

		const zoneLocator = zone => 
			zone.droppableId === 'unassignedOrderTable' ?
				unassignedOrderTable :
				driverTable[zone.droppableId];

		if (!destination) return;
	
		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		) return;

		const sourceZone = zoneLocator(source);

		const destinationZone = zoneLocator(destination);

		const sourceOrders = [...sourceZone.orderIds];
		const destinationOrders = source.droppableId !== destination.droppableId ?
			[...destinationZone.orderIds] :
			sourceOrders;
		const [removed] = sourceOrders.splice(source.index, 1);
		destinationOrders.splice(destination.index, 0, removed);
		const sourceState = stateFunction(source.droppableId, sourceOrders, driverTable);
		const destinationState = stateFunction(destination.droppableId, destinationOrders, driverTable);
		
		const newState = source.droppableId !== destination.droppableId ? {
			...state,
			...sourceState,
			...destinationState
		} : {
			...state,
			...sourceState,
		};

		setState(newState);
	};

	return (
		<div className='container-fluid mt-4'>
			<div className='row'>
				<DragDropContext onDragEnd={handleDragEnd}>
					<UnassignedOrders 
						orderList={unassignedOrderTable}
						allOrders={orderTable}
					/>
					<Drivers 
						contents={driverTable}
						allOrders={orderTable}
					/>
				</DragDropContext>
			</div>
		</div>
	)
};

export default MainHub;