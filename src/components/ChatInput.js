import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChatContext } from '../components/ChatContext';

const ChatInput = ({ getUsersMessages, getClickedUsersMessages, getChats }) => {
	const { textArea, setTextArea, userid, clickedUserId, setConvo, convo } =
		useContext(ChatContext);

	const keyEnter = (e) => {
		return e.keyCode === 13 ? sendMessage() : '';
	};
	const sendMessage = async () => {
		const message = {
			timestamp: new Date().toISOString(),
			from_userId: userid,
			to_userId: clickedUserId,
			message: textArea,
		};
		setConvo(false);
		if (textArea !== '') {
			try {
				const response = await axios.post(
					`https://mechatapp-api.onrender.com/api/v1/message`,
					//`http://localhost:8090/api/v1/message`,
					{ message },
				);
				const success = response.status === 201;
				if (success) {
					setConvo(false);
					setTextArea('');
					setConvo(true);
					setConvo(false);
					getUsersMessages();
					getClickedUsersMessages();
					getChats();
					setConvo(true);
				}
			} catch (err) {
				console.log(err);
			}
		}
	};
	return (
		<div className='flex flex-row w-full justify-end items-end'>
			<textarea
				value={textArea}
				onChange={(e) => setTextArea(e.target.value)}
				className='border border-gray-300 focus::border-violet-700 outline-none resize-none rounded w-full p-4 h-[50px] text-sm text-gray-800 scroll-m-0 overflow-hidden'
				placeholder='Message*'
				onKeyDown={keyEnter}
			/>
			<button
				className='px-4 py-3 text-white transition rounded-lg hover:bg-white hover:text-violet-700 bg-violet-800 '
				onClick={sendMessage}
			>
				Send
			</button>
		</div>
	);
};
export default ChatInput;
