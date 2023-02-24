import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChatContext } from '../components/ChatContext';

const ChatInput = () => {
	const { addMessageHandler, textArea, setTextArea, formData, clickedUserId } =
		useContext(ChatContext);

	const message = {
		timestamp: new Date().toISOString(),
		from_userId: formData.userId,
		to_userId: clickedUserId,
		message: textArea,
	};

	return (
		<div className='flex flex-row w-full justify-end items-end'>
			<textarea
				value={textArea}
				onChange={(e) => setTextArea(e.target.value)}
				className='border border-gray-300 focus::border-violet-700 outline-none resize-none rounded w-full p-4 h-[50px] text-sm text-gray-800 '
				placeholder='Message*'
			/>
			<button
				className='px-4 py-3 text-white transition rounded-lg hover:bg-white hover:text-violet-700 bg-violet-800 '
				onClick={addMessageHandler(message)}
			>
				Send
			</button>
		</div>
	);
};
export default ChatInput;
