import { useContext, useEffect, useState } from 'react';
import { ChatContext } from './ChatContext';
import ChatInput from '../components/ChatInput';

const ChatContent = ({
	clickedUser,
	descendingOrderMessages,
	getUsersMessages,
	getClickedUsersMessages,
	getChats,
}) => {
	const { userid, formData, clickedUserId } = useContext(ChatContext);
	useEffect(() => {
		// console.log(descendingOrderMessages, 'ChatContent');
	}, []);

	return (
		<>
			<div className='flex-row sm:flex-col w-full gap-5 hidden sm:flex  mx-auto'>
				<div className='w-full h-full'>
					<div className='flex flex-row border-b-2 gap-5  items-center py-2 sm:ml-2'>
						<img
							src={clickedUser.user.avatar}
							alt=''
							className=' rounded-full w-10 focus:bg-violet-500 hover:bg-violet-800 transition'
						/>
						<p className='text-violet-600'>{clickedUser.user.name}</p>
					</div>
					<div className='h-full text-violet-500 gap-5  '>
						{descendingOrderMessages.map((message, _index) => (
							<div
								key={_index}
								className='m-2 rounded-lg border border-violet-300 '
							>
								<div className='flex flex-col p-1 '>
									<p className='font-medium text-violet-500 text-right'>
										{message.message}
									</p>
								</div>
							</div>
						))}
					</div>
					<ChatInput
						getUsersMessages={getUsersMessages}
						getClickedUsersMessages={getClickedUsersMessages}
						getChats={getChats}
					/>
				</div>
			</div>
		</>
	);
};
export default ChatContent;
