import React, { useState } from 'react';
import { orders } from '../data/tempData';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import Order from '../cards/Order';

const onDragEnd = () => {
	
}

const UnassignedOrders = ({ id }) => {
	const [unassignedOrders, setUnassignedOrders] = useState(orders);

	return (
		<div className='col'>
			<h2>Unassigned orders</h2>
			<Droppable droppableId={id} key={id}>
				{(provided, snapshot) => {
					return (
						<div
							{...provided.droppableProps}
							ref={provided.innerRef}
						>
							{unassignedOrders.map((order, index) => {
								return (
									<Draggable key={order.orderId} draggableId={order.orderId} index={index}>
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