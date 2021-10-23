import React from 'react';
import DriverCard from '../cards/DriverCard';

const Drivers = ({ contents, allOrders }) => {

	return (
		<div className='col border'>
			<h2 className='text-center'>Drivers</h2>
			{Object.entries(contents).map(([driverId, driver]) => {
				return (
					<DriverCard 
						key={driverId}
						driverId={driverId}
						contents={driver}
						allOrders={allOrders}
					/>
				);
			})}
		</div>
	);
};

export default Drivers;