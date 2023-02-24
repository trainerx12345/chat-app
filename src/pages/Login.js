import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChatContext } from '../components/ChatContext';
const Login = () => {
	const navigate = useNavigate();
	const { setIsLogin, setIsSignUp, handleChange, formData, Visibility } =
		useContext(ChatContext);

	const loginUser = () => {
		Visibility(false);
		navigate('/chat');
	};

	setIsLogin(false);
	setIsSignUp(true);
	return (
		<div className='container mx-auto min-h-[800px] mb-14'>
			<div className='flex-1 w-full px-6 py-8 mb-8 bg-white border border-gray-300 rounded-lg'>
				<form
					className='flex flex-col gap-y-5 '
					onSubmit={loginUser}
				>
					<label htmlFor='email'>Email </label>
					<input
						className='w-full px-4 text-sm border border-gray-300 rounded outline-none focus:border-violet-700 h-14 '
						type='email'
						placeholder='Email*'
						onChange={handleChange}
						value={formData.email}
						name='email'
						id='email'
					/>
					<label htmlFor='password'>Password </label>
					<input
						className='w-full px-4 text-sm border border-gray-300 rounded outline-none focus:border-violet-700 h-14 '
						type='password'
						placeholder='Password*'
						value={formData.password}
						onChange={handleChange}
						name='password'
						id='password'
					/>
					<button className='w-1/2 px-4 py-3 mx-auto text-white transition rounded-lg hover:bg-white hover:text-violet-700 bg-violet-800'>
						Login
					</button>
				</form>
			</div>
		</div>
	);
};
export default Login;
