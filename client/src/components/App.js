import React from 'react';
import Header from './Header';
import MainHub from './MainHub';
import dataBase from '../data/tempData';

const App = () => {
	
	return (
		<>
			<Header />
			<MainHub allData={dataBase}/>
		</>
	)
};

export default App;