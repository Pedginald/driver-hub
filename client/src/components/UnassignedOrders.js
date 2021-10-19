import React, { useState } from 'react';
import { orders } from '../data/tempData';
import { Droppable } from 'react-beautiful-dnd';
import OrderCard from '../cards/OrderCard';

const UnassignedOrders = ({ id }) => {
	const [unassignedOrders, setUnassignedOrders] = useState(orders);

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
							{unassignedOrders.map((order, index) => {
								return (
									<OrderCard key={order.orderId} orderDetails={order} index={index}/>
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