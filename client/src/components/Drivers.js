import React, { useState } from 'react';
import { driverDetails } from '../data/tempData';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import DriverCard from '../cards/DriverCard';

const Drivers = () => {
	const [drivers, setDrivers] = useState(driverDetails);

	return (
		<div className='col border'>
			<h2 className='text-center'>Drivers</h2>
			{Object.entries(drivers).map(([id, driver]) => {
				console.log(id, driver);
				return (
					<Droppable droppableId={id} key={id}>
						{(provided, snapshot) => {
							return (
								<div
									ref={provided.innerRef}
									{...provided.droppableProps}
								>
									{driver.name}
									{driver.orders.map((order, index) => {
										return (
											<Draggable draggableId={order.orderId} key={order.orderId} index={index}>
												{(provided, snapshot) => {
													return (
														<div
															ref={provided.innerRef}
															{...provided.draggableProps}
															{...provided.dragHandleProps}
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
				);
			})}
		</div>
	);
};

export default Drivers;