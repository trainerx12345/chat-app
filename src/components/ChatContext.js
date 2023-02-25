import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const ChatContext = createContext();

const ChatContextProvider = ({ children }) => {
	const [search, setSearch] = useState('');
	const [userid, setuserid] = useState(localStorage.getItem('UserId'));
	const [isLogin, setIsLogin] = useState(false);
	const [textArea, setTextArea] = useState('');
	const [clickedUserId, setClickedUserId] = useState('');
	const [convo, setConvo] = useState(false);
	const [contacts, setContacts] = useState({
		item: [],
	});

	const [formData, setFormData] = useState({
		url: '',
		name: '',
		password: '',
		retypePassword: '',
		email: '',
		phoneNo: '',
		contacts: [],
		isOnline: false,
	});

	const resetForm = () => {
		setFormData({
			url: '',
			name: '',
			password: '',
			retypePassword: '',
			email: '',
			phoneNo: '',
			contacts: [],
			isOnline: false,
		});
	};
	const setData = (response) => {
		setFormData({
			url: response.avatar,
			name: response.name,
			password: response.password,
			email: response.email,
			phoneNo: response.phoneNumber,
			isOnline: response.isOnline,
			contacts: response.contacts,
		});
		setuserid(response._id);
		localStorage.setItem('UserId', response._id);
	};

	const fetchUser = async () => {
		try {
			const response = await axios.get(
				`https://mechatapp-api.onrender.com/api/v1/user/${userid}`,
				//`http://localhost:8090/api/v1/user/${userid}`,
			);
			const success = response.status === 200;
			if (success) {
				setData(response.data);
			}
		} catch (err) {
			console.log(err);
		}
	};
	const setUserOffline = async () => {
		try {
			const response = await axios.put(
				`https://mechatapp-api.onrender.com/api/v1/auth/offline/${userid}`,
				//`http://localhost:8090/api/v1/auth/offline/${userid}`,
			);
			const success = response.status === 200;
			if (success) {
				localStorage.removeItem('UserId');
				resetForm();
			}
		} catch (err) {
			console.log(err);
		}
	};

	const handleChange = (e) => {
		const value = e.target.value;
		const name = e.target.name;

		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
		<ChatContext.Provider
			value={{
				formData,
				setFormData,
				handleChange,
				isLogin,
				setIsLogin,
				resetForm,
				setData,
				textArea,
				setTextArea,
				userid,
				fetchUser,
				search,
				setSearch,
				setuserid,
				setUserOffline,
				contacts,
				setContacts,
				clickedUserId,
				setClickedUserId,
				convo,
				setConvo,
			}}
		>
			{children}
		</ChatContext.Provider>
	);
};
export default ChatContextProvider;
