import React from 'react';
import UnassignedOrders from './UnassignedOrders';
import Drivers from './Drivers';
import { DragDropContext } from 'react-beautiful-dnd';

const onDragEnd = () => {

}

const MainHub = () => {
	return (
		<div className='container-fluid mt-4'>
			<div className='row'>
				<DragDropContext onDragEnd={onDragEnd}>
					<UnassignedOrders id='unassignedOrders'/>
					<Drivers id='drivers'/>
				</DragDropContext>
			</div>
		</div>
	)
};

export default MainHub;