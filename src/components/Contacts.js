import { useContext } from 'react';
import { BiSearch } from 'react-icons/bi';
import ChatContent from './ChatContent';

const Contacts = () => {
	const keyEnter = (e) => {
		return e.keyCode === 13 ? searchHandler() : '';
	};
	const searchHandler = () => {
		alert('Search me?');
	};
	return (
		<>
			<div className='h-full px-2 sm:p-2 gap-2'>
				<div className='flex flex-col items-center justify-center'>
					<div className='flex flex-row justify-center items-center border border-gray-300 rounded bg-white'>
						<input
							className='w-full px-2 text-sm   outline-none focus:border-violet-700 h-10 rounded-lg'
							type='text'
							placeholder='Search Contact'
							onKeyDown={keyEnter}
						/>
						<button
							className=' outline-none'
							onClick={searchHandler}
						>
							<BiSearch className='w-10  px-1 text-sm border  outline-none  h-10' />
						</button>
					</div>
				</div>

				<div className='flex flex-col gap-2 py-3'>
					<div className='flex flex-row gap-1 mx-auto'>
						<img
							src=''
							alt=''
						/>
						<h1>picture</h1>
						<p>Name</p>
					</div>
					<div className='flex  flex-row gap-1 mx-auto'>
						<img
							src=''
							alt=''
						/>
						<h1>picture</h1>
						<p>Name</p>
					</div>
				</div>
			</div>
		</>
	);
};
export default Contacts;
