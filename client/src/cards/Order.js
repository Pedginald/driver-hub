import React from 'react';
import { Draggable } from 'react';

const Order = (order, index) => {
const { id, description, revenue, cost } = order;

	return (
		<Draggable key={id} draggableId={id} index={index}>
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

export default Order;