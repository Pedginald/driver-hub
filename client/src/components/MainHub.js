import React from 'react';
import UnassignedOrders from './UnassignedOrders';
import Drivers from './Drivers';
import { DragDropContext } from 'react-beautiful-dnd';

const MainHub = ({ state, setState }) => {
	const { driverTable, orderTable, unassignedOrderTable } = state;
	
	const handleDragEnd = result => {
		const { destination, source, draggableId } = result;

		if (!destination) return;
	
		if (
			 destination.droppableId === source.droppableId &&
			 destination.index === source.index
		) return;

		const dropArea = state[source.droppableId];
		const newOrderIds = Array.from(dropArea.orderIds);
		newOrderIds.splice(source.index, 1);
		newOrderIds.splice(destination.index, 0, draggableId);
		
		const newDropArea = {
			...dropArea,
			orderIds : newOrderIds
		};

	};

	return (
		<div className='container-fluid mt-4'>
			<div className='row'>
				<DragDropContext onDragEnd={(result) => handleDragEnd(result)}>
					<UnassignedOrders 
						contents={unassignedOrderTable}
						allOrders={orderTable}
					/>
					<Drivers 
						drivers={driverTable}
						allOrders={orderTable}
					/>
				</DragDropContext>
			</div>
		</div>
	)
};

export default MainHub;