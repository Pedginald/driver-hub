import React from 'react';
import { orders } from '../data/tempData';
import { Draggable, Droppable } from 'react-beautiful-dnd';

const onDragEnd = () => {
	
}

const UnassignedOrders = ({ id }) => {
	return (
		<div className='col'>
			<h2>Unassigned orders</h2>
			<Droppable droppableId={id}>
				{(provided, snapshot) => {
					return (
						<div
							{...provided.droppableProps}
							ref={provided.innerRef}
						>
							{orders.map((order, index) => {
								return (
									<Draggable key={order.id} draggableId={order.id} index={index}>
									{(provided, snapshot) => {
										return (
											<div className='border'
												{...provided.draggableProps}
												{...provided.dragHandleProps}
												ref={provided.innerRef}
											>
												<p>{order.description}</p>
											</div>
										);
									}}
									</Draggable>
								);
							})}
							{provided.placeholder}
						</div>
					);
				}}
			</Droppable>
		</div>
	);
};

export default UnassignedOrders;