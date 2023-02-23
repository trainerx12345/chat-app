const Chats = () => {
	return (
		<div className='h-screen p-2'>
			<div className='flex justify-between '>
				<div className='leading-3 p-3 strong font-semibold'>Chats</div>
				<button className='px-4 py-2 text-white transition rounded-lg hover:bg-white hover:text-violet-700 bg-violet-800 self-end text-sm'>
					New Message
				</button>
			</div>
		</div>
	);
};
export default Chats;
