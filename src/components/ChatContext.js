import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const ChatContext = createContext();

const ChatContextProvider = ({ children }) => {
	const [user, setUser] = useState('');
	const [isLogin, setIsLogin] = useState(false);
	const [profile, setProfile] = useState(false);
	const [textArea, setTextArea] = useState('');
	const [convo, setConvo] = useState(true);
	const [formData, setFormData] = useState({
		url: '',
		name: '',
		password: '',
		retypePassword: '',
		email: '',
		phoneNo: '',
		user_id: localStorage.UserId,
	});

	const resetForm = () => {
		setFormData({
			url: '',
			name: '',
			password: '',
			retypePassword: '',
			email: '',
			phoneNo: '',
			user_id: '',
		});
	};
	const setData = (response) => {
		setFormData({
			url: response.data.user.avatar,
			name: response.data.user.name,
			password: response.data.user.password,
			email: response.data.user.email,
			phoneNo: response.data.user.phoneNumber,
			user_id: response.data.userId,
		});
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
				user,
				setUser,
				formData,
				setFormData,
				handleChange,
				isLogin,
				setIsLogin,
				profile,
				addMessageHandler,
				textArea,
				setTextArea,
				resetForm,
				setData,
				convo,
			}}
		>
			{children}
		</ChatContext.Provider>
	);
};
export default ChatContextProvider;
