import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import OrderCard from './OrderCard';

const DriverCard = ({ driverId, driverDetails }) => {
	const { name, orders } = driverDetails;

	return (
		<Droppable droppableId={driverId}>
			{(provided, snapshot) => {
				return (
					<div
						ref={provided.innerRef}
						{...provided.droppableProps}
					>
						{name}
						{orders.map((order, index) => {
							return (
								<OrderCard key={order.orderId} orderDetails={order} index={index}/>
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