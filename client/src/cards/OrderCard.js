import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const OrderCard = ({ orderDetails, index }) => {
	const { orderId, description, revenue, cost } = orderDetails;

	return (
		<Draggable key={orderId} draggableId={orderId} index={index}>
			{(provided, snapshot) => {
				return (
					<div className='border'
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						ref={provided.innerRef}
					>
						<p>{description}</p>
						<p>{revenue}</p>
						<p>{cost}</p>
					</div>
				);
			}}
		</Draggable>
	)
};

export default OrderCard;