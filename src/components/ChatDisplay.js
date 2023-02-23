import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChatContext } from '../components/ChatContext';

import ChatInput from './ChatInput';
import ChatContent from './ChatContent';
import Chats from './Chats';
const ChatDisplay = () => {
	const {} = useContext(ChatContext);

	return (
		<>
			<div className='flex mx-auto gap-4'>
				<div className='flex flex-col w-5/12 gap-5 '>
					<Chats />
				</div>
				<div className='flex flex-col w-full mx-auto'>
					<ChatContent />
					<ChatInput />
				</div>
			</div>
		</>
	);
};
export default ChatDisplay;
