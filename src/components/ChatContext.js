import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const ChatContext = createContext();

const ChatContextProvider = ({ children }) => {
	const userid = localStorage.getItem('UserId');
	const [isLogin, setIsLogin] = useState(false);
	const [textArea, setTextArea] = useState('');
	const [convo, setConvo] = useState(true);
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
		localStorage.setItem('UserId', response._id);
	};

	const fetchUser = async () => {
		try {
			const response = await axios.get(
				`https://mechatapp-api.onrender.com/api/v1/user/${userid}`,
			);
			console.log(response.data);

			const success = response.status === 200;
			if (success) {
				setData(response.data);
			}
		} catch (err) {
			console.log(err);
			const status = err.response.status;
			if (status === 404) {
				console.log('No user Exist');
				return;
			}
			if (status === 400) {
				console.log('Incorrect password');
				alert('Password is incorrect');
				return;
			}
			if (status === 500) {
				console.log('Server Error');
				alert('server error');
				return;
			}
		}
	};
	const setUserOffline = async () => {
		try {
			const response = await axios.put(
				`https://mechatapp-api.onrender.com/api/v1/auth/offline/${userid}`,
			);

			const success = response.status === 204;
			console.log(response);
			if (success) {
				//	setData(response.data);
				// localStorage.removeItem('UserId');
				// resetForm();
			}
		} catch (err) {
			console.log(err);
			const status = err.response.status;
			if (status === 404) {
				console.log('No user Exist');
				return;
			}
			if (status === 400) {
				console.log('Incorrect password');
				alert('Password is incorrect');
				return;
			}
			if (status === 500) {
				console.log('Server Error');
				alert('server error');
				return;
			}
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

	const addMessageHandler = (message) => {};

	return (
		<ChatContext.Provider
			value={{
				formData,
				setFormData,
				handleChange,
				isLogin,
				setIsLogin,
				addMessageHandler,
				textArea,
				setTextArea,
				resetForm,
				setData,
				convo,
				userid,
				fetchUser,
				setUserOffline,
			}}
		>
			{children}
		</ChatContext.Provider>
	);
};
export default ChatContextProvider;
