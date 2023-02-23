import { useContext } from 'react';
import { ChatContext } from '../components/ChatContext';
import ChatDisplay from '../components/ChatDisplay';

const Chat = () => {
	const { Visibility } = useContext(ChatContext);
	Visibility(false);
	return (
		<div className='container h-[750px] mx-auto bg-white -top-0.5'>
			<div>
				<ChatDisplay />
			</div>
		</div>
	);
};
export default Chat;
