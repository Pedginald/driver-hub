import React, { useState } from 'react';
import Header from './Header';
import MainHub from './MainHub';
import dataBase from '../data/tempData';

const App = () => {
	const [initialData, setInitialData] = useState(dataBase);

	return (
		<>
			<Header />
			<MainHub state={initialData} setState={setInitialData}/>
		</>
	)
};

export default App;