import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { GiSave } from 'react-icons/gi';
import { ImPencil2 } from 'react-icons/im'

const OrderCard = ({ orderDetails, index, status }) => {
	const { orderId, location, revenue, cost } = orderDetails;
	const [isAssigned] = useState(status);
	const [isEditing, setIsEditing] = useState(false);
	const [orderRevenue, setOrderRevenue] = useState()

	const handleChange = () => {
		
	}

	const handleClick = () => {
		setIsEditing(!isEditing);
	};

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
						<p>{location}</p>
						{isEditing ?
							<>
								<input onChange={handleChange} placeholder={revenue}></input>
								<input onChange={handleChange} placeholder={cost}></input>
								{isAssigned ?
									undefined :
									<button onClick={handleClick}>
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