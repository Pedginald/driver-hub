import React, { useState } from 'react';
import UnassignedOrders from './UnassignedOrders';
import Drivers from './Drivers';
import { DragDropContext } from 'react-beautiful-dnd';

const MainHub = () => {
	return (
		<div className='container-fluid mt-4'>
			<div className='row'>
				<DragDropContext onDragEnd={result => console.log(result)}>
					<UnassignedOrders id='column1'/>
					<Drivers id='column2'/>
				</DragDropContext>
			</div>
		</div>
	)
};

export default MainHub;