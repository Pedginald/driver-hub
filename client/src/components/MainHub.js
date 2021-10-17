import React from "react";
import UnassignedOrders from "./UnassignedOrders";
import Drivers from "./Drivers";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const MainHub = () => {
	return (
		<div className="container-fluid mt-4">
			<div className="row">
				<UnassignedOrders />
				<Drivers />
			</div>
		</div>
	)
};

export default MainHub;