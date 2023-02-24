import { useContext, useEffect } from 'react';
import { ChatContext } from '../components/ChatContext';

import Chats from '../components/Chats';
import ChatContent from '../components/ChatContent';
import ChatInput from '../components/ChatInput';
const Messenger = () => {
	const { formData, convo } = useContext(ChatContext);
	useEffect(() => {
		console.log(formData);
		return;
	}, []);

	return (
		<>
			<div className='container flex flex-col w-full mx-auto bg-violet-200 h-full sm:h-[500px] gap-2 sm:py-3'>
				<div className='flex flex-col sm:gap-3 sm:flex-row sm:h-full sm:[h-1000px]'>
					<div className='w-full sm:max-w-[250px] bg-green-100'>
						<Chats />
					</div>
					{convo === false ? (
						<></>
					) : (
						<div className='flex-row sm:flex-col w-full gap-5 bg-green-400 hidden sm:flex'>
							<ChatContent />
							<ChatInput />
						</div>
					)}
				</div>
			</div>
		</>
	);
};
export default Messenger;
