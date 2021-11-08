import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Characters from '../views/Characters';
import Home from '../views/Home';
import Header from '../components/Header';
function IndexLayout() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='characters' element={<Characters />} />
			</Routes>
		</>
	);
}

export default IndexLayout;
