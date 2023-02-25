import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { BiSearch, BiX } from 'react-icons/bi';
import { ChatContext } from './ChatContext';

import ChatContent from '../components/ChatContent';

const Contacts = () => {
	const {
		search,
		setSearch,
		formData,
		contacts,
		setContacts,
		setTextArea,
		setClickedUserId,
		clickedUserId,
		userid,
		convo,
		setConvo,
	} = useContext(ChatContext);

	const [closeSearch, setCloseSearch] = useState(false);
	const [clickedUser, setClickedUser] = useState({});
	const [usersMessages, setUsersMessages] = useState([]);
	const [clickedUsersMessages, setClickedUsersMessages] = useState([]);
	const messages = [];
	let [descendingOrderMessages, setDescendingOrderMessages] = useState([]);
	const [searchUser, setSearchUser] = useState([]);

	const getChats = () => {
		if (usersMessages.length > 0) {
			usersMessages.map((value, ind) => {
				const formattedMessage = {};
				formattedMessage['message'] = value.message;
				formattedMessage['timestamp'] = value.timestamp;
				messages.push(formattedMessage);
			});
		}

		if (clickedUsersMessages.length > 0) {
			usersMessages.map((value, ind) => {
				const formattedMessage = {};
				formattedMessage['message'] = value.message;
				formattedMessage['timestamp'] = value.timestamp;
				messages.push(formattedMessage);
			});
		}
		setDescendingOrderMessages(
			messages?.sort((a, b) => a.timestamp.localeCompare(b.timestamp)),
		);
	};

	const fetchContacts = () => {
		if (formData.contacts.length > 0) {
			let tempData = [];
			formData.contacts.map(async (uid, ind) => {
				try {
					const response = await axios.get(
						`https://mechatapp-api.onrender.com/api/v1/user/${uid}`,
						//`http://localhost:8090/api/v1/user/${uid}`,
					);
					if (response.status === 200) {
						tempData.push(response.data);
						contacts.item = tempData;
					}
				} catch (err) {
					console.log(err);
				}
			});
		}
		return;
	};

	/* FOR FETCHING DETAILS ABOUT THE USERS MESSAGES */
	const getUsersMessages = async () => {
		try {
			const response = await axios.get(
				`https://mechatapp-api.onrender.com/api/v1/${localStorage.getItem(
					'UserId',
				)}/${clickedUserId}`,
				//`http://localhost:8090/api/v1/message/${localStorage.getItem('UserId',)}/${clickedUserId}`,
			);
			setUsersMessages(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	const getClickedUsersMessages = async () => {
		try {
			const response = await axios.get(
				`https://mechatapp-api.onrender.com/api/v1/${clickedUserId}/${localStorage.getItem(
					'UserId',
				)}`,
				// `http://localhost:8090/api/v1/message/${clickedUserId}/${localStorage.getItem('UserId',	)}`,
			);
			setClickedUsersMessages(response.data);
		} catch (error) {
			console.log(error);
		}
	};
	const keyEnter = (e) => {
		return e.keyCode === 13 ? searchHandler() : '';
	};
	const searchHandler = async () => {
		setConvo(false);
		try {
			const response = await axios.get(
				`https://mechatapp-api.onrender.com/api/v1/user/email/${search}`,
			);
			//	`http://localhost:8090/api/v1/user/email/${search}`,
			if (response.status === 200 || response.status === 304) {
				setSearchUser(response.data);
			}
		} catch (err) {
			console.log(err);
		}
	};
	const changeHandler = (e) => {
		setSearch(e.target.value);
		e.target.value.length > 0 ? setCloseSearch(true) : setCloseSearch(false);
	};

	const clearHandler = () => {
		setSearch('');
		setCloseSearch(false);
		setSearchUser([]);
		fetchContacts();
	};

	const getClickId = async (e) => {
		setConvo(false);
		setTextArea('');
		setClickedUserId(e.target.id);
		if (e.target.id !== '') {
			try {
				const response = await axios.get(
					`https://mechatapp-api.onrender.com/api/v1/user/${e.target.id}`,
					//	`http://localhost:8090/api/v1/user/${e.target.id}`,
				);
				const success = response.status === 200;
				if (success) {
					setClickedUser({ user: response.data });
					getUsersMessages();
					getClickedUsersMessages();
					getChats();
					setConvo(true);
					return;
				}
			} catch (err) {
				console.log(err);
			}
		}

		// setConvo(true);
	};
	const addUser = async () => {
		console.log(searchUser);
		try {
			const response = await axios.put(
				`https://mechatapp-api.onrender.com/api/v1/user/${userid}/${searchUser._id}`,
				//`http://localhost:8090/api/v1/user/${userid}/${searchUser._id}`,
			);
			const success = response.status === 200;
			if (success) {
				alert('You have successfully add a new friend');
				clearHandler();
			}
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		clearHandler();
	}, []);

	return (
		<>
			<div className='flex flex-col h-full sm:flex-row '>
				<div className='w-full sm:max-w-[250px] bg-slate-100'>
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
						{closeSearch && (
							<div className='flex flex-col mx-auto items-center p-5 w-full justify-center mt-10'>
								<div className='w-full h-[90px] flex items-center justify-center mb-16'>
									<img
										src={searchUser.avatar}
										alt=''
										className=' rounded-full w-25 transition'
									/>
								</div>
								<div className='flex flex-col gap-3 w-full py-2 transition text-center'>
									<p>
										<span className='font-semibold text-center'>
											{searchUser.email}
										</span>{' '}
									</p>
								</div>
								<div>
									<button
										className=' font-bold text-center px-4 py-3 text-white rounded-lg hover:bg-white hover:text-violet-700 bg-violet-800 transition '
										onClick={addUser}
									>
										Add Friend
									</button>
								</div>
							</div>
						)}

						<div className='flex flex-col gap-2 py-3'>
							<ul className='flex flex-col gap-1 mx-auto items-center p-1 w-full '>
								{contacts.item.map((value, index) => {
									return (
										<div className='w-full h-[90px] relative'>
											<div
												id={value._id}
												onClick={getClickId}
												className='z-10 w-full h-full bg-transparent cursor-pointer  hover:bg-blend-color-burn transition absolute top-0 left-0 items-center justify-center backdrop-blur-0'
											></div>
											<li className='flex flex-row gap-5 p-2  border border-violet-300  rounded-3xl w-full  list-none items-center justify-center  absolute top-0 left-0'>
												<img
													src={value.avatar}
													alt=''
													className=' rounded-full w-16 transition'
												/>

												<div className='flex flex-col gap-3 w-full py-2transition'>
													<p>
														<span className='font-semibold '>{value.name}</span>{' '}
														{contacts.isOnline ? (
															<span className=' text-green-600 rounded-full mx-auto p-2'>
																Online
															</span>
														) : (
															<span className=' text-red-600 rounded-full mx-auto p-1'>
																Offline
															</span>
														)}
													</p>
												</div>
											</li>
										</div>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
				{convo && (
					<ChatContent
						clickedUser={clickedUser}
						descendingOrderMessages={descendingOrderMessages}
						getUsersMessages={getUsersMessages}
						getClickedUsersMessages={getClickedUsersMessages}
						getChats={getChats}
					/>
				)}
			</div>
		</>
	);
};
export default Contacts;
