import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const ChatContext = createContext();

const ChatContextProvider = ({ children }) => {
	const [user, setUser] = useState('');
	const [isLogin, setIsLogin] = useState(true);
	const [isSignUp, setIsSignUp] = useState(true);
	const [profile, setProfile] = useState(false);
	const [textArea, setTextArea] = useState('');
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
	const handleChange = (e) => {
		const value = e.target.value;
		const name = e.target.name;

		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const loginUser = () => {};
	const Visibility = (isVisible) => {
		setIsLogin(isVisible);
		setIsSignUp(isVisible);
		isLogin === false && isSignUp === false
			? setProfile(true)
			: setProfile(false);
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
				isSignUp,
				setIsSignUp,
				Visibility,
				loginUser,
				profile,
				addMessageHandler,
				textArea,
				setTextArea,
				resetForm,
			}}
		>
			{children}
		</ChatContext.Provider>
	);
};
export default ChatContextProvider;
