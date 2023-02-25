import { useContext, useEffect, useState } from 'react';
import { ChatContext } from '../components/ChatContext';

import Contacts from '../components/Contacts';

const Messenger = () => {
	const { formData, userid, fetchUser } = useContext(ChatContext);

	useEffect(() => {
		if (userid !== '') {
			fetchUser();
		}
	}, [userid]);

	return (
		<div className='container flex flex-col w-full sm:mx-auto h-xd sm:py-3'>
			<Contacts />
		</div>
	);
};
export default Messenger;
