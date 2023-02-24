import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';

import { ChatContext } from '../components/ChatContext';
function RequiredAuth() {
	const { userid } = useContext(ChatContext);
	let location = useLocation();
	if (!userid) {
		return (
			<Navigate
				to='/login'
				state={{ from: location }}
			/>
		);
	}
	return <Outlet />;
}
export default RequiredAuth;
