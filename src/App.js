import { Routes, Route, useRoutes } from 'react-router-dom';
import { useContext } from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import Messenger from './pages/Messenger.js';
import RequiredAuth from './pages/RequiredAuth.js';

function App() {
	return (
		<div className='max-w-[1440px] mx-auto bg-white h-screen'>
			<Header />
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/signup'
					element={<Signup />}
				/>
				<Route
					path='/login'
					element={<Login />}
				/>
				<Route element={<RequiredAuth />}>
					<Route
						path='/messenger'
						element={<Messenger />}
					/>
					<Route
						// path='/profile/:id'
						path='/profile'
						element={<Profile />}
					/>
				</Route>
				<Route
					path='*'
					element={<Home />}
				/>
			</Routes>
			{/* <Footer /> */}
		</div>
	);
}

export default App;
