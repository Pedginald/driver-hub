import React, { useState } from 'react';
import { driverDB } from '../data/tempData';
import DriverCard from '../cards/DriverCard';

const Drivers = () => {
	const [drivers, setDrivers] = useState(driverDB);

	return (
		<div className='col border'>
			<h2 className='text-center'>Drivers</h2>
			{Object.entries(drivers).map(([driverId, driver]) => {
				console.log(driverId, driver);
				return (
					<DriverCard 
						key={driverId} 
						driverId={driverId} 
						driverDetails={driver}
					/>
				);
			})}
		</div>
	);
};

export default Drivers;