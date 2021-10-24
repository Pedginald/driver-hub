import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { GiSave } from 'react-icons/gi';
import { ImPencil2 } from 'react-icons/im'

const OrderCard = ({ orderDetails, index, status }) => {
	const { orderId, description, revenue, cost } = orderDetails;
	const [isAssigned] = useState(status);
	const [isEditing, setIsEditing] = useState(false);

	const handleChange = () => {
		
	}

	const handleClick = (orderId) => {
		setIsEditing(!isEditing);
	}

	console.log(isEditing);

	return (
		<Draggable 
			key={orderId} 
			draggableId={orderId} 
			index={index}
		>
			{(provided, snapshot) => {
				return (
					<div className='border'
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						ref={provided.innerRef}
					>	
						<p>{description}</p>
						{isEditing ?
							<>
								<input onChange={handleChange}></input>
								<input onChange={handleChange}></input>
								{isAssigned ?
									undefined :
									<button onClick={() => handleClick(orderId)}>
										<GiSave />
									</button>
								}
							</>
							:
							<>
								<p>{revenue}</p>
								<p>{cost}</p>
								{isAssigned ?
									undefined :
									<button onClick={() => handleClick(orderId)}>
										<ImPencil2 />
									</button>
								}
							</>
						}
					</div>
				);
			}}
		</Draggable>
	)
};

export default OrderCard;