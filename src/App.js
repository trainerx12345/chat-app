import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import Messenger from './pages/Messenger.js';
function App() {
	return (
		<div className='max-w[1440px] mx-auto bg-white h-full min-h-screen'>
			<Header />
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					// path='/profile/:id'
					path='/profile'
					element={<Profile />}
				/>
				<Route
					path='/messenger'
					element={<Messenger />}
				/>
				<Route
					path='/signup'
					element={<Signup />}
				/>
				<Route
					path='/login'
					element={<Login />}
				/>
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
