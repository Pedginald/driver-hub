import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import OrderCard from '../cards/OrderCard';

const UnassignedOrders = ({ contents, allOrders }) => {
	const { orderIds } = contents;

	return (
		<div className='col'>
			<h2>Unassigned orders</h2>
			<Droppable droppableId='unassignedOrderTable'>
				{(provided, snapshot) => {
					return (
						<div
							{...provided.droppableProps}
							ref={provided.innerRef}
						>
							{orderIds.map((orderId, index) => {
								const orderDetails = allOrders[orderId];
								return (
									<OrderCard 
										key={orderId}
										orderDetails={orderDetails} 
										index={index}
									/>
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