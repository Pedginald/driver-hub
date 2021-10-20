import React, { useState } from 'react';
import { driverDB } from '../data/tempData';
import DriverCard from '../cards/DriverCard';

const Drivers = () => {
	const [drivers, setDrivers] = useState(driverDB);

	return (
		<div className='col border'>
			<h2 className='text-center'>Drivers</h2>
			{Object.entries(drivers).map(([id, driver]) => {
				console.log(id, driver);
				return (
					<DriverCard key={id} driverId={id} driverDetails={driver}/>
				);
			})}
		</div>
	);
};

export default Drivers;