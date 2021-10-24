import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import OrderCard from './OrderCard';

const DriverCard = ({ driverId, contents, allOrders }) => {
	const { name, orderIds } = contents;

	return (
		<Droppable droppableId={driverId}>
			{(provided, snapshot) => {
				return (
					<div
						ref={provided.innerRef}
						{...provided.droppableProps}
					>
						{name}
						{orderIds.map((orderId, index) => {
							const orderDetails = allOrders[orderId]
							return (
								<OrderCard 
									key={orderId} 
									orderDetails={orderDetails} 
									index={index}
									status={true}
								/>
							);
						})}
						{provided.placeholder}
					</div>
				);
			}}
		</Droppable>
	)
};

export default DriverCard;