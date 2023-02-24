import { useContext, useEffect, useState } from 'react';
import { BiSearch, BiX } from 'react-icons/bi';
import { ChatContext } from './ChatContext';

const Contacts = () => {
	const { search, setSearch, formData } = useContext(ChatContext);
	const [closeSearch, setCloseSearch] = useState(false);
	const [contacts, setContacts] = useState(false);

	const keyEnter = (e) => {
		return e.keyCode === 13 ? searchHandler() : '';
	};
	const searchHandler = () => {
		alert('Search me?');
	};
	const changeHandler = (e) => {
		setSearch(e.target.value);
		e.target.value.length > 0 ? setCloseSearch(true) : setCloseSearch(false);
		console.log(search);
	};
	const clearHandler = () => {
		setSearch('');
		setCloseSearch(false);
	};

	useEffect(() => {
		formData.contacts.length > 0 ? setContacts(true) : setContacts(false);
		console.log(contacts)
	}, []);

	// useEffect(() => {
	//  searchHandler();
	// 	return;
	// }, [search]);

	return (
		<>
			<div className='h-full  sm:p-2 gap-2'>
				<div className='flex flex-col items-center justify-center'>
					<div className='flex flex-row justify-center items-center border border-gray-300 rounded bg-white'>
						<input
							className='w-full sm:px-2 text-sm outline-none focus:border-violet-700 h-10 rounded-lg focus:bg-red-50'
							type='text'
							placeholder='Search Contact'
							onKeyDown={keyEnter}
							onChange={changeHandler}
							value={search}
						/>
						{closeSearch ? (
							<button
								className=' outline-none'
								onClick={clearHandler}
							>
								<BiX className='w-10  px-1 text-sm border  outline-none  h-10' />
							</button>
						) : (
							<></>
						)}
						<button
							className=' outline-none'
							onClick={searchHandler}
						>
							<BiSearch className='w-10  px-1 text-sm border  outline-none  h-10' />
						</button>
					</div>
				</div>
				{contacts ? (
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
				) : (
					<></>
				)}
			</div>
		</>
	);
};
export default Contacts;
